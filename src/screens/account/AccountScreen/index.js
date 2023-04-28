import { useNavigation } from '@react-navigation/native';
import { Avatar, Icon } from '@rneui/base';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';

import { Container, DashedButton, Screen, Text } from '../../../components';
import {
  COLOR_GREEN_1,
  COLOR_ORANGE_2,
  COLOR_WHITE,
  SCREENS,
} from '../../../constants';
import { selectUser } from '../../../features';
import AccountMenu from './components/AccountMenu';
import styles from './styles';

const AccountScreen = () => {
  const { navigate } = useNavigation();
  const { user } = useSelector(selectUser);

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

  const managerPost = [
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
      name: 'listPromotion',
      onPress: () => {},
    },
  ];

  const advertisingManagement = [
    {
      name: 'postsRealEstate',
      onPress: () => {},
    },
    {
      name: 'setLogoTrademark',
      onPress: () => {},
    },
    {
      name: 'setBanner',
      onPress: () => {},
    },
    {
      name: 'postsPr',
      onPress: () => {},
    },
    {
      name: 'advertisementProject',
      onPress: () => {},
    },
  ];

  const accountManager = [
    {
      name: 'informationAccount',
      onPress: navigateToPersonalInformation,
    },
    {
      name: 'informationAgency',
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
    <Screen>
      <Container>
        <View style={styles.header}>
          <View style={styles.boxHeaderLeft}>
            <Avatar
              rounded
              icon={<Icon name="photo-camera" />}
              size={75}
              containerStyle={styles.boxAvatar}
              renderPlaceholderContent={<Text style={styles.text}>U</Text>}
            >
              <Avatar.Accessory size={23} />
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
                name="monetization-on"
                size={20}
                color={COLOR_ORANGE_2}
              />
            </View>
            <Text style={styles.valueSurplus}>2,450,000 đ</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.item}>
            <View style={styles.boxLabelItem}>
              <Text>Khuyến mãi</Text>
              <Icon
                name="redeem"
                size={20}
                color={COLOR_GREEN_1}
              />
            </View>
            <Text style={styles.valuePromotion}>50,000 đ</Text>
          </View>
          <TouchableOpacity style={styles.payment}>
            <Icon
              name="account-balance-wallet"
              size={20}
              color={COLOR_WHITE}
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
          options={managerPost}
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
          options={accountManager}
        />
      </Container>
    </Screen>
  );
};
export default AccountScreen;
