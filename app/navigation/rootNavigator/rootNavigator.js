import { createStackNavigator, createAppContainer } from 'react-navigation';

import { AllContactsScreen } from '../screenConfig/screenConfig';
import { Routes } from '../screenConfig/routes';

const rootNavigator = createStackNavigator({
  AllContactsScreen: {
    screen: AllContactsScreen,
  },
}, {
  initialRouteName: Routes.AllContactsScreen,
});

export default createAppContainer(rootNavigator);
