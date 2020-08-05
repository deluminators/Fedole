import React, { useState, useCallback, useReducer } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './Button';
import Card from './Card';
import Input from './Input';

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

const NameModal = (props) => {
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
  if (!props.show) return null;
  return (
    <Card style={styles.container}>
      <Input
        id="name"
        label="Question title"
        keyboardType="default"
        required
        minLength={5}
        autoCapitalize="none"
        errorText="Please enter a name."
        onInputChange={inputChangeHandler}
        initialValue=""
      />
      <Input
        id="desc"
        label="Question Description"
        keyboardType="default"
        required
        minLength={5}
        autoCapitalize="none"
        errorText="Please enter a name."
        onInputChange={inputChangeHandler}
        initialValue=""
      />
      <Button>Upload Any Image</Button>
      <Button>Post Your Question</Button>
    </Card>
  );
};

export default NameModal;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    position: 'absolute',
    zIndex: 5,
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    top: '20%',
    // translateY:
  },
  input: {
    marginVertical: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    padding: 5,
    width: '90%',
  },
});
