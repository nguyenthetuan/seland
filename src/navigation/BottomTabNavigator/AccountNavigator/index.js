import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { getScreens } from '../../../utils';
import routes from './routes';

const { Navigator, Screen } = createNativeStackNavigator();

const AccountNavigator = () => (
  <Navigator
    screenOptions={{
      gestureEnabled: false,
      headerShown: false,
    }}
    initialRouteName="PersonalInformation"
  >
    {getScreens(Screen, routes)}
  </Navigator>
);

export default AccountNavigator;
