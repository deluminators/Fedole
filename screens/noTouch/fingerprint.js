import React, { useLayoutEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';

import * as LocalAuthentication from 'expo-local-authentication';

const FingerprintScreen = (props) => {
  const scanFingerprint = async () => {
    let result = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Scan your finger.',
    });
    console.log('Scan Result:', result);
  };
  const showAndroidAlert = () => {
    Alert.alert(
      'Fingerprint Scan',
      'Place your finger over the touch sensor and press scan.',
      [
        {
          text: 'Scan',
          onPress: () => {
            scanFingerprint();
          },
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel'),
          style: 'cancel',
        },
      ]
    );
  };

  return (
    <View style={styles.screen}>
      {/* <Text style={{ fontSize: 30, fontWeight: 'bold', marginVertical: 20 }}>
        Authentication Successful!
      </Text> */}
      <TouchableOpacity
        onPress={Platform.OS === 'android' ? showAndroidAlert : scanFingerprint}
        style={styles.button}
      >
        <Text style={styles.buttonText}>SCAN</Text>
      </TouchableOpacity>
    </View>
  );
};
export default FingerprintScreen;
const styles = StyleSheet.create({
  screen: { alignItems: 'center', justifyContent: 'center', flex: 1 },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 60,
    backgroundColor: '#056ecf',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 30,
    color: '#fff',
  },
});
