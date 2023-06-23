import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/themed';
import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Text } from '../../components';
import { COLORS, SCREENS } from '../../constants';
import { getAllInformation, getProfile, selectUser } from '../../features';
import { dispatchThunk, getScreens } from '../../utils';
import routes from './routes';
import Toast from 'react-native-toast-message';
import styles from './styles';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { data: user } = useSelector(selectUser);

  useEffect(() => {
    dispatchThunk(dispatch, getProfile());
    dispatchThunk(dispatch, getAllInformation());
  }, [dispatch]);

  const getCreatePostTabBarIcon = useCallback(
    () => (
      <View style={styles.createPost}>
        <Icon
          color={COLORS.WHITE}
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
            color={focused ? COLORS.BLUE_1 : COLORS.GRAY_2}
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

  const tabBar = ({ descriptors, state, navigation }) => {
    const focusedOptions = descriptors[state.routes[state.index].key].options;
    if (focusedOptions?.tabBarStyle?.display === 'none') {
      return null;
    }

    if (user?.phone_number && !user?.name) {
      if (!user?.name && user?.is_phone_verified === 0) {
        Toast.show({
          text1: t(`common.toastVerifyNoName`),
        });
      } else if (user?.is_phone_verified === 0) {
        Toast.show({
          text1: t(`common.toastVerify`),
        });
      } else if (!user?.name) {
        Toast.show({
          text1: t(`common.toastNoName`),
        });
      }
      navigation.navigate(SCREENS.PERSONAL_INFORMATION, {hasGoBack: false});
    }

    return (
      <View style={styles.boxButton}>
        {state?.routes.map((route, index) => {
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              if (route.name === 'CreatePostNavigator') {
                if (user?.name && user?.is_phone_verified === 1) {
                  navigation.navigate(route.name);
                } else {
                  navigation.navigate(SCREENS.PERSONAL_INFORMATION);
                }
                return;
              }
              navigation.navigate(route.name);
            }
          };
          return (
            <TouchableOpacity
              key={route.name}
              onPress={onPress}
            >
              {options[index].tabBarIcon({ focused: isFocused })}
              {options[index].tabBarLabel({ focused: isFocused })}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <Navigator
      tabBar={tabBar}
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
      }}
    >
      {getScreens(Screen, routes)}
    </Navigator>
  );
};

export default BottomTabNavigator;
