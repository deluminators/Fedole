import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderButton from '../../components/HeaderButton';
import Button from '../../components/Button';
const ChatRoom = (props) => {
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
      <Button onPress={() => props.navigation.navigate('Live Chat')}>
        Chat With Faculties
      </Button>
      <Button onPress={() => props.navigation.navigate('Asked Questions')}>
        See Questions
      </Button>
    </View>
  );
};
export default ChatRoom;
const styles = StyleSheet.create({
  screen: { alignItems: 'center', justifyContent: 'center' },
});
