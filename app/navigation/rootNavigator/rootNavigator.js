import { createStackNavigator, createAppContainer } from 'react-navigation';

import { AllContactsScreen, AddContact, ContactDetails } from '../screenConfig/screenConfig';
import { Routes } from '../screenConfig/routes';

const rootNavigator = createStackNavigator({
  AllContactsScreen: {
    screen: AllContactsScreen,
  },
  AddContact: {
    screen: AddContact,
  },
  ContactDetails: {
    screen: ContactDetails,
  },
}, {
  initialRouteName: Routes.AllContactsScreen,
});

export default createAppContainer(rootNavigator);
