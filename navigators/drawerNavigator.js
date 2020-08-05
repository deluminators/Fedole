import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import {
  HelpMeStack,
  PredictionStack,
  QRcodeStack,
  StackUser,
  LetGoStack,
  ChatStack,
  KeepMeSafeStack,
  NoTouchStack,
  HomeStack,
  LearnStack,
  NoticeBoardStack,
  FindMyPlaceStack,
} from './stackNavigators';
import CustomDrawer from '../components/customDrawer';

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator initialRouteName="Home" shifting={true}>
    <Tab.Screen
      name="Home"
      component={HomeStack}
      options={{
        tabBarIcon: ({ color }) => {
          return <Ionicons name="ios-home" size={26} color={color} />;
        },
        tabBarColor: '#0f88fa',
      }}
    />
    <Tab.Screen
      name="Learn"
      component={LearnStack}
      options={{
        tabBarIcon: ({ color }) => {
          return <Ionicons name="ios-book" size={26} color={color} />;
        },
        tabBarColor: '#0f88fa',
      }}
    />
    <Tab.Screen
      name="Notice"
      component={NoticeBoardStack}
      options={{
        tabBarIcon: ({ color }) => {
          return <Ionicons name="ios-notifications" size={26} color={color} />;
        },
        tabBarColor: '#0f88fa',
      }}
    />
  </Tab.Navigator>
);

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
    <Drawer.Screen name="Home" component={TabNavigator} />
    <Drawer.Screen name="Search Path" component={PredictionStack} />
    <Drawer.Screen name="Help Me!" component={HelpMeStack} />
    <Drawer.Screen name="Let Me Go!" component={LetGoStack} />
    <Drawer.Screen name="Fin My Place!" component={FindMyPlaceStack} />
    <Drawer.Screen name="Scan QRcode" component={QRcodeStack} />
    <Drawer.Screen name="Chat Room" component={ChatStack} />
    <Drawer.Screen name="Keep Me Safe!" component={KeepMeSafeStack} />
    <Drawer.Screen name="Hear Me!" component={NoTouchStack} />
    {/* <Drawer.Screen name="Profile" component={StackUser} /> */}
  </Drawer.Navigator>
);
