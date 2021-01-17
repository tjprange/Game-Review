import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails.js';
import { globalStyles } from '../styles/global.js';

const { Navigator, Screen } = createStackNavigator();

export const HomeStack = () => (
  <Navigator
    headerMode='float'
    screenOptions={{
      headerTintColor: '#444',
      headerStyle: { backgroundColor: '#eee', height: 75 },
    }}
  >
    <Screen name='Home' component={Home} options={{ title: 'Game Zone' }} />
    <Screen
      name='Details'
      component={ReviewDetails}
      options={{ title: 'Review Details' }}
    />
  </Navigator>
);

export const HomeNavigator = () => (
  <NavigationContainer>
    <HomeStack />
  </NavigationContainer>
);
