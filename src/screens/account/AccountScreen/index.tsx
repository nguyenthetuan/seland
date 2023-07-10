import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Avatar, Icon } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Button, DashedButton, Text } from '../../../components';
import { COLORS, SCREENS } from '../../../constants';
import { logout, selectUser } from '../../../features';
import { dispatchThunk } from '../../../utils';
import { formatPrice } from '../../../utils/format';
import { AccountMenu } from '../components';
import styles from './styles';

const AccountScreen = () => {
  const dispatch = useDispatch();
  const { data: user } = useSelector(selectUser);
  const { navigate }: NavigationProp<any, any> = useNavigation();
  const { t } = useTranslation();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleLogout = () => dispatchThunk(dispatch, logout());

  const navigateToCreatePost = () => navigate('CreatePostNavigator');

  const navigateToUserPosts = () => navigate(SCREENS.USER_POSTS);
  const navigateToDraftUserPosts = () => navigate(SCREENS.DRAFT_POSTS);
  const navigateToAgencyInformation = () =>
    navigate(SCREENS.AGENCY_INFORMATION_TAB);
  const navigateToUpgradeAccount = () => navigate(SCREENS.UPGRADE_ACCOUNT_TAB);

  const navigateToPersonalInformation = () =>
    navigate(SCREENS.PERSONAL_INFORMATION);

  const navigateToWarehouseLand = () => navigate(SCREENS.WAREHOUSELAND);

  const navigateToChangePassword = () => navigate(SCREENS.CHANGE_PASSWORD);

  const navigateToRequestContact = () =>
    navigate(SCREENS.REQUEST_CONTACT_SCREEN);

  const navigateToDepositScreen = () => navigate(SCREENS.DEPOSIT_SCREEN);

  const navigateToCollaboratorInformation = () =>
    navigate(SCREENS.COLLABORATOR_SCREEN);

  const navigateToPersonalPage = () => navigate(SCREENS.PERSONAL_PAGE_SCREEN);
  const navigationToListAppointment = () => {
    navigate(SCREENS.USERAPPOINMENTSCREEN);
  };

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
      onPress: navigateToDraftUserPosts,
    },
  ];

  const realEstateManagement = [
    {
      name: 'myRealEstates',
      onPress: navigateToWarehouseLand,
    },
  ];

  const appointmentManagement = [
    {
      name: 'customerAppointments',
      onPress: () => {},
    },
    {
      name: 'yourAppointments',
      onPress: navigationToListAppointment,
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
      onPress: navigateToAgencyInformation,
    },
    {
      name: 'collaboratorInformation',
      onPress: navigateToCollaboratorInformation,
    },
    {
      name: 'upgradeAccount',
      onPress: navigateToUpgradeAccount,
    },
    {
      name: 'changePassword',
      onPress: navigateToChangePassword,
    },
    {
      name: 'requestContact',
      onPress: navigateToRequestContact,
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

  useEffect(() => {
    if (user?.is_phone_verified === 0 && !isOpenModal) {
      setIsOpenModal(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

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
            onPress={navigateToPersonalPage}
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
                color={COLORS.ORANGE_2}
                name="monetization-on"
                size={20}
              />
            </View>
            <Text style={styles.valueSurplus}>{`${formatPrice(
              user?.balance
            )} đ`}</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.item}>
            <View style={styles.boxLabelItem}>
              <Text>{t('common.promotion')} </Text>
              <Icon
                color={COLORS.GREEN_1}
                name="redeem"
                size={20}
              />
            </View>
            <Text style={styles.valuePromotion}>{`${formatPrice(
              user?.balance_promotion
            )} đ`}</Text>
          </View>
          <TouchableOpacity
            style={styles.payment}
            onPress={navigateToDepositScreen}
          >
            <Icon
              color={COLORS.WHITE}
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
          outline
          radius={5}
        />
      </ScrollView>

      {/* <OtpModal
        isOpen={isOpenModal}
        phoneNumber={user?.phone_number}
        onCloseModal={onCloseModal}
      /> */}
    </SafeAreaView>
  );
};

export default AccountScreen;
