import React, {
  useLayoutEffect,
  useCallback,
  useReducer,
  useState,
} from 'react';
import {
  ScrollView,
  Text,
  Image,
  StyleSheet,
  View,
  Button,
} from 'react-native';
import HeadButton from '../../components/HeadButton';
import HeaderButton from '../../components/HeaderButton';
import Input from '../../components/Input';
import Card from '../../components/Card';
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

const HomeScreen = (props) => {
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
    <ScrollView>
      <View style={styles.head}>
        <LinearGradient colors={['#36D1DC', '#5B86E5']} style={styles.gradient}>
          <Image
            style={styles.image}
            source={{
              uri: photo,
            }}
          />

          <Text style={{ color: 'white', fontSize: 15, paddingVertical: 3 }}>
            {name}
          </Text>
          <Text style={{ color: 'white', fontSize: 15, paddingVertical: 1 }}>
            3rd Year
          </Text>
          <Text style={{ color: 'white', fontSize: 15, paddingVertical: 3 }}>
            B518051, CE
          </Text>
        </LinearGradient>
      </View>
      {/* <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: 20,
          paddingVertical: 10,
          paddingLeft: 10,
        }}
      >
        Personal Information
      </Text> */}

      {/* <Card style={styles.authContainer}>
        <Input
          id="email"
          label="E-Mail"
          keyboardType="email-address"
          autoCapitalize="none"
          onInputChange={inputChangeHandler}
          initialValue={email}
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
      </Card> */}
      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: 20,
          paddingVertical: 10,
          paddingLeft: 10,
        }}
      >
        Attendance
      </Text>
      <ScrollView
        contentContainerStyle={{ flexDirection: 'row' }}
        horizontal={true}
      >
        <Card style={{ width: 100, alignItems: 'center', margin: 5 }}>
          <Text>19/19</Text>
          <Text style={{ fontWeight: '700', paddingTop: 5 }}>OS</Text>
        </Card>
        <Card style={{ width: 100, alignItems: 'center', margin: 5 }}>
          <Text>15/19</Text>
          <Text style={{ fontWeight: '700', paddingTop: 5 }}>DCCN</Text>
        </Card>
        <Card style={{ width: 100, alignItems: 'center', margin: 5 }}>
          <Text>13/19</Text>
          <Text style={{ fontWeight: '700', paddingTop: 5 }}>IWT</Text>
        </Card>
        <Card style={{ width: 100, alignItems: 'center', margin: 5 }}>
          <Text>12/19</Text>
          <Text style={{ fontWeight: '700', paddingTop: 5 }}>WSM</Text>
        </Card>
        <Card style={{ width: 100, alignItems: 'center', margin: 5 }}>
          <Text>12/19</Text>
          <Text style={{ fontWeight: '700', paddingTop: 5 }}>TOC</Text>
        </Card>
      </ScrollView>
      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: 20,
          paddingVertical: 10,
          paddingLeft: 10,
        }}
      >
        Upcoming Classes
      </Text>
      <Card style={{ width: '70%', alignSelf: 'center' }}>
        <Text style={{ fontSize: 18, fontWeight: '700', paddingBottom: 5 }}>
          Operating System
        </Text>
        <Text>Tomorrow 9.30am</Text>
        <Text style={{ paddingVertical: 8 }}>Room no. : A220</Text>
        <Button title="Set Alarm" />
      </Card>
      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: 20,
          paddingVertical: 10,
          paddingLeft: 10,
        }}
      >
        Upcoming Doubts solving session
      </Text>
      <Card style={{ width: '70%', alignSelf: 'center' }}>
        <Text style={{ fontSize: 18, fontWeight: '700', paddingBottom: 5 }}>
          Networking
        </Text>
        <Text>Tomorrow 8.00am</Text>
        <Text>Faculty : Dr. Suraj Sharma</Text>
        <Text style={{ paddingVertical: 8 }}>Topic : OSI Model</Text>
        <Button title="Set Alarm" />
      </Card>
      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: 20,
          paddingVertical: 10,
          paddingLeft: 10,
        }}
      >
        Your Assignments
      </Text>
      <Card style={{ width: '70%', alignSelf: 'center', marginBottom: 40 }}>
        <Text style={{ fontSize: 18, fontWeight: '700', paddingBottom: 5 }}>
          Operating System
        </Text>
        <Text>Assignment 1</Text>
        <Text style={{ paddingVertical: 8 }}>Create a kernel...</Text>
        <Button title="Show More" />
      </Card>
    </ScrollView>
  );
};
export default HomeScreen;

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
    height: 230,
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
  },
});
