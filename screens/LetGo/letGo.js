import React, {
  useState,
  useLayoutEffect,
  useReducer,
  useCallback,
} from 'react';
import { View, Text, StyleSheet, Picker, Alert, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import HeaderButton from '../../components/HeaderButton';

import Input from '../../components/Input';
import Card from '../../components/Card';
import CustomButton from '../../components/Button';
import { ScrollView } from 'react-native-gesture-handler';

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
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

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
        return (
          <HeaderButton
            name="ios-notifications"
            color="white"
            size={25}
            onPress={() => {}}
          />
        );
      },
    });
  });

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    if (selectedDate.getTime() < Date.now()) {
      Alert.alert('Ooops!', `You can't arrange events in past!!`);
      return;
    }
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Card style={styles.card}>
        <Input
          id="name"
          label="Your Name"
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
          label="Complete address of Your Destination"
          keyboardType="default"
          required
          minLength={4}
          autoCapitalize="none"
          errorText="Minimum 4 characters."
          onInputChange={inputChangeHandler}
          initialValue=""
        />
        <Input
          id="new"
          label="Cause of Your journey"
          keyboardType="default"
          required
          minLength={4}
          autoCapitalize="none"
          errorText="Minimum 4 characters."
          onInputChange={inputChangeHandler}
          initialValue=""
        />
        <Text style={{ marginTop: 10 }}>Transportation Mode</Text>
        <Picker
          selectedValue={itemType}
          onValueChange={(val) => setItemType(val)}
        >
          <Picker.Item label="Personal Vehicle" value="PV" />
          <Picker.Item label="Bus" value="TA" />
          <Picker.Item label="Auto" value="LA" />
          <Picker.Item label="Taxi" value="Taxi" />
          <Picker.Item label="Train" value="Train" />
          <Picker.Item label="Flight" value="Fli" />
        </Picker>
        <Text>Date and time of journey</Text>
        <View style={styles.input}>
          <Text style={styles.text}>{date.toISOString().slice(0, 10)}</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Button onPress={showDatepicker} title="Pick a date!" />
        </View>
        <View style={styles.input}>
          <Text style={styles.text}>
            {date.getHours()}:{date.getMinutes()}
          </Text>
        </View>
        <View style={{ marginVertical: 10 }}>
          <Button onPress={showTimepicker} title="Pick a time!" />
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
            minimumDate={new Date()}
          />
        )}

        <CustomButton
          onPress={() =>
            Alert.alert(
              'Request Sent!',
              'A request has been sent to college authorities. If they approve your request, You will be allowed to go out.\n\nYour whole journey will be tracked and shared with college authorities.',
              [{ text: 'understood' }]
            )
          }
        >
          Request For Approval
        </CustomButton>
      </Card>
    </ScrollView>
  );
};
export default RequestGeneralScreen;
const styles = StyleSheet.create({
  screen: { alignItems: 'center', justifyContent: 'center' },
  card: {
    width: '90%',
    paddingHorizontal: 30,
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: '50%',
    marginTop: 10,
    alignSelf: 'center',
  },
});
