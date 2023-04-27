import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import {
  ForgotPasswordScreen1,
  ForgotPasswordScreen2,
  ForgotPasswordScreen3,
  LoginScreen,
  OtpScreen,
  SignupScreen,
} from '../../screens';

const { Navigator, Screen } = createNativeStackNavigator();

const AuthNavigator = () => (
  <Navigator
    screenOptions={{
      gestureEnabled: false,
      headerShown: false,
    }}
  >
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
    <Screen
      name="ForgotPassword2"
      component={ForgotPasswordScreen2}
    />
    <Screen
      name="ForgotPassword3"
      component={ForgotPasswordScreen3}
    />
  </Navigator>
);

export default AuthNavigator;
