import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/base';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import {
  Avatar,
  Container,
  DashedButton,
  Screen,
  Text,
} from '../../../components';
import { COLOR_GREEN_1, COLOR_ORANGE_2, COLOR_WHITE } from '../../../constants';
import AccountMenu from './components/AccountMenu';
import styles from './styles';

const AccountScreen = () => {
  const { navigate } = useNavigation();

  const activityHistory = [
    {
      name: 'Tin đã xem',
      onPress: () => {},
    },
    {
      name: 'Tin yêu thích',
      onPress: () => {},
    },
    {
      name: 'Tin đã liên hệ',
      onPress: () => {},
    },
    {
      name: 'Tin nhắn',
      onPress: () => {},
    },
  ];

  const managerPost = [
    {
      name: 'Tin đang hiển thị',
      onPress: () => {},
    },
    {
      name: 'Tin riêng tư',
      onPress: () => {},
    },
    {
      name: 'Tin nháp',
      onPress: () => {},
    },
    {
      name: 'Chờ duyệt',
      onPress: () => {},
    },
    {
      name: 'Không duyệt',
      onPress: () => {},
    },
    {
      name: 'Hết hạn',
      onPress: () => {},
    },
  ];

  const realEstateManagement = [
    {
      name: 'Kho bất động sản của tôi',
      onPress: () => {},
    },
  ];

  const appointmentManagement = [
    {
      name: 'Lịch hẹn của khách hàng',
      onPress: () => {},
    },
    {
      name: 'Lịch hẹn của bạn',
      onPress: () => {},
    },
  ];
  const transactionManagement = [
    {
      name: 'Lịch sử giao dịch',
      onPress: () => {},
    },
    {
      name: 'Danh sách khuyến mãi',
      onPress: () => {},
    },
  ];

  const advertisingManagement = [
    {
      name: 'Đăng tin nhà đấtn',
      onPress: () => {},
    },
    {
      name: 'Đặt logo thương hiệu',
      onPress: () => {},
    },
    {
      name: 'Đặt banner',
      onPress: () => {},
    },
    {
      name: 'Bài viết PR',
      onPress: () => {},
    },
    {
      name: 'Quảng cáo dự án',
      onPress: () => {},
    },
  ];
  const accountManager = [
    {
      name: 'Thông tin cá nhân',
      onPress: () => {},
    },
    {
      name: 'Thông tin đại lý',
      onPress: () => {},
    },
    {
      name: 'Nâng cấp tài khoản',
      onPress: () => {},
    },
    {
      name: 'Đổi mật khẩu',
      onPress: () => navigate('ChangePassword'),
    },
    {
      name: 'Thông báo',
      onPress: () => {},
    },
    {
      name: 'Quyền riêng tư',
      onPress: () => {},
    },
  ];
  return (
    <Screen>
      <Container>
        <View style={styles.header}>
          <View style={styles.boxHeaderLeft}>
            <Avatar uri={null} />
            <View style={styles.boxInfo}>
              <View style={styles.boxName}>
                <Text style={styles.name}>Mr.Abc</Text>
                <Icon
                  name="border-color"
                  size={20}
                />
              </View>
              <Text style={styles.phone}>0388227325</Text>
              <Text style={styles.phone}>tuan@gmail.com</Text>
            </View>
          </View>
          <Text style={styles.myPage}>Trang cá nhân</Text>
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
            <Text style={styles.valuePromotion}>2,450,000 đ</Text>
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
