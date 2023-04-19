import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useSelector } from 'react-redux';

import { selectAuth } from '../features';
import {
  ForgotPasswordScreen1,
  LoginScreen,
  OtpScreen,
  SignupScreen,
} from '../screens';
import HomeNavigator from './HomeNavigator';

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
            name="HomeNavigator"
            component={HomeNavigator}
          />
        </Group>
      ) : (
        <Group>
          <Screen
            name="Signup"
            component={SignupScreen}
          />
          <Screen
            name="Otp"
            component={OtpScreen}
          />
          <Screen
            name="Login"
            component={LoginScreen}
          />
          <Screen
            name="ForgotPassword1"
            component={ForgotPasswordScreen1}
          />
        </Group>
      )}
    </Navigator>
  );
};

export default RootNavigator;
