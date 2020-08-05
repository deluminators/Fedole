import React from 'react';
import { View, Text, StyleSheet, Picker, Dimensions } from 'react-native';
import Card from '../../components/Card';
import { ScrollView } from 'react-native-gesture-handler';

const MyPlace = (props) => {
  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <Picker selectedValue="PV">
          <Picker.Item label="Mess" value="PV" />
          <Picker.Item label="Canteen" value="TA" />
          <Picker.Item label="Class Room" value="LA" />
          <Picker.Item label="Lab Room" value="Taxi" />
          <Picker.Item label="Toilet" value="Train" />
        </Picker>
      </Card>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          width: Dimensions.get('window').width,
        }}
      >
        <Card style={{ width: '90%', marginVertical: 10 }}>
          <Text>Table 1</Text>
          <Text>Last cleaned : Today 9.00am</Text>
        </Card>
        <Card style={{ width: '90%', marginVertical: 10 }}>
          <Text>Table 2</Text>
          <Text>Last cleaned : Today 9.00am</Text>
        </Card>
        <Card style={{ width: '90%', marginVertical: 10 }}>
          <Text>Table 3</Text>
          <Text>Last cleaned : Today 9.00am</Text>
        </Card>
        <Card style={{ width: '90%', marginVertical: 10 }}>
          <Text>Table 4</Text>
          <Text>Last cleaned : Today 9.00am</Text>
        </Card>
        <Card style={{ width: '90%', marginVertical: 10 }}>
          <Text>Table 5</Text>
          <Text>Last cleaned : Today 9.15am</Text>
        </Card>
        <Card style={{ width: '90%', marginVertical: 10 }}>
          <Text>Table 6</Text>
          <Text>Last cleaned : Yesterday 9.00pm</Text>
        </Card>
        <Card style={{ width: '90%', marginVertical: 10 }}>
          <Text>Table 7</Text>
          <Text>Last cleaned : Today 9.00am</Text>
        </Card>
        <Card style={{ width: '90%', marginVertical: 10 }}>
          <Text>Table 8</Text>
          <Text>Last cleaned : Today 9.00am</Text>
        </Card>
      </ScrollView>
    </View>
  );
};
export default MyPlace;
const styles = StyleSheet.create({
  screen: { alignItems: 'center', flex: 1 },
  card: {
    width: '90%',
    paddingHorizontal: 30,
    marginBottom: 10,
  },
});
