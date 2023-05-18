import { useNavigation } from '@react-navigation/native';
import { Avatar, Button, Icon } from '@rneui/themed';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { DashedButton, Text } from '../../../components';
import {
  COLOR_GREEN_1,
  COLOR_ORANGE_2,
  COLOR_WHITE,
  SCREENS,
} from '../../../constants';
import { logout, selectUser } from '../../../features';
import { dispatchThunk } from '../../../utils';
import AccountMenu from './components/AccountMenu';
import styles from './styles';

const AccountScreen = () => {
  const dispatch = useDispatch();
  const { data: user } = useSelector(selectUser);
  const { navigate } = useNavigation();
  const { t } = useTranslation();

  const handleLogout = () => dispatchThunk(dispatch, logout());

  const navigateToCreatePost = () => navigate('CreatePostNavigator');

  const navigateToUserPosts = () => navigate('UserPosts');

  const navigateToPersonalInformation = () =>
    navigate(SCREENS.PERSONAL_INFORMATION);

  const navigateToChangePassword = () => navigate(SCREENS.CHANGE_PASSWORD);

  const activityHistory = [
    {
      name: 'viewedPosts',
      onPress: () => {},
    },
    {
      name: 'favoritePosts',
      onPress: () => {},
    },
    {
      name: 'contactedPosts',
      onPress: () => {},
    },
    {
      name: 'message',
      onPress: () => {},
    },
  ];

  const postManagement = [
    {
      name: 'createNewPost',
      onPress: navigateToCreatePost,
    },
    {
      name: 'userPosts',
      onPress: navigateToUserPosts,
    },
    {
      name: 'draftPosts',
      onPress: () => {},
    },
  ];

  const realEstateManagement = [
    {
      name: 'myRealEstates',
      onPress: () => {},
    },
  ];

  const appointmentManagement = [
    {
      name: 'customerAppointments',
      onPress: () => {},
    },
    {
      name: 'yourAppointments',
      onPress: () => {},
    },
  ];

  const transactionManagement = [
    {
      name: 'transactionHistory',
      onPress: () => {},
    },
    {
      name: 'promotionList',
      onPress: () => {},
    },
  ];

  const adsManagement = [
    {
      name: 'createRealEstatePost',
      onPress: () => {},
    },
    {
      name: 'setBrandLogo',
      onPress: () => {},
    },
    {
      name: 'setBanner',
      onPress: () => {},
    },
    {
      name: 'prPosts',
      onPress: () => {},
    },
    {
      name: 'projectAds',
      onPress: () => {},
    },
  ];

  const accountManagement = [
    {
      name: 'personalInformation',
      onPress: navigateToPersonalInformation,
    },
    {
      name: 'agencyInformation',
      onPress: () => {},
    },
    {
      name: 'upgradeAccount',
      onPress: () => {},
    },
    {
      name: 'changePassword',
      onPress: navigateToChangePassword,
    },
    {
      name: 'notification',
      onPress: () => {},
    },
    {
      name: 'privacy',
      onPress: () => {},
    },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.containerScroll}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.boxHeaderLeft}>
            <Avatar
              containerStyle={styles.boxAvatar}
              renderPlaceholderContent={
                <Text style={styles.text}>{user?.name?.charAt(0)}</Text>
              }
              rounded
              size={75}
            >
              <Avatar.Accessory
                name="photo-camera"
                size={23}
              />
            </Avatar>
            <View style={styles.boxInfo}>
              <View style={styles.boxName}>
                <Text style={styles.name}>{user?.name}</Text>
                <Icon
                  name="border-color"
                  size={20}
                />
              </View>
              <Text style={styles.phone}>{user?.phone_number}</Text>
              <Text style={styles.phone}>{user?.email}</Text>
            </View>
          </View>
          <Text
            style={styles.myPage}
            onPress={navigateToPersonalInformation}
          >
            {t('button.personalPage')}
          </Text>
        </View>
        <View style={styles.boxRankAccount}>
          <View>
            <Text style={styles.label}>{t('common.iam')}</Text>
            <DashedButton title={user?.user_type_name} />
          </View>
          <View>
            <Text style={styles.label}>{t('common.accountRank')}</Text>
            <DashedButton title={t('common.professionalAccount')} />
          </View>
        </View>
        <View style={styles.boxItem}>
          <View style={styles.item}>
            <View style={styles.boxLabelItem}>
              <Text>{t('common.balance')} </Text>
              <Icon
                color={COLOR_ORANGE_2}
                name="monetization-on"
                size={20}
              />
            </View>
            <Text style={styles.valueSurplus}>2,450,000 đ</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.item}>
            <View style={styles.boxLabelItem}>
              <Text>{t('common.promotion')} </Text>
              <Icon
                color={COLOR_GREEN_1}
                name="redeem"
                size={20}
              />
            </View>
            <Text style={styles.valuePromotion}>50,000 đ</Text>
          </View>
          <TouchableOpacity style={styles.payment}>
            <Icon
              color={COLOR_WHITE}
              name="account-balance-wallet"
              size={20}
            />
            <Text style={styles.txtPayment}>{t('common.topup')}</Text>
          </TouchableOpacity>
        </View>
        <AccountMenu
          label={t('common.activityHistory')}
          options={activityHistory}
        />
        <AccountMenu
          label={t('common.postManagement')}
          options={postManagement}
        />
        <AccountMenu
          label={t('common.realEstateManagement')}
          options={realEstateManagement}
        />
        <AccountMenu
          label={t('common.appointmentManagement')}
          options={appointmentManagement}
        />
        <AccountMenu
          label={t('common.transactionManagement')}
          options={transactionManagement}
        />
        <AccountMenu
          label={t('common.adsManagement')}
          options={adsManagement}
        />
        <AccountMenu
          label={t('common.accountManagement')}
          options={accountManagement}
        />
        <Button
          style={styles.buttonLogout}
          onPress={handleLogout}
          title={t('button.logout')}
          type="outline"
          radius={5}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountScreen;
