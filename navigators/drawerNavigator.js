import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  HelpMeStack,
  PredictionStack,
  QRcodeStack,
  StackUser,
  LetGoStack,
  ChatStack,
  KeepMeSafeStack,
} from './stackNavigators';
import CustomDrawer from '../components/customDrawer';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => (
  <Drawer.Navigator
    drawerStyle={{ backgroundColor: 'white' }}
    drawerContentOptions={{
      labelStyle: {
        color: 'black',
      },
      activeTintColor: 'orange',
    }}
    drawerContent={(props) => <CustomDrawer {...props} />}
  >
    <Drawer.Screen name="Searh Path" component={PredictionStack} />
    <Drawer.Screen name="Help Me!" component={HelpMeStack} />
    <Drawer.Screen name="Let Me Go!" component={LetGoStack} />
    <Drawer.Screen name="Scan QRcode" component={QRcodeStack} />
    <Drawer.Screen name="Chat Room" component={ChatStack} />
    <Drawer.Screen name="Keep Me Safe!" component={KeepMeSafeStack} />
    <Drawer.Screen name="Profile" component={StackUser} />
  </Drawer.Navigator>
);
