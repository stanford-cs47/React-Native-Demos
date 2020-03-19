import { createStackNavigator } from 'react-navigation-stack';

import * as screens from '../Screens';

const StackNav = createStackNavigator({
    StoreScreen: { screen: screens.StoreScreen },
    ShipInfoScreen: { screen: screens.ShipInfoScreen },
  }, {
    initialRouteName: 'StoreScreen',
    // Created custom header in each screen instead
    headerMode: 'none',
    // Set background color
    cardStyle: { backgroundColor: 'black' },
});

export default StackNav;



