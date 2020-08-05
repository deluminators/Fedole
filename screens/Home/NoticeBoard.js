import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Card from '../../components/Card';
import HeaderButton from '../../components/HeaderButton';

const NoticeBoard = (props) => {
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
    });
  });
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Card style={styles.contain}>
        <Text
          numberOfLines={2}
          style={{ width: 40, marginRight: 9, fontWeight: '700', fontSize: 14 }}
        >
          2020-08-04
        </Text>
        <Text style={{ flex: 1 }}>
          All classes will remain suspended 3:00 PM onwards today (4th August)
          for B.Tech Batch 2017-2021 --Attention: B.Tech. Batch 2017-21 students
          Posted by: Academics Office !
        </Text>
      </Card>
      <Card style={styles.contain}>
        <Text
          numberOfLines={2}
          style={{ width: 40, marginRight: 9, fontWeight: '700', fontSize: 14 }}
        >
          2020-08-04
        </Text>
        <Text style={{ flex: 1 }}>
          TOC Assignment --Attention: B.Tech CE 5th Sem Posted by: Tapan Kumar
          Sahoo
        </Text>
      </Card>
      <Card style={styles.contain}>
        <Text
          numberOfLines={2}
          style={{ width: 40, marginRight: 9, fontWeight: '700', fontSize: 14 }}
        >
          2020-08-04
        </Text>
        <Text style={{ flex: 1 }}>
          Students Applying to Collect Valuables from Hostels --Attention:
          Boarders Posted by: Tanutrushna Panigrahi
        </Text>
      </Card>
      <Card style={styles.contain}>
        <Text
          numberOfLines={2}
          style={{ width: 40, marginRight: 9, fontWeight: '700', fontSize: 14 }}
        >
          2020-08-04
        </Text>
        <Text style={{ flex: 1 }}>
          Critical Reading Material Available for All 3 rd Sem students
          --Attention: 3rd Sem Students Posted by: Tanutrushna Panigrahi
        </Text>
      </Card>
    </ScrollView>
  );
};
export default NoticeBoard;
const styles = StyleSheet.create({
  screen: { alignItems: 'center', justifyContent: 'center' },
  contain: {
    width: '90%',
    marginVertical: 10,
    flexDirection: 'row',
    flex: 1,
  },
});
