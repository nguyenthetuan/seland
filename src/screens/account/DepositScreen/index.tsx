import React, { useRef, useState } from 'react';
import { View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Text } from '../../../components';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import styles from './styles';
import { Icon, Input } from '@rneui/themed';
import { ArrowLeft, Circle, CircleCheck } from '../../../assets';
import { COLORS } from '../../../constants';
import QRCode from 'react-native-qrcode-svg';
import RNFetchBlob from 'react-native-blob-util';

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
    value: '200,000',
  },
  {
    id: 3,
    value: '300,000',
  },
];

const prefixAmount1: TPrefixAmount[] = [
  {
    id: 4,
    value: '500,000',
  },
  {
    id: 5,
    value: '1,000,000',
  },
  {
    id: 6,
    value: '2,000,000',
  },
];


const prefixAmount2: TPrefixAmount[] = [
  {
    id: 7,
    value: '5,000,000',
  },
  {
    id: 8,
    value: '10,000,000',
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

  const qrCodeRef = useRef<any>();

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

  const handleDownloadQRCode = async () => {
    const svgData = qrCodeRef?.current && qrCodeRef?.current?.toDataURL && qrCodeRef?.current?.toDataURL();

    const base64Data = svgData && svgData.replace('data:image/svg+xml;base64,', ''); // Remove data URL prefix

    const filePath = RNFetchBlob.fs.dirs.DocumentDir + '/qrcode.png';

    await RNFetchBlob.fs.writeFile(filePath, base64Data, 'base64'); // Save the PNG to the device's storage

    console.log('QR code downloaded:=======', filePath);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
      <ScrollView style={styles.container}>
        <View style={styles.wrapHeader}>
          <TouchableOpacity
            style={[
              styles.wrapHeaderIcon,
              {
                height: 24,
                width: 24,
                justifyContent: 'center',
                marginRight: -8,
              },
            ]}
            onPress={goBack}
          >
            <ArrowLeft />
          </TouchableOpacity>
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
            cursorColor={COLORS.BLACK_1}
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

          <View style={styles.wrapAmountContainer}>
            {prefixAmount1.map((item: TPrefixAmount) => {
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

          <View style={styles.wrapAmountContainer}>
            {prefixAmount2.map((item: TPrefixAmount) => {
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

            {vnPaymentType && listBankAccount
              .filter(item => item.type === 'VNPay')
              .map((item: TBankInfo) => {
                return (
                  <View style={styles.wrapQRContainer}>
                    <QRCode
                      value={item.bankNumber}
                      size={200}
                      ref={qrCodeRef}
                    />

                    <TouchableOpacity style={styles.downloadQr} onPress={handleDownloadQRCode}>
                      <Text style={styles.downloadQrText}>Tải QRCode</Text>
                    </TouchableOpacity>
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

            {!vnPaymentType && listBankAccount
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
