import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import * as screens from '../Screens';

const Stack = createStackNavigator();

export default class StackNav extends React.Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName='StoreScreen'
        headerMode='none'
        cardStyle={{ backgroundColor: 'black' }}>
          <Stack.Screen
            name="StoreScreen"
            component={screens.StoreScreen}/>
          <Stack.Screen
            name="ShipInfoScreen"
            component={screens.ShipInfoScreen}/>
      </Stack.Navigator>
    )
  }
}