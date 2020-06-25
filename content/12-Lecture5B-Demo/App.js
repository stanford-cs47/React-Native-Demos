import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import * as pages from './App/pages';

/**
 * Stack Navigator
 */
const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name='Home'
        component={pages.ItBeLikeThat}
        options={{ title: 'It Be Like That' }} />
      <Stack.Screen
        name='Buttons'
        component={pages.Buttons}
        options={{ title: 'Buttons' }} />
    </Stack.Navigator>
  );
}

/**
 * Drawer Navigator
 */
const Drawer = createDrawerNavigator();
// Stack to be nested in drawer
const ParamsStack = createStackNavigator();
const ParamsNavigator = () => {
  return (
    <ParamsStack.Navigator>
      <ParamsStack.Screen
        name='Params'
        component={pages.ParamsFunction}
        options={{ title: 'Params Functions' }} />
    </ParamsStack.Navigator>
  );
}
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName='DrawerFunctions'>
      <Drawer.Screen
        name='DrawerFunctions'
        component={pages.DrawerFunctions}
        options={{ title: 'Drawer Functions' }} />
      <Drawer.Screen
        name='ParamsFunction'
        component={ParamsNavigator}
        options={{ title: 'Params Functions' }} />
    </Drawer.Navigator>
  );
}

/**
 * Tab Navigator
 */
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name='Home' component={StackNavigator} />
      <Tab.Screen name='Buttons' component={DrawerNavigator} />
    </Tab.Navigator>
  );
}

// Demo with either StackNavigator or TabNavigator or DrawerNavigator
export default function MyApp() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
