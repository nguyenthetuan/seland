import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { SCREENS } from '../../../constants';
import { UserPostsScreen } from '../../../screens';

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
      component={UserPostsScreen}
    />
  </Navigator>
);

export default ManagePostNavigator;
