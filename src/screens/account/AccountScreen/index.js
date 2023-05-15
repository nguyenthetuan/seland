import { useNavigation } from '@react-navigation/native';
import { Avatar, Button, Icon } from '@rneui/base';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Container, DashedButton, Screen, Text } from '../../../components';
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
  const { data: user } = useSelector(selectUser);
  const { navigate } = useNavigation();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleLogout = () => dispatchThunk(dispatch, logout());

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
      name: 'shownPosts',
      onPress: () => {},
    },
    {
      name: 'privatePosts',
      onPress: () => {},
    },
    {
      name: 'draftPosts',
      onPress: () => {},
    },
    {
      name: 'reviewPending',
      onPress: () => {},
    },
    {
      name: 'rejected',
      onPress: () => {},
    },
    {
      name: 'expired',
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

  const advertisingManagement = [
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
            Trang cá nhân
          </Text>
        </View>
        <View style={styles.boxRankAccount}>
          <View>
            <Text style={styles.label}>Tôi là</Text>
            <DashedButton title="Khách hàng" />
          </View>
          <View>
            <Text style={styles.label}>Hạng tài khoản</Text>
            <DashedButton title="Tài khoản chuyên nghiệp" />
          </View>
        </View>
        <View style={styles.boxItem}>
          <View style={styles.item}>
            <View style={styles.boxLabelItem}>
              <Text>Số dư</Text>
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
              <Text>Khuyến mãi</Text>
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
            <Text style={styles.txtPayment}>Nạp tiền</Text>
          </TouchableOpacity>
        </View>
        <AccountMenu
          label="Lịch sử hoạt động"
          options={activityHistory}
        />
        <AccountMenu
          label="Quản lý tin đăng"
          options={postManagement}
        />
        <AccountMenu
          label="Quản lý kho bất động sản"
          options={realEstateManagement}
        />
        <AccountMenu
          label="Quản lý lịch hẹn"
          options={appointmentManagement}
        />
        <AccountMenu
          label="Quản lý giao dịch"
          options={transactionManagement}
        />
        <AccountMenu
          label="Quản lý quảng cáo"
          options={advertisingManagement}
        />
        <AccountMenu
          label="Quản lý tài khoản"
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
