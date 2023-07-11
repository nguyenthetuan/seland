import React, { useMemo, useRef } from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { Button, Header, Text } from '../../../components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { COLORS } from '../../../constants';
import { formatMoney } from '../../../utils/format';
import PackInfoRow from './PackInfoRow';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BottomSheet from '@gorhom/bottom-sheet';

const BuyPackage = () => {
  const { packageId, price, name } = useRoute().params;
  const insets = useSafeAreaInsets();
  const bottomRef = useRef<BottomSheet>(null);

  const formatPrice = (price: string): string => {
    return formatMoney(price.split('.')[0]) + '';
  };

  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Thông tin thanh toán" />
      <KeyboardAwareScrollView>
        <View style={styles.priceCtn}>
          <Text style={styles.total}>Tổng tiền</Text>
          <Text style={styles.price}>{formatPrice(price)} VNĐ</Text>
        </View>
        <View style={styles.infoCtn}>
          <Text style={styles.infoTitle}>Thông tin giao dịch</Text>
          <PackInfoRow
            leftText="Tài khoản"
            rightText={name}
          />
          <PackInfoRow
            leftText="Thời gian"
            rightText="Chọn số tháng"
            onPressEdit={() => {}}
          />
          <PackInfoRow
            leftText="Đơn giá/ tháng"
            rightText={formatPrice(price) + ' đ'}
          />
          <PackInfoRow
            leftText="Khuyến mãi"
            rightText="Áp dụng"
            onPressEdit={() => {}}
          />
          <PackInfoRow
            leftText="Tổng tiền"
            rightText="TODO"
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
          buttonStyle={styles.btnCancel}
          titleStyle={styles.btnCancelTitle}
          title="Huỷ"
        />
        <Button
          buttonStyle={styles.btnPay}
          title="Thanh toán"
        />
      </View>
      <BottomSheet
        ref={bottomRef}
        handleIndicatorStyle={null}
        index={1}
        snapPoints={snapPoints}
      >
        <Text>ABC</Text>
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
});
