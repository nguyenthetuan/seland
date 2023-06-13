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
import UpgradeAccountScreen from '../../../screens/account/UpgradeAccountScreen/index';
import IndividualFeatureScreen from '../../../screens/account/UpgradeAccountScreen/components/IndividualFeatureScreen/index';
import NotesScreen from '../../../screens/account/UpgradeAccountScreen/components/NotesScreen/index';
import styles from './styles';

const Tab = createMaterialTopTabNavigator();

const UpgradeAccountTab = () => {
  const { goBack } = useNavigation();
  const { t } = useTranslation();

  const TabBarTitle = ({ state, descriptors, navigation, position }) => (
    <View>
      <ScrollView
        horizontal
        style={styles.tabContainer}
      >
        {state.routes.map((route, index) => {
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

          const inputRange = state.routes.map((_, i) => i);
          const opacity = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i => (i === index ? 1 : 0)),
          });

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[
                isFocused ? styles.bgcTabActive : styles.bgcTabInactive,
                { marginRight: 8 },
              ]}
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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={goBack}>
          <ArrowLeft />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t('upgradeAccount.buyAccount')}</Text>
      </View>

      <Tab.Navigator
        screenOptions={{
          swipeEnabled: false,
        }}
        tabBar={props => <TabBarTitle {...props} />}
      >
        <Tab.Screen
          name={SCREENS.UPGRADE_ACCOUNT_SCREEN}
          component={UpgradeAccountScreen}
          options={{ tabBarLabel: t('upgradeAccount.accountPackages') }}
        />
        <Tab.Screen
          name={SCREENS.INDIVIDUAL_FEATURE_SCREEN}
          component={IndividualFeatureScreen}
          options={{ tabBarLabel: t('upgradeAccount.individualFeatures') }}
        />
        <Tab.Screen
          name={SCREENS.NOTES_SCREEN}
          component={NotesScreen}
          options={{ tabBarLabel: t('upgradeAccount.note') }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default function TopBarNavigator() {
  return <UpgradeAccountTab />;
}
