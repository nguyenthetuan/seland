import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, Header, Text } from '../../../../components';
import { COLORS, SCREENS } from '../../../../constants';
import { ScreenStackParamList } from '../../../../navigation/ScreenStackParam';
import PackInfoRow from '../component/PackInfoRow';
import { IconCircleSuccess } from '../icon';

type Props = NativeStackScreenProps<ScreenStackParamList, 'BuyPackageResult'>;

const BuyPackageResult = (props: Props) => {
  const { route } = props;
  const insets = useSafeAreaInsets();
  const { navigate } = useNavigation();

  const close = () => {
    navigate(SCREENS.ACCOUNT);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.content}>
          <IconCircleSuccess />
          <Text style={styles.title}>Nâng cấp tài khoản thành công</Text>
          <Text style={styles.text}>Cảm ơn quý khách đã sử dụng dịch vụ</Text>
        </View>

        <View style={styles.card}>
          <PackInfoRow
            leftText="Mã giao dịch"
            rightText={`${route.params.paymentCode}`}
          />
          <PackInfoRow
            leftText="Số dư"
            rightText={route.params.balance}
            rowStyle={styles.marginT12}
          />
          <PackInfoRow
            leftText="Khuyễn mãi"
            rightText={route.params.balancePromotion}
            rowStyle={styles.marginT12}
          />
        </View>
      </ScrollView>
      <View style={[styles.bottom, { marginBottom: insets.bottom }]}>
        <Button
          onPress={close}
          title="Đóng"
        />
      </View>
    </SafeAreaView>
  );
};

export default BuyPackageResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 56,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    marginTop: 24,
    color: COLORS.TITLE,
  },
  text: { fontSize: 14, marginTop: 8, color: COLORS.TITLE },
  card: {
    borderRadius: 8,
    backgroundColor: COLORS.NEUTRAL2,
    marginHorizontal: 16.5,
    paddingHorizontal: 24,
    paddingTop: 6,
    paddingBottom: 24,
    marginTop: 24,
  },
  marginT12: { marginTop: 12 },
  bottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 10,
  },
});
