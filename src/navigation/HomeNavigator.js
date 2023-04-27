import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getProfile } from '../features';
import { HomeScreen } from '../screens';
import AccountScreen from '../screens/AccountScreen';

const { Navigator, Screen } = createBottomTabNavigator();

const HomeNavigator = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <Navigator
      initialRouteName="Account"
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
      }}
    >
      <Screen
        name="Home"
        component={HomeScreen}
      />
      <Screen
        name="Account"
        component={AccountScreen}
      />
    </Navigator>
  );
};

export default HomeNavigator;
