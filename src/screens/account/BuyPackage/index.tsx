import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useRef, useState } from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Header, Text } from '../../../components';
import BottomSheet from '../../../components/common/BottomSheet';
import { COLORS } from '../../../constants';
import { buyPackage, selectPayment } from '../../../features';
import { ScreenStackParamList } from '../../../navigation/ScreenStackParam';
import { dispatchThunk } from '../../../utils';
import { formatPrice } from '../../../utils/format';
import MonthPicker from './component/MonthPicker';
import PackInfoRow from './component/PackInfoRow';
import PromotionPicker from './component/PromotionPicker';
import { BuyPackageParam } from './model';
import moment from 'moment';

const BuyPackage = () => {
  const { packageId, price, name } = useRoute().params as BuyPackageParam;
  const insets = useSafeAreaInsets();
  const monthPickerRef = useRef<BottomSheet>(null);
  const [month, setMonth] = useState(0);
  const dispatch = useDispatch();
  const { navigate, goBack } =
    useNavigation<NativeStackNavigationProp<ScreenStackParamList>>();
  const { loading } = useSelector(selectPayment);

  const promotionPickerRef = useRef<BottomSheet>(null);

  const generateTotalAmount = (): string => {
    return formatPrice((parseInt(price) * month).toString());
  };

  const openMonthPicker = () => {
    monthPickerRef.current?.open();
  };

  const handleSelectMonth = (months: number) => {
    setMonth(months);
    monthPickerRef.current?.close();
  };

  const openPromotionPicker = () => {
    promotionPickerRef.current?.open();
  };

  const handlePromotionSelect = () => {
    promotionPickerRef.current?.close();
  };

  const buy = () => {
    const param = { time: month, account_package_id: packageId };
    dispatchThunk(dispatch, buyPackage(param), (res: any) => {
      navigate('BuyPackageResult', {
        paymentCode: res.paymentCode,
        balance: res.balance,
        balancePromotion: res.balancePromotion,
      });
    });
  };

  const generateDuration = (): string => {
    const from = moment().format('DD/MM/YYYY');
    const to = moment().add(month, 'M').format('DD/MM/YYYY');
    return `(Từ ${from} đến ${to})`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Thông tin thanh toán" />
      <KeyboardAwareScrollView>
        <View style={styles.priceCtn}>
          <Text style={styles.total}>Tổng tiền</Text>
          <Text style={styles.price}>{generateTotalAmount()} VNĐ</Text>
        </View>
        <View style={styles.infoCtn}>
          <Text style={styles.infoTitle}>Thông tin giao dịch</Text>
          <PackInfoRow
            leftText="Tài khoản"
            rightText={name}
          />
          <PackInfoRow
            leftText="Thời gian"
            rightText={month > 0 ? month + ' Tháng' : 'Chọn số tháng'}
            onPressEdit={openMonthPicker}
          />
          {month > 0 && (
            <Text style={styles.duration}>{generateDuration()}</Text>
          )}
          <PackInfoRow
            leftText="Đơn giá/ tháng"
            rightText={formatPrice(price) + ' đ'}
          />
          <PackInfoRow
            leftText="Khuyến mãi"
            rightText="Áp dụng"
            onPressEdit={openPromotionPicker}
          />
          <PackInfoRow
            leftText="Tổng tiền"
            rightText={
              month > 0
                ? generateTotalAmount() + ' đ'
                : 'Vui lòng chọn thời gian'
            }
          />
        </View>
        <Text style={styles.infoCtn}>Nội dung</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Thanh toán hoá đơn trên seland.vn"
          placeholderTextColor={COLORS.BLACK_2}
          multiline={true}
        />
      </KeyboardAwareScrollView>
      <View style={[styles.bottom, { marginBottom: insets.bottom }]}>
        <Button
          onPress={goBack}
          buttonStyle={styles.btnCancel}
          titleStyle={styles.btnCancelTitle}
          title="Huỷ"
        />
        <Button
          onPress={buy}
          buttonStyle={styles.btnPay}
          title="Thanh toán"
          disable={month < 1}
          loading={loading}
        />
      </View>
      <BottomSheet
        height={230}
        ref={monthPickerRef}
      >
        <MonthPicker
          defaultMonth={month}
          onMonthSelect={handleSelectMonth}
        />
      </BottomSheet>
      <BottomSheet
        height={200}
        ref={promotionPickerRef}
      >
        <PromotionPicker onPromotionSelect={handlePromotionSelect} />
      </BottomSheet>
    </SafeAreaView>
  );
};

export default BuyPackage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.WHITE },
  total: { fontSize: 16, color: COLORS.NORMAL },
  price: { fontSize: 30, fontWeight: 'bold', lineHeight: 40 },
  priceCtn: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 32,
    borderBottomColor: COLORS.NEUTRAL4,
    borderBottomWidth: 1,
  },
  infoCtn: {
    paddingTop: 32,
    paddingBottom: 24,
    borderBottomColor: COLORS.NEUTRAL4,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingHorizontal: 10,
  },
  infoTitle: {
    fontSize: 16,
    color: COLORS.TITLE,
    fontWeight: '500',
  },
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  left: {
    fontSize: 14,
    color: COLORS.NORMAL,
  },
  right: {
    fontSize: 14,
    color: COLORS.TITLE,
    fontWeight: '500',
  },
  inputStyle: {
    marginHorizontal: 10,
    borderColor: COLORS.GRAY_2,
    borderWidth: 1,
    borderRadius: 2,
    height: 91,
    paddingLeft: 12,
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
  },
  btnCancel: {
    width: Dimensions.get('screen').width / 2 - 15,
    marginHorizontal: 10,
    borderColor: COLORS.GRAY_4,
    backgroundColor: COLORS.LOCAL_LIGHT,
  },
  btnCancelTitle: { color: COLORS.GRAY_7 },
  btnPay: { width: Dimensions.get('screen').width / 2 - 15 },
  duration: { fontSize: 14, color: COLORS.RED_1 },
});
