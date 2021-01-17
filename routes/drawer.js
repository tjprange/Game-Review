import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AboutStack } from './aboutStack.js';
import { HomeNavigator } from './homeStack.js';
import { HomeStack } from './homeStack.js';
import Home from '../screens/home';
import About from '../screens/about';
// ----------------------------------------------
const { Screen } = createStackNavigator();
const Drawer = createDrawerNavigator();

// const DrawerStack = () => (
//   <Drawer initialRouteName='Home'>
//     {/* <Screen name='HomeStack' component={HomeNavigator} /> */}
//   </Drawer>
// );

// export const DrawerNavigator = () => (
//   <NavigationContainer>
//     <DrawerStack />
//   </NavigationContainer>
// );
// ----------------------------------------------

export const DrawerNavigator = () => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name='Home' component={HomeStack} />
      <Drawer.Screen name='About' component={About} />
      {/* <Drawer.Screen name='Notifications' component={NotificationsScreen} /> */}
    </Drawer.Navigator>
  </NavigationContainer>
);

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
