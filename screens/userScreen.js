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
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';

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
