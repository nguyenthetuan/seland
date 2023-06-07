import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { SCREENS } from '../../../constants';
import { AccountScreen } from '../../../screens';

const { Navigator, Screen } = createNativeStackNavigator();

const AccountNavigator = () => (
  <Navigator
    screenOptions={{
      gestureEnabled: false,
      headerShown: false,
    }}
  >
    <Screen
      name={SCREENS.ACCOUNT}
      component={AccountScreen}
    />
  </Navigator>
);

export default AccountNavigator;
