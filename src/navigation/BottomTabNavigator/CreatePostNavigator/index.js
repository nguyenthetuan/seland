import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

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
      name="CreatePost"
      component={CreatePostScreen}
    />
  </Navigator>
);

export default CreatePostNavigator;
