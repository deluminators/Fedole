import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import CustomButton from '../../components/Button';

const UserCard = (props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '80%',
        backgroundColor: '#fff',
        paddingVertical: 5,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
      }}
    >
      <Text style={{ fontWeight: '600', fontSize: 18 }}>{props.id}</Text>
      <Button
        title="Request Share"
        onPress={() =>
          Alert.alert(
            'Request Sent!',
            `A request message has been sent to the "${props.id}". You will be notified If he approves your request.`,
            [{ text: 'understood' }]
          )
        }
      />
    </View>
  );
};

const LibraryScreen = (props) => {
  const [name, setName] = useState('');
  const [show, setShow] = useState(false);
  return (
    <View style={styles.screen}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(str) => setName(str)}
        placeholder="Search Book Name"
      />
      <View style={{ width: '50%', marginTop: -15 }}>
        <CustomButton onPress={() => setShow(true)}>Search</CustomButton>
      </View>
      {show ? (
        <>
          <UserCard id="xyx123" />
          <UserCard id="sourav07" />
          <CustomButton
            onPress={() =>
              Alert.alert(
                'Book Issued!',
                `The book "${name}" has been issued and requests has been sent to other users. If any user approves your request, You will be notified. `,
                [{ text: 'understood' }]
              )
            }
          >
            Request To Recieve From Library
          </CustomButton>
        </>
      ) : null}
    </View>
  );
};

export default LibraryScreen;

const styles = StyleSheet.create({
  screen: { alignItems: 'center', flex: 1 },
  input: {
    width: '80%',
    backgroundColor: '#fff',
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#007aff',
  },
});
