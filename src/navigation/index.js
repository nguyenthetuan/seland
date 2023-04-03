import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from '../features';
import { LoginScreen, SignupScreen } from '../screens';
import HomeNavigator from './HomeNavigator';

const { Group, Navigator, Screen } = createNativeStackNavigator();

const RootNavigator = () => {
  const token = useSelector(selectToken);

  return (
    <Navigator
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
      }}
    >
      {token ? (
        <Group>
          <Screen
            name="HomeNavigator"
            component={HomeNavigator}
          />
        </Group>
      ) : (
        <Group>
          <Screen
            name="Login"
            component={LoginScreen}
          />
          <Screen
            name="Signup"
            component={SignupScreen}
          />
        </Group>
      )}
    </Navigator>
  );
};

export default RootNavigator;
