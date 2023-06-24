import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { SCREENS } from '../../../constants';
import { CreatePostScreen } from '../../../screens';

const { Navigator, Screen } = createNativeStackNavigator();

const CreatePostNavigator = () => (
  <Navigator
    screenOptions={{
      gestureEnabled: false,
      headerShown: false,
    }}
  >
    <Screen
      name={SCREENS.CREATE_POST}
      component={CreatePostScreen}
    />
  </Navigator>
);

export default CreatePostNavigator;
