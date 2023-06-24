import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { SCREENS } from '../../../constants';
import { HistoryScreen } from '../../../screens';

const { Navigator, Screen } = createNativeStackNavigator();

const HistoryNavigator = () => (
  <Navigator
    screenOptions={{
      gestureEnabled: false,
      headerShown: false,
    }}
  >
    <Screen
      name={SCREENS.HISTORY}
      component={HistoryScreen}
    />
  </Navigator>
);

export default HistoryNavigator;
