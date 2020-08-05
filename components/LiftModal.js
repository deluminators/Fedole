import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Button from './Button';
import Card from './Card';
import { Ionicons } from '@expo/vector-icons';

const NameModal = (props) => {
  if (!props.show) return null;
  return (
    <Card style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          keyboardType="numeric"
          placeholder="Enter floor number"
          style={styles.input}
        />
        <Ionicons
          style={{
            borderColor: 'blue',
            borderWidth: 1,
            paddingVertical: 3,
            paddingHorizontal: 10,
          }}
          name="ios-mic"
          size={36}
          color="black"
        />
      </View>
      <Button>Submit</Button>
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
    borderColor: 'blue',
    borderWidth: 1,
    padding: 7,
    width: '90%',
  },
});
