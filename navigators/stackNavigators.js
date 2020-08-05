import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import HelpScreen from '../screens/Help/helpScreen';
import RequestGeneralScreen from '../screens/Help/RequestGeneralScreen';
import LibraryScreen from '../screens/Help/LibraryScreen';
import PreviousRequests from '../screens/Help/previousRequests';
import PredictionScreen from '../screens/PredictCrowd/PredictionPage';
import Location from '../screens/PredictCrowd/Location';
import PossibleRoutes from '../screens/PredictCrowd/possibleRoutes';
import Scanner from '../screens/QRcode/scanner';
import UserScreen from '../screens/userScreen';
import LetGoScreen from '../screens/LetGo/letGo';
import ChatBot from '../screens/ChatRoom/chatBot';
import ChatRoom from '../screens/ChatRoom/charRoom';
import Questions from '../screens/ChatRoom/Questions';
import KeepMeSafeScreen from '../screens/keepMeSafe';

const Stack = createStackNavigator();

export const HelpMeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#007aff' },
    }}
  >
    <Stack.Screen name="Help Me!" component={HelpScreen} />
    <Stack.Screen name="General Items!" component={RequestGeneralScreen} />
    <Stack.Screen name="Library Items!" component={LibraryScreen} />
    <Stack.Screen name="Previous Requests" component={PreviousRequests} />
  </Stack.Navigator>
);

export const PredictionStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#007aff' },
    }}
  >
    <Stack.Screen name="Search Path" component={PredictionScreen} />
    <Stack.Screen name="Maps" component={Location} />
    <Stack.Screen name="Possible Routes" component={PossibleRoutes} />
  </Stack.Navigator>
);

export const QRcodeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#7b5a44' },
      }}
    >
      <Stack.Screen name="Scan the code" component={Scanner} />
    </Stack.Navigator>
  );
};

export const StackUser = () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#4e54c8' },
    }}
  >
    <Stack.Screen name="My Profile" component={UserScreen} />
  </Stack.Navigator>
);

export const LetGoStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#007aff' },
    }}
  >
    <Stack.Screen name="Let Me Go!" component={LetGoScreen} />
  </Stack.Navigator>
);

export const KeepMeSafeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#007aff' },
    }}
  >
    <Stack.Screen name="Keep Me Safe!" component={KeepMeSafeScreen} />
  </Stack.Navigator>
);

export const ChatStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#094074' },
      }}
    >
      <Stack.Screen name="Chat Room" component={ChatRoom} />
      <Stack.Screen name="Live Chat" component={ChatBot} />
      <Stack.Screen name="Asked Questions" component={Questions} />
    </Stack.Navigator>
  );
};
