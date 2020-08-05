import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../../components/Button';
import HeaderButton from '../../components/HeaderButton';

const FindMyPlace = (props) => {
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
    <View style={styles.screen}>
      <Button onPress={() => props.navigation.navigate('My Place')}>
        {' '}
        Find My Place
      </Button>
      <Button>Find Nearby Place</Button>
    </View>
  );
};
export default FindMyPlace;
const styles = StyleSheet.create({
  screen: { alignItems: 'center', justifyContent: 'center', flex: 1 },
});
