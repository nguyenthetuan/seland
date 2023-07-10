import React, { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Text } from '../../../../components';
import { Input } from '@rneui/themed';
import { COLORS } from '../../../../constants';
import { TPrefixAmount, prefixAmount } from './model';
import PaymentMethod from '../PaymentMethod';
import { IconBank } from '../PaymentMethod/icon';
import { VNPay } from '../../../../assets';
import { useNavigation } from '@react-navigation/native';
import { formatMoney } from '../../../../utils/format';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

interface Props {
  onNext: (isBank?: boolean) => void;
  setAmountProps: (amount: number) => void;
}
const PaymentOption = (props: Props) => {
  const { onNext, setAmountProps } = props;
  const { navigate } = useNavigation();
  const [amount, setAmount] = useState<number>(prefixAmount[0].value);
  const [amountFormatted, setAmountFormatted] = useState<string>('');
  const [selectedAmount, setSelectedAmount] = useState<number>(1);
  const onChangeAmount = (text: string) => {
    const re = new RegExp(',', 'g');
    setAmount(text.length > 0 ? parseInt(text.replace(re, '')) : 0);
  };
  const onSelectedAmount = (item: TPrefixAmount) => {
    setSelectedAmount(item.id);
    setAmount(item.value);
  };
  useEffect(() => {
    setAmountFormatted(formatMoney(amount) ?? '');
  }, [amount]);
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.note}>
          Để nạp tiền, bạn hãy nhập số tiền và chọn bất kỳ 2 phương thức thanh
          toán bên dưới:
        </Text>
        <Text style={styles.title}>Nhập số tiền cần nạp</Text>
        <Input
          inputContainerStyle={{ borderBottomWidth: 0 }}
          style={styles.wrapInputContainer}
          onChangeText={text => onChangeAmount(text)}
          value={amountFormatted}
          renderErrorMessage={false}
          cursorColor={COLORS.BLACK_1}
          inputMode="numeric"
        />

        <View style={styles.wrapAmountContainer}>
          {prefixAmount.map((item: TPrefixAmount, index: number) => {
            return (
              <TouchableOpacity
                style={[
                  { flex: 1 },
                  selectedAmount === item.id
                    ? styles.selectedAmountContainer
                    : styles.amountContainer,
                  index !== 0 && styles.marginL16,
                ]}
                onPress={() => onSelectedAmount(item)}
              >
                <Text
                  style={
                    selectedAmount === item.id
                      ? styles.selectedTitle
                      : styles.title
                  }
                >
                  {formatMoney(item?.value)}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <PaymentMethod
          icon={<IconBank />}
          title="Chuyển khoản ngân hàng"
          onPress={() => {
            if (amount <= 0) {
              Toast.show({
                text1: 'Số tiền phải lớn hơn 0 VND',
                type: 'error',
              });
              return;
            }
            onNext(true);
            setAmountProps(amount);
          }}
        />
        <PaymentMethod
          icon={
            <Image
              source={VNPay}
              style={styles.img}
            />
          }
          title="VN Pay"
          onPress={() => {
            onNext(false);
            setAmountProps(amount);
          }}
          style={styles.marginT12}
        />
      </View>
    </ScrollView>
  );
};

export default PaymentOption;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    flex: 1,
  },
  wrapHeader: {
    flexDirection: 'row',
    alignContent: 'center',
    marginBottom: 24,
  },
  wrapHeaderIcon: {
    alignSelf: 'center',
    marginRight: 8,
  },
  wrapInputContainer: {
    borderRadius: 1,
    borderWidth: 1,
    borderColor: COLORS.GRAY_2,
    marginLeft: -8,
    marginRight: -8,
    padding: 8,
    marginTop: 20,
    marginBottom: 10,
    fontSize: 24,
    lineHeight: 32,
    color: '#000',
  },
  wrapAmountContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  amountContainer: {
    height: 40,
    backgroundColor: COLORS.WHITE,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.GRAY_2,
    borderWidth: 1,
    marginBottom: 16,
  },
  selectedAmountContainer: {
    height: 40,
    backgroundColor: COLORS.GREEN_1,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  selectedTitle: {
    fontWeight: '500',
    fontSize: 16,
    color: COLORS.WHITE,
  },
  wrapBottomContainer: {
    position: 'absolute',
    bottom: 32,
    width: '100%',
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: COLORS.WHITE,
    paddingTop: 8,
  },
  wrapConfirmPayContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  confirmPayContainer: {
    backgroundColor: COLORS.BLUE_1,
    height: 40,
    width: '100%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  cancelPayContainer: {
    backgroundColor: COLORS.WHITE,
    height: 40,
    width: '100%',
    borderRadius: 5,
    borderColor: COLORS.BLUE_1,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelText: {
    fontWeight: '500',
    fontSize: 16,
    color: COLORS.BLUE_1,
  },
  wrapBankContainer: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.GRAY_2,
    padding: 8,
    marginBottom: 10,
  },
  selectedPaymentContainer: {
    backgroundColor: COLORS.GRAY_6,
    width: '100%',
    padding: 16,
    marginBottom: 24,
  },
  paymentTitleContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  wrapQRContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.WHITE,
    paddingTop: 24,
    paddingBottom: 24,
  },
  paymentContainer: {
    paddingBottom: 150,
  },
  headerTitle: {
    fontWeight: '500',
    fontSize: 16,
    color: COLORS.BLACK_1,
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
    color: COLORS.BLACK_1,
  },
  downloadQr: {
    marginTop: 10,
  },
  downloadQrText: {
    color: COLORS.BLUE_2,
    textDecorationLine: 'underline',
  },
  note: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    paddingBottom: 24,
  },
  marginT12: { marginTop: 12 },
  marginL16: { marginLeft: 16 },
  img: { width: 36, height: 36 },
});
