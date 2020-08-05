import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { ScrollView } from 'react-native-gesture-handler';

const RequestCard = (props) => {
  return (
    <Card style={styles.card}>
      <Text style={styles.head}>{props.name}</Text>
      <Text style={styles.text}>Type : {props.type}</Text>
      <Text style={styles.text}>
        Requested on {props.reqdate} at {props.reqtime}
      </Text>
      <Text style={styles.text}>
        Recieved by {props.reciever} on {props.recdate} at {props.rectime}
      </Text>
      <Text style={styles.text}>You lost {props.points} points</Text>
      <View style={{ marginTop: -5 }}>
        <Button>Show More Details</Button>
      </View>
    </Card>
  );
};

const PreviousRequests = (props) => {
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <RequestCard
        name="C Prog Assignment"
        reqdate="Today"
        reqtime="10.30pm"
        recdate="Today"
        rectime="10.45pm"
        type="Teacher Assignmet"
        reciever="sourav07"
        points="50"
      />
      <RequestCard
        name="Amazon Parcel"
        reqdate="29-07-2020"
        reqtime="10.30am"
        recdate="29-07-2020"
        rectime="11.00am"
        type="Parcel"
        reciever="You"
        points="120"
      />
      <RequestCard
        name="OS Lab Copy"
        reqdate="25-082020"
        reqtime="12.30pm"
        recdate="25-082020"
        rectime="12.55pm"
        type="Lab Assignmet"
        reciever="You"
        points="40"
      />
    </ScrollView>
  );
};
export default PreviousRequests;
const styles = StyleSheet.create({
  screen: { alignItems: 'center', justifyContent: 'center' },
  card: {
    width: '80%',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  head: {
    fontSize: 18,
    fontWeight: '700',
    paddingTop: 5,
    paddingBottom: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    paddingVertical: 5,
  },
});
