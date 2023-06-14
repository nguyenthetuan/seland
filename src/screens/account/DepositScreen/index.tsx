import React, { useState } from 'react';
import { View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Text } from '../../../components';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import styles from './styles';
import { Icon, Input } from '@rneui/themed';
import { ArrowLeft, Circle, CircleCheck } from '../../../assets';
import { COLOR_BLACK_1, COLOR_WHITE } from '../../../constants';
import QRCode from 'react-native-qrcode-svg';

type TPrefixAmount = {
  id: number;
  value: string;
};

type TBankInfo = {
  id: number;
  type: string;
  bankNumber: string;
  bankAccount: string;
};

const prefixAmount: TPrefixAmount[] = [
  {
    id: 1,
    value: '100,000',
  },
  {
    id: 2,
    value: '500,000',
  },
  {
    id: 3,
    value: '1,000,000',
  },
];

const listBankAccount: TBankInfo[] = [
  {
    id: 1,
    type: 'VNPay',
    bankNumber: '123456789',
    bankAccount: 'Mr. Abc',
  },
  {
    id: 2,
    type: 'Techcombank',
    bankNumber: '66668888',
    bankAccount: 'Mr. Abc',
  },
  {
    id: 3,
    type: 'Vietcombank',
    bankNumber: '99999999',
    bankAccount: 'Mr. Abc',
  },
];

const BankAccount = () => {
  const { t } = useTranslation();
  const { goBack } = useNavigation();

  const [amount, setAmount] = useState<string>(prefixAmount[0].value);
  const [selectedAmount, setSelectedAmount] = useState<number>(1);
  const [vnPaymentType, setVnPaymentType] = useState<boolean>(false);
  const [confirmPay, setConfirmPay] = useState<boolean>(false);

  const onChangeAmount = (text: string) => {
    setAmount(text);
  };

  const onSelectedAmount = (item: TPrefixAmount) => {
    setSelectedAmount(item.id);
    setAmount(item.value);
  };

  const onChangePaymentType = () => {
    setVnPaymentType(!vnPaymentType);
  };

  const onConfirmPay = () => {
    setConfirmPay(!confirmPay);
  };

  const onPay = () => {};

  const onCancel = () => {};

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLOR_WHITE }}>
      <ScrollView style={styles.container}>
        <View style={styles.wrapHeader}>
          <View style={styles.wrapHeaderIcon}>
            <ArrowLeft onPress={goBack} />
          </View>
          <Text style={styles.title}>Nạp tiền</Text>
        </View>

        <View>
          <Text style={styles.title}>Nhập số tiền cần nạp</Text>
          <Input
            inputContainerStyle={{ borderBottomWidth: 0 }}
            style={styles.wrapInputContainer}
            onChangeText={text => onChangeAmount(text)}
            value={amount}
            renderErrorMessage={false}
            cursorColor={COLOR_BLACK_1}
          />

          <View style={styles.wrapAmountContainer}>
            {prefixAmount.map((item: TPrefixAmount) => {
              return (
                <TouchableOpacity
                  style={
                    selectedAmount === item.id
                      ? styles.selectedAmountContainer
                      : styles.amountContainer
                  }
                  onPress={() => onSelectedAmount(item)}
                >
                  <Text
                    style={
                      selectedAmount === item.id
                        ? styles.selectedTitle
                        : styles.title
                    }
                  >
                    {item?.value}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View>
          <Text style={styles.title}>Chọn hình thức thanh toán</Text>

          <View style={styles.selectedPaymentContainer}>
            <TouchableOpacity
              style={styles.paymentTitleContainer}
              onPress={onChangePaymentType}
              disabled={vnPaymentType}
            >
              <View style={styles.wrapHeaderIcon}>
                {vnPaymentType ? <CircleCheck /> : <Circle />}
              </View>
              <Text>VN PAY</Text>
            </TouchableOpacity>

            {listBankAccount
              .filter(item => item.type === 'VNPay')
              .map((item: TBankInfo) => {
                return (
                  <View style={styles.wrapQRContainer}>
                    <QRCode
                      value={item.bankNumber}
                      size={200}
                    />
                  </View>
                );
              })}
          </View>

          <View style={styles.paymentContainer}>
            <TouchableOpacity
              style={styles.paymentTitleContainer}
              onPress={onChangePaymentType}
              disabled={!vnPaymentType}
            >
              <View style={styles.wrapHeaderIcon}>
                {!vnPaymentType ? <CircleCheck /> : <Circle />}
              </View>
              <Text>Chuyển khoản</Text>
            </TouchableOpacity>

            {listBankAccount
              .filter(item => item.type !== 'VNPay')
              .map((item: TBankInfo) => {
                return (
                  <View style={styles.wrapBankContainer}>
                    <View>
                      <Text>Ngân hàng {item.type}</Text>
                      <Text style={styles.title}>STK: {item.bankNumber}</Text>
                      <Text style={styles.title}>
                        Chủ tài khoản {item.bankAccount}
                      </Text>
                    </View>
                  </View>
                );
              })}
          </View>
        </View>
      </ScrollView>

      <View style={styles.wrapBottomContainer}>
        <TouchableOpacity
          onPress={onConfirmPay}
          style={styles.wrapConfirmPayContainer}
        >
          <View style={styles.wrapHeaderIcon}>
            <ArrowLeft />
          </View>
          <Text>Xác nhận thanh toán</Text>
        </TouchableOpacity>

        <View>
          <TouchableOpacity
            style={styles.confirmPayContainer}
            onPress={onPay}
          >
            <Text style={styles.selectedTitle}>Thanh toán</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cancelPayContainer}
            onPress={onCancel}
          >
            <Text style={styles.cancelText}>Huỷ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BankAccount;
