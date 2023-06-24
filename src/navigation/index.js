import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useSelector } from 'react-redux';

import { selectAuth } from '../features';
import { getScreens } from '../utils';
import AuthNavigator from './AuthNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import routes from './routes';

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
        <Screen
          name="AuthNavigator"
          component={AuthNavigator}
        />
      )}
      {getScreens(Screen, routes)}
    </Navigator>
  );
};

export default RootNavigator;
