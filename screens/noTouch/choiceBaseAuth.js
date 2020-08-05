import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import DeviceComp from '../../components/DeviceComp';
import Backdrop from '../../components/Backdrop';
import Modal from '../../components/LiftModal';

const ChoiceBaseAuthScreen = (props) => {
  const [show, setShow] = useState(false);
  const handler1 = () => {
    Alert.alert('Door Opened!', 'Door is now open!');
  };
  const handler2 = () => {
    setShow(true);
  };
  return (
    <View style={styles.screen}>
      {/* <Text style={styles.text}>Nearby Lifts</Text>
      <DeviceComp name="Lift1" press={handler2} />
      <DeviceComp name="Lift2" press={handler2} /> */}
      <Text style={styles.text}>Nearby Doors</Text>
      <DeviceComp name="Door23" press={handler1} />
      <DeviceComp name="Door22" press={handler1} />
      <DeviceComp name="Door21" press={handler1} />
      <Backdrop show={show} press={() => setShow(false)} />
      <Modal show={show} />
    </View>
  );
};
export default ChoiceBaseAuthScreen;
const styles = StyleSheet.create({
  screen: { alignItems: 'center', justifyContent: 'center', flex: 1 },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
