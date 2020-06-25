import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import UploadScreen from './Screens/UploadScreen';
import ViewScreen from './Screens/ViewImages';
import AuthLoadingScreen from './Screens/AuthLoadingScreen';
import AuthScreen from './Screens/AuthScreen';

const HomeTab = createBottomTabNavigator();
function HomeTabNavigator() {
  return (
    <HomeTab.Navigator
      initialRouteName='Upload'
      headerMode='float'>
      <HomeTab.Screen name='Upload' component={UploadScreen} />
      <HomeTab.Screen name='View' component={ViewScreen} />
    </HomeTab.Navigator>
  );
}

const AppStack = createStackNavigator();
function AppStackNavigator() {
  return (
    <AppStack.Navigator initialRouteName='AuthLoading'>
      <AppStack.Screen name='AuthLoading' component={AuthLoadingScreen} />
      <AppStack.Screen name='App' component={HomeTabNavigator} />
      <AppStack.Screen name='Auth' component={AuthScreen} />
    </AppStack.Navigator>
  );
}

export default function AppContainer() {
  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  );
}
// const HomeTab = createBottomTabNavigator({
//   Upload: {screen: UploadScreen},
//   View: {screen: ViewScreen},
// },
// {
//   headerMode: 'float',
//   initialRouteName: 'Upload'
// })

// const AppNav = createSwitchNavigator({
//     AuthLoading: AuthLoadingScreen,
//     App: HomeTab,
//     Auth: AuthScreen,
//   },
//   {
//     initialRouteName: 'AuthLoading',
//   })

// const AppContainer = createAppContainer(AppNav);

// export default AppContainer
