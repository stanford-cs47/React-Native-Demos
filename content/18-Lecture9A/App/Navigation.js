import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import UploadScreen from './Screens/UploadScreen';
import ViewScreen from './Screens/ViewImages';
import AuthLoadingScreen from './Screens/AuthLoadingScreen';
import AuthScreen from './Screens/AuthScreen';

const HomeTab = createBottomTabNavigator({
  Upload: {screen: UploadScreen},
  View: {screen: ViewScreen},
},
{
  headerMode: 'float',
  initialRouteName: 'Upload'
})

const AppNav = createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    App: HomeTab,
    Auth: AuthScreen,
  },
  {
    initialRouteName: 'AuthLoading',
  })

const AppContainer = createAppContainer(AppNav);

export default AppContainer
