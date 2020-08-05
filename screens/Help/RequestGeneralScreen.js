import React, { useState, useEffect, useReducer, useCallback } from 'react';
import { View, Text, StyleSheet, Picker, Alert } from 'react-native';

import Input from '../../components/Input';
import Card from '../../components/Card';
import Button from '../../components/Button';

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

const RequestGeneralScreen = (props) => {
  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: '',
      password: '',
    },
    inputValidities: {
      email: false,
      password: false,
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

  const [itemType, setItemType] = useState('TA');

  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <Text>Item Type</Text>
        <Picker
          selectedValue={itemType}
          onValueChange={(val) => setItemType(val)}
        >
          <Picker.Item label="Teacher Assignment" value="TA" />
          <Picker.Item label="Lab Assignment" value="LA" />
          <Picker.Item label="Parcel" value="Parcel" />
        </Picker>
        <Input
          id="name"
          label="Item Name"
          keyboardType="default"
          required
          minLength={5}
          autoCapitalize="none"
          errorText="Please enter a name."
          onInputChange={inputChangeHandler}
          initialValue=""
        />
        <Input
          id="description"
          label="Item Description"
          keyboardType="default"
          required
          minLength={10}
          autoCapitalize="none"
          errorText="Minimum 10 characters."
          onInputChange={inputChangeHandler}
          initialValue=""
        />
        <Input
          id="pickup"
          label="Pickup Details"
          keyboardType="default"
          required
          autoCapitalize="none"
          errorText="Enter pickup."
          onInputChange={inputChangeHandler}
          initialValue=""
        />
        <Button
          onPress={() =>
            Alert.alert(
              'Request Sent!',
              'A request has been sent to all other users. If anyone approves your request, You will be notified.\nYou can see status of your request in previous request section',
              [{ text: 'understood' }]
            )
          }
        >
          Submit Request
        </Button>
      </Card>
    </View>
  );
};
export default RequestGeneralScreen;
const styles = StyleSheet.create({
  screen: { alignItems: 'center', flex: 1, justifyContent: 'center' },
  card: {
    width: '90%',
    paddingHorizontal: 30,
  },
});
