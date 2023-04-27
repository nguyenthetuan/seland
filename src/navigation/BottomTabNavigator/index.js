import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/themed';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { Text } from '../../components';
import { COLOR_BLUE_1, COLOR_GRAY_1, COLOR_WHITE } from '../../constants';
import {
  CreatePostScreen,
  HistoryScreen,
  HomeScreen,
  ManagePostScreen,
} from '../../screens';
import AccountNavigator from './AccountNavigator';
import styles from './styles';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const { t } = useTranslation();

  const getCreatePostTabBarIcon = useCallback(
    () => (
      <View style={styles.createPost}>
        <Icon
          color={COLOR_WHITE}
          name="note-add"
        />
      </View>
    ),
    []
  );

  const getTabBarIcon = useCallback(
    name =>
      function tabBarIcon({ focused }) {
        return (
          <Icon
            color={focused ? COLOR_BLUE_1 : COLOR_GRAY_1}
            name={name}
          />
        );
      },
    []
  );

  const getTabBarLabel = useCallback(
    label =>
      function tabBarLabel({ focused }) {
        return (
          <Text style={styles.label(focused)}>{t(`tabBar.${label}`)}</Text>
        );
      },
    [t]
  );

  return (
    <Navigator
      initialRouteName="AccountNavigator"
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
      }}
    >
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: getTabBarIcon('home'),
          tabBarLabel: getTabBarLabel('home'),
        }}
      />
      <Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: getTabBarIcon('history'),
          tabBarLabel: getTabBarLabel('history'),
        }}
      />
      <Screen
        name="CreatePost"
        component={CreatePostScreen}
        options={{
          tabBarIcon: getCreatePostTabBarIcon,
          tabBarLabel: getTabBarLabel('createPost'),
        }}
      />
      <Screen
        name="ManagePost"
        component={ManagePostScreen}
        options={{
          tabBarIcon: getTabBarIcon('fact-check'),
          tabBarLabel: getTabBarLabel('managePost'),
        }}
      />
      <Screen
        name="AccountNavigator"
        component={AccountNavigator}
        options={{
          tabBarIcon: getTabBarIcon('person-outline'),
          tabBarLabel: getTabBarLabel('account'),
        }}
      />
    </Navigator>
  );
};

export default BottomTabNavigator;
