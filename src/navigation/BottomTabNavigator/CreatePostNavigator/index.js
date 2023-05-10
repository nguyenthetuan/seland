import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { getScreens } from '../../../utils';
import routes from './routes';

const { Navigator, Screen } = createNativeStackNavigator();

const CreatePostNavigator = () => (
  <Navigator
    screenOptions={{
      gestureEnabled: false,
      headerShown: false,
    }}
  >
    {getScreens(Screen, routes)}
  </Navigator>
);

export default CreatePostNavigator;
