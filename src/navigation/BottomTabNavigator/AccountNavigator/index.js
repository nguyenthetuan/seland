import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import {
  AccountScreen,
  ChangePasswordScreen,
  PersonalInformationScreen,
} from '../../../screens';

const { Navigator, Screen } = createNativeStackNavigator();

const AccountNavigator = () => (
  <Navigator
    screenOptions={{
      gestureEnabled: false,
      headerShown: false,
    }}
  >
    <Screen
      name="Account"
      component={AccountScreen}
    />
    <Screen
      name="ChangePassword"
      component={ChangePasswordScreen}
    />
    <Screen
      name="PersonalInformation"
      component={PersonalInformationScreen}
    />
  </Navigator>
);

export default AccountNavigator;
