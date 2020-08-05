import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../../components/Button';
import HeaderButton from '../../components/HeaderButton';

const Learning = (props) => {
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
        onPress={() => props.navigation.navigate('Doubt Clearing Classes')}
      >
        Doubt Clearing Classes
      </Button>
      <Button>Smart Classes</Button>
      <Button>Smart Exams</Button>
    </View>
  );
};
export default Learning;
const styles = StyleSheet.create({
  screen: { alignItems: 'center', justifyContent: 'center', flex: 1 },
});
