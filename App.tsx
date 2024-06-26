import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainNavigation} from './src/navigation/Navigation';
import MainScreen from './src/bottomTab/MainScreen';
import {Provider} from 'react-redux';
import {store} from './src/redux/Store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
}
