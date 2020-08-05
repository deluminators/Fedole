import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './navigators/drawerNavigator';
import { locationReducer } from './store/reducers/location';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  location: locationReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
}
