import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/themed';
import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

import { Text } from '../../components';
import { COLOR_BLUE_1, COLOR_GRAY_2, COLOR_WHITE } from '../../constants';
import { getAllInformation, getProfile } from '../../features';
import { dispatchThunk, getScreens } from '../../utils';
import routes from './routes';
import styles from './styles';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatchThunk(dispatch, getProfile());
    dispatchThunk(dispatch, getAllInformation());
  }, [dispatch]);

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
            color={focused ? COLOR_BLUE_1 : COLOR_GRAY_2}
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

  const options = [
    {
      tabBarIcon: getTabBarIcon('home'),
      tabBarLabel: getTabBarLabel('home'),
    },
    {
      tabBarIcon: getTabBarIcon('history'),
      tabBarLabel: getTabBarLabel('history'),
    },
    {
      tabBarIcon: getCreatePostTabBarIcon,
      tabBarLabel: getTabBarLabel('createPost'),
    },
    {
      tabBarIcon: getTabBarIcon('fact-check'),
      tabBarLabel: getTabBarLabel('managePost'),
    },
    {
      tabBarIcon: getTabBarIcon('person-outline'),
      tabBarLabel: getTabBarLabel('account'),
    },
  ];

  return (
    <Navigator
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
      }}
    >
      {getScreens(Screen, routes, options)}
    </Navigator>
  );
};

export default BottomTabNavigator;
