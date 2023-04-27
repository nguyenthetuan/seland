import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

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
      name="ManagePost"
      component={ManagePostScreen}
    />
  </Navigator>
);

export default ManagePostNavigator;
