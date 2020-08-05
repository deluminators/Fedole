import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../../components/Button';
import HeaderButton from '../../components/HeaderButton';
const HearMeScreen = (props) => {
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
      <Button
        onPress={() => props.navigation.navigate('Choice based authorization')}
      >
        Choice based authorization
      </Button>
      <Button
        onPress={() =>
          props.navigation.navigate('Identity based authorization')
        }
      >
        Identity based authorization
      </Button>
    </View>
  );
};
export default HearMeScreen;
const styles = StyleSheet.create({
  screen: { alignItems: 'center', justifyContent: 'center', flex: 1 },
});
