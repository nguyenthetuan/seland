const {createBottomTabNavigator} = require('@react-navigation/bottom-tabs');
import React from 'react';
import {HomeScreen} from '../screens';
import AccountScreen from '../screens/AccountScreen/index';

const {Navigator, Screen} = createBottomTabNavigator();

const HomeNavigator = () => (
  <Navigator
    screenOptions={{
      gestureEnabled: false,
      headerShown: false,
    }}>
    <Screen name="Home" component={HomeScreen} />
    <Screen name="Account" component={AccountScreen} />
  </Navigator>
);

export default HomeNavigator;
