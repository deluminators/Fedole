import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../../components/Button';
import HeaderButton from '../../components/HeaderButton';

const HelpScreen = (props) => {
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
      headerRight: () => {
        return (
          <HeaderButton
            name="ios-notifications"
            color="white"
            size={25}
            onPress={() => {}}
          />
        );
      },
    });
  });

  return (
    <View style={styles.screen}>
      <Button onPress={() => props.navigation.navigate('Library Items!')}>
        Request Library Books
      </Button>
      <Button onPress={() => props.navigation.navigate('General Items!')}>
        Request General Items
      </Button>
      <Button onPress={() => props.navigation.navigate('Previous Requests')}>
        Show Previous Requests
      </Button>
    </View>
  );
};
export default HelpScreen;
const styles = StyleSheet.create({
  screen: { alignItems: 'center', justifyContent: 'center', flex: 1 },
});
