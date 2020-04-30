import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';
import { Images, Colors, Metrics } from '../Themes'
import { StyleSheet, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import HomeScreen from '../Screens/HomeScreen';
import BookmarkScreen from '../Screens/BookmarkScreen';
import BookmarkViewerScreen from '../Screens/BookmarkViewerScreen';
import UserProfileScreen from '../Screens/UserProfileScreen';


/* PART 1: Create a StackNavigator that contains the HomeScreen, and the UserProfileScreen */
/* initialRouteName should be your HomeScreen. Set headerMode to 'float'  */

// EX-ADD (Added below)
const HomeStack = createStackNavigator();
const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName='Home'
      headerMode='float'
    >
      <HomeStack.Screen
        name='Home'
        component={HomeScreen} />
      <HomeStack.Screen
        name='UserProfile'
        component={UserProfileScreen} />
    </HomeStack.Navigator>
  );
}

/* PART 2: Create a StackNavigator that contains the BookmarkScreen, and the BookmarkViewerScreen */
/* initialRouteName should be your BookmarkScreen. Set headerMode to 'float'  */

// EX-ADD (Added below)
const BookmarkStack = createStackNavigator();
const BookmarkStackNavigator = () => {
  return (
    <BookmarkStack.Navigator
      initialRouteName='Bookmarks'
      headerMode='float'
    >
      <BookmarkStack.Screen
        name='Bookmarks'
        component={BookmarkScreen} />
      <BookmarkStack.Screen
        name='BookmarkViewer'
        component={BookmarkViewerScreen} />
    </BookmarkStack.Navigator>
  );
}

/* PART 3: nest both StackNavigators in the TabNavigator below */
/* Your FeedScreen should point to the StackNavigator that you created in Part 1 */
/* Your BookmarkScreen should point to the StackNavigator that you created in Part 2 */

/* OPTIONAL: Add icons for both tabs using option as shown in lecture

*/

const TabNav = createBottomTabNavigator();

// Manifest of possible screens
function AppContainer() {
  return (
    <NavigationContainer>
      <TabNav.Navigator
        initialRouteName='FeedScreen'
        tabBarOptions={{
          activeTintColor: Colors.black,
          showLabel: true,
        }}
      >
        <TabNav.Screen
          name='FeedScreen'
          component={HomeStackNavigator}
          options={{
            title: 'Bookmarks',
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
              <Entypo
                name="home"
               size={Metrics.icons.medium}
               color={tintColor} />
            ),
          }} />
        <TabNav.Screen
          name='BookmarkScreen'
          component={BookmarkStackNavigator}
          options={{
            tabBarLabel: 'Bookmarks',
            tabBarIcon: ({ tintColor }) => (
              <Entypo
                name="bookmark"
                size={Metrics.icons.medium}
                color={tintColor} />
              ),
          }} />
      </TabNav.Navigator>
    </NavigationContainer>
  );
}

export default AppContainer
