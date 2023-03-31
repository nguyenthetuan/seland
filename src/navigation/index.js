import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {LoginScreen, SignupScreen} from '../screens';
import HomeNavigator from './HomeNavigator';

const {Group, Navigator, Screen} = createNativeStackNavigator();

const RootNavigator = () => {
  const userToken = 'qwertyuiopasdfghjklzxcvbnm';

  return (
    <Navigator
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
      }}>
      {userToken ? (
        <Group>
          <Screen name="Home" component={HomeNavigator} />
        </Group>
      ) : (
        <Group>
          <Screen name="Login" component={LoginScreen} />
          <Screen name="Signup" component={SignupScreen} />
        </Group>
      )}
    </Navigator>
  );
};

export default RootNavigator;
