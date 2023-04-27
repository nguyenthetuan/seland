import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { HomeScreen } from '../../../screens';

const { Navigator, Screen } = createNativeStackNavigator();

const HomeNavigator = () => (
  <Navigator
    screenOptions={{
      gestureEnabled: false,
      headerShown: false,
    }}
  >
    <Screen
      name="Home"
      component={HomeScreen}
    />
  </Navigator>
);

export default HomeNavigator;
