import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import * as pages from './App/pages';

const ParamsNav = createStackNavigator({
  Params: {screen: pages.ParamsFunction},
});

const StackNav = createStackNavigator({
  Home: {screen: pages.ItBeLikeThat},
  Buttons: {screen: pages.Buttons},
},{
  initialRouteName: 'Home',
  // mode: 'modal',
});

const DrawerNav = createDrawerNavigator({
  ParamsFunction: {screen: ParamsNav},
  DrawerFunctions: {screen: pages.DrawerFunctions},
},{
  initialRouteName: 'DrawerFunctions',
});

const TabNav = createBottomTabNavigator({
  Home: {screen: StackNav},
  Buttons: {screen: DrawerNav},
},{
  initialRouteName: 'Home',
});

const MyApp = createAppContainer(StackNav);
export default MyApp;