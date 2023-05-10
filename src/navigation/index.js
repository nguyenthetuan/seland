import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useSelector } from 'react-redux';

import { selectAuth } from '../features';
import AuthNavigator from './AuthNavigator';
import BottomTabNavigator from './BottomTabNavigator';

const { Group, Navigator, Screen } = createNativeStackNavigator();

const RootNavigator = () => {
  const { token, error } = useSelector(selectAuth);

  return (
    <Navigator
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
      }}
    >
      {token && !error ? (
        <Group>
          <Screen
            name="BottomTabNavigator"
            component={BottomTabNavigator}
          />
        </Group>
      ) : (
        <Group>
          <Screen
            name="AuthNavigator"
            component={AuthNavigator}
          />
        </Group>
      )}
    </Navigator>
  );
};

export default RootNavigator;
