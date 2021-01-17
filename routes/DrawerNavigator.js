import React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import About from '../screens/about';

const { Navigator, Screen } = createStackNavigator();

const AboutNavigator = () => (
  <Navigator
    headerMode='float'
    screenOptions={{
      headerTintColor: '#444',
      headerStyle: { backgroundColor: '#eee', height: 75 },
    }}
  >
    <Screen name='About' component={Home} options={{ title: 'About' }} />
  </Navigator>
);

export const AboutStack = () => (
  <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
);
