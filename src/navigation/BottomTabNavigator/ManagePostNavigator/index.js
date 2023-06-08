import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { SCREENS } from '../../../constants';
import { ManagePostScreen } from '../../../screens';

const { Navigator, Screen } = createNativeStackNavigator();

const ManagePostNavigator = () => (
  <Navigator
    screenOptions={{
      gestureEnabled: false,
      headerShown: false,
    }}
  >
    <Screen
      name={SCREENS.MANAGE_POSTS}
      component={ManagePostScreen}
    />
  </Navigator>
);

export default ManagePostNavigator;
