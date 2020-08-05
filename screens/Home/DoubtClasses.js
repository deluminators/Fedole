import React from 'react';
import { ScrollView, Text, StyleSheet, Button } from 'react-native';
import Card from '../../components/Card';
import * as expoLinking from 'expo-linking';
const DoubtClasses = (props) => {
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Card style={{ width: '80%', alignSelf: 'center', marginVertical: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: '700', paddingBottom: 5 }}>
          TOC
        </Text>
        <Text>LIVE now</Text>
        <Text>Faculty : Dr. Suraj Sharma</Text>
        <Text style={{ paddingVertical: 8 }}>Topic : OSI Model</Text>
        <Button
          onPress={() =>
            expoLinking.openURL(
              'https://meet.google.com/lookup/dnwgv33nhw?authuser=0&hs=179'
            )
          }
          title="JOIN CLASS"
        />
      </Card>
      <Card style={{ width: '80%', alignSelf: 'center', marginVertical: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: '700', paddingBottom: 5 }}>
          Operating System
        </Text>
        <Text>Tomorrow 9.00am</Text>
        <Text>Faculty : Dr. Suraj Sharma</Text>
        <Text style={{ paddingVertical: 8 }}>Topic : OSI Model</Text>
        <Button disabled title="JOIN CLASS" />
      </Card>
      <Card style={{ width: '80%', alignSelf: 'center', marginVertical: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: '700', paddingBottom: 5 }}>
          Networking
        </Text>
        <Text>Tomorrow 8.00am</Text>
        <Text>Faculty : Dr. Suraj Sharma</Text>
        <Text style={{ paddingVertical: 8 }}>Topic : OSI Model</Text>
        <Button disabled title="JOIN CLASS" />
      </Card>
    </ScrollView>
  );
};
export default DoubtClasses;
const styles = StyleSheet.create({
  screen: { alignItems: 'center' },
});
