import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { SCREENS } from '../../../constants';
import { AccountScreen } from '../../../screens';

import { CreatePostScreen } from '../../../screens/createPost'
const { Navigator, Screen } = createNativeStackNavigator();

const AccountNavigator = () => (
  <Navigator
    screenOptions={{
      gestureEnabled: false,
      headerShown: false,
    }}
  >
    <Screen
      name={SCREENS.ACCOUNT}
      component={AccountScreen}
    />
    {/* <Screen
      name={SCREENS.CREATE_POST}
      component={CreatePostScreen}
    /> */}
  </Navigator>
);

export default AccountNavigator;
