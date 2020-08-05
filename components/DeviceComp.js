import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';

const DeviceComp = (props) => {
  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple('white')}
      onPress={props.press}
    >
      <View
        style={{
          width: '80%',
          backgroundColor: 'black',
          paddingVertical: 10,
          paddingHorizontal: 15,
          borderRadius: 5,
          marginTop: 10,
        }}
      >
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
          {props.name}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default DeviceComp;
