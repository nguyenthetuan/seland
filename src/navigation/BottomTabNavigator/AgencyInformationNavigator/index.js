/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Animated,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';

import { ArrowLeft } from '../../../assets';
import { Text } from '../../../components';
import { SCREENS } from '../../../constants';
import GeneralInformationScreen from '../../../screens/account/AgencyInformationScreen/components/GeneralInformationScreen';
import ListStaffScreen from '../../../screens/account/AgencyInformationScreen/components/ListStaffScreen';
import styles from './styles';

const Tab = createMaterialTopTabNavigator();

const TabBarTitle = ({ state, descriptors, navigation }) => (
  <View>
    <ScrollView
      horizontal
      style={styles.tabContainer}
    >
      {(state?.routes || []).map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={isFocused ? styles.bgcTabActive : styles.bgcTabInactive}
          >
            <Animated.Text
              numberOfLines={1}
              style={
                isFocused
                  ? styles.tabHeaderActiveTitle
                  : styles.tabHeaderInactiveTitle
              }
            >
              {label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  </View>
);

const AgencyInformationTab = () => {
  const { goBack } = useNavigation();
  const { t } = useTranslation();

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={goBack}>
          <ArrowLeft />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t('button.personalPage')}</Text>
      </View>

      <Tab.Navigator tabBar={props => <TabBarTitle {...props} />}>
        <Tab.Screen
          name={SCREENS.GENERAL_INFORMATION_SCREEN}
          component={GeneralInformationScreen}
          options={{ tabBarLabel: t('button.generalInformation') }}
        />
        <Tab.Screen
          name={SCREENS.LIST_STAFF_SCREEN}
          component={ListStaffScreen}
          options={{ tabBarLabel: t('button.listStaff') }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const TopBarNavigator = () => <AgencyInformationTab />

export default TopBarNavigator;
