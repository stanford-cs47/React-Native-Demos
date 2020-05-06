import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import React from 'react';
import { Images, Colors, Metrics } from '../Themes'
import { Entypo } from '@expo/vector-icons';
import HomeScreen from '../Screens/HomeScreen'
import BookmarkScreen from '../Screens/BookmarkScreen'
import BookmarkViewerScreen from '../Screens/BookmarkViewerScreen'
import UserProfileScreen from '../Screens/UserProfileScreen'

const HomeStack = createStackNavigator({
  Home: {screen: HomeScreen},
  UserProfile: {screen: UserProfileScreen},
},
{
  headerMode: 'float',
  initialRouteName: 'Home'
})

const BookmarkStack = createStackNavigator({
  Bookmarks: {screen: BookmarkScreen},
  BookmarkViewer: {screen: BookmarkViewerScreen},
},
{
  headerMode: 'float',
  initialRouteName: 'Bookmarks'
})

BookmarkStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: 'Bookmarks',
    tabBarIcon: ({ tintColor }) => (
      <Entypo name="bookmark"
        size={Metrics.icons.medium}
        color={tintColor} />
    ),
  };
};

HomeStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Entypo name="home"
        size={Metrics.icons.medium}
        color={tintColor} />
    ),
  };
};

// Manifest of possible screens
const TabNav = createBottomTabNavigator({
  FeedScreen: { screen: HomeStack },
  BookmarkScreen:   { screen: BookmarkStack },
}, {
  // Default config for all screens
  initialRouteName: 'FeedScreen',
  tabBarOptions: {
    activeTintColor: Colors.black,
    showLabel: true,
  },
})

const AppContainer = createAppContainer(TabNav);

export default AppContainer
