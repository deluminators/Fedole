import React, {
  useLayoutEffect,
  useCallback,
  useReducer,
  useState,
} from 'react';

import { ScrollView, Text, Image, StyleSheet, View } from 'react-native';
import HeadButton from '../components/HeadButton';
import HeaderButton from '../components/HeaderButton';
import Input from '../components/Input';
import Card from '../components/Card';
import { LinearGradient } from 'expo-linear-gradient';
const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};
const UserScreen = (props) => {
  let name = 'Sourav Kunda',
    mobile = '8223459589',
    email = 'sourav@gmail.com',
    points = '1200',
    photo =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLfn6eqrsbTp6+zg4uOwtrnJzc/j5earsbW0uby4vcDQ09XGyszU19jd3+G/xMamCvwDAAAFLklEQVR4nO2d2bLbIAxAbYE3sDH//7WFbPfexG4MiCAcnWmnrzkjIRaD2jQMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMw5wQkHJczewxZh2lhNK/CBOQo1n0JIT74/H/qMV0Z7GU3aCcVPuEE1XDCtVLAhgtpme7H0s1N1U7QjO0L8F7llzGeh1hEG/8Lo7TUmmuSrOfns9xnGXpXxsONPpA/B6OqqstjC6Ax/0ujkNdYQQbKNi2k64qiiEZ+ohi35X+2YcZw/WujmslYewiAliVYrxgJYrdwUmwXsU+RdApUi83oNIE27YvrfB/ZPg8+BJETXnqh9CVzBbTQHgojgiCvtqU9thFJg/CKz3VIMKMEkIXxIWqIpIg2SkjYj+xC816mrJae2aiWGykxRNsW0UwiJghJDljYI5CD8GRiCtIsJxizYUPQ2pzItZy5pcisTRdk/a9m4amtNNfBuQkdVhSaYqfpNTSFGfb9GRIakrE2Pm+GFLaCQPqiu0OpWP+HMPQQcgQMiQprWXNmsVwIjQjYi/ZrhAqNTCgr2gu0Jnz85RSSjso0HkMFZ0YZjKkc26a/jlmh9JiDyDxi9oeorTYAzZkwwoMz19pzj9bnH/GP/+qbchjSGflneWYhtTuKdMOmNKZcJ5TjInQKcYXnESd/jQxy0ENpULTNGOGgxpap/oyw9pbUAqhfx2Dbkhovvfgz4iUzoM9+GlK6/Mh4q29hyC1mwro30hpVVLPF9wYQr71RazOeM5/cw81iBRD+A03aM9/C/obbrKjbYSpCmIVG3qT/Q8oeUo3Rz0IL7vI1tEbCB9pSiu8I/aV8x3Kg/BGWrWp4ZVs0nZfmAoEG4h/61yHYIJiFSl6Q0Vk6tTW1N8kYp8hdOkfHYYMXd2Qft+8CYwqYDSKvqIh+MCF8Wgca2u/cwdgeW3TtuVn6+1oBs3yLo5C2JpK6CvQzGpfUkz9UG/87gCsi5o2LIXolxN0FbwAsjOLEr+YJmXn7iR6N0BCt5p5cMxm7eAsfS+/CACQf4CTpKjzgkvr2cVarVTf96372yut7XLJ1sa7lv6VcfgYrWaxqr3Wlo1S6pvStr22sxOtTNPLzdY3nj20bPP+ejFdJYkLsjGLdtPBEbe/mr2bQKiXWJDroA+vtzc0p9aahuwqHMDYrQEXHEw9jwQl3drMpts9JBU1SdktPe5FBRdJQ6bwXBpa57ib2A8kukQDzMjh++Uo7Fo6Wd02Pkf4fknqoo4HtvAIjsqUcjx6DIPgWCaOML9rKI/oqD9/lgNrn+eF+p7j8tnzHBiR7+kdUGw/+V1Kzkc75mMy6U+FMaxjPibiM1U1uGM+puInHpmALZCgP4pt7i840MV8+0R1zPsRB6UTcqpizncYwZ89syDydfyWCwXB1l8/zRNGWbTG/GHKUm9AkxHMc/EGSk3z2+ArEhPEV5TUBLEvUGFcjEUH80J/jveTGOAJEljJbILWGQT3zRYiwuKsUXN1EEJAzBhRJFll7mBUG7KD8EqPkKekBREaL8hMDZLQSG6AQjtHPYmvTQnX0TtpC1SYCe2YdkkyLP3jj5BSbKiuR585eQhTgoje6yIb0Yb0C+mV6EYvebqw5SDy2WmubogZiF2AVxPC2FpDf8H2Q9QWo6IkjUxTWVEI3WY/wrCeSuqJ+eRWzXR/JXwgVjUMozbCOfoEZiSiKVGepqv5CJ8RyR4D7xBeamqa7z3BJ/z17JxuBPdv93d/a2Ki878MMAzDMAzDMAzDMAzDMF/KP09VUmxBAiI3AAAAAElFTkSuQmCC';

  const [isLoading, setIsLoading] = useState(false);
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => {
        return (
          <HeaderButton
            name="ios-menu"
            color="white"
            size={25}
            onPress={() => {
              props.navigation.toggleDrawer();
            }}
          />
        );
      },
      headerRight: () => {
        return <HeadButton name="Logout" color="red" />;
      },
    });
  });
  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: email,
      name: name,
      mobile: mobile,
    },
    inputValidities: {
      email: false,
      name: false,
      mobile: false,
    },
    formIsValid: false,
  });
  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );
  return (
    <ScrollView contentConstytainerStyle={{ flex: 1 }}>
      <View style={styles.head}>
        <LinearGradient colors={['#4e54c8', '#8f94fb']} style={styles.gradient}>
          <Image
            style={styles.image}
            source={{
              uri: photo,
            }}
          />

          <Text style={{ color: 'white', fontSize: 15, paddingVertical: 10 }}>
            {name}
          </Text>
        </LinearGradient>
      </View>
      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: 20,
          paddingVertical: 10,
          paddingLeft: 10,
        }}
      >
        Personal Information
      </Text>

      <Card style={styles.authContainer}>
        <ScrollView>
          <Input
            id="email"
            label="E-Mail"
            keyboardType="email-address"
            autoCapitalize="none"
            onInputChange={inputChangeHandler}
            initialValue={email}
          />

          <Input
            id="name"
            label="Name"
            keyboardType="default"
            required
            autoCapitalize="none"
            errorText="Please enter a valid name."
            onInputChange={inputChangeHandler}
            initialValue={name}
          />
          <Input
            id="mobile"
            label="Mobile"
            keyboardType="phone-pad"
            required
            minLength={10}
            autoCapitalize="none"
            errorText="Please enter a valid number."
            onInputChange={inputChangeHandler}
            initialValue={mobile}
          />
          <Input
            id="budgetStart"
            label="Available Points"
            keyboardType="number-pad"
            required
            minLength={3}
            autoCapitalize="none"
            errorText="Please enter a valid number."
            onInputChange={inputChangeHandler}
            initialValue={points}
          />
        </ScrollView>
      </Card>
    </ScrollView>
    // </KeyboardAvoidingView>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  head: {
    width: '100%',
    minHeight: 220,
    height: '24%',
    backgroundColor: '#6a00f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  authContainer: {
    width: '100%',
    minHeight: '100%',
  },
});
