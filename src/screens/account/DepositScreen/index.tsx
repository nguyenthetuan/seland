import { useNavigation } from '@react-navigation/native';
import { Input } from '@rneui/themed';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import RNFetchBlob from 'react-native-blob-util';
import { ArrowLeft, Circle, CircleCheck, VNPay } from '../../../assets';
import { Header, Text } from '../../../components';
import { COLORS } from '../../../constants';
import PaymentMethod from './PaymentMethod';
import { IconBank } from './PaymentMethod/icon';
import styles from './styles';
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

  const callback = async (data: any) => {
    const base64Data = data && data.replace('data:image/svg+xml;base64,', ''); // Remove data URL prefix

    const filePath = RNFetchBlob.fs.dirs.DocumentDir + '/qrcode.png';

    await RNFetchBlob.fs.writeFile(filePath, base64Data, 'base64'); // Save the PNG to the device's storage

    console.log('QR code downloaded:=======', filePath);
  };

  const handleDownloadQRCode = () => {
    const svgData = qrCodeRef?.current?.toDataURL(callback);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
      <Header
        hasGoBack
        title={t('common.topup')}
      />
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
            value={amount}
            renderErrorMessage={false}
            cursorColor={COLORS.BLACK_1}
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
                    index !== 0 && { marginLeft: 16 },
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
                    {item?.value}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <PaymentMethod
            icon={<IconBank />}
            title="Chuyển khoản ngân hàng"
            onPress={() => {}}
          />
          <PaymentMethod
            icon={
              <Image
                source={VNPay}
                style={{ width: 36, height: 36 }}
              />
            }
            title="VN Pay"
            onPress={() => {}}
            style={{ marginTop: 12 }}
          />
        </View>

        {/* <View>
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

            {vnPaymentType &&
              listBankAccount
                .filter(item => item.type === 'VNPay')
                .map((item: TBankInfo) => {
                  return (
                    <View style={styles.wrapQRContainer}>
                      <QRCode
                        value={item.bankNumber}
                        size={200}
                        getRef={ref => (qrCodeRef.current = ref)}
                      />

                      <TouchableOpacity
                        style={styles.downloadQr}
                        onPress={handleDownloadQRCode}
                      >
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

            {!vnPaymentType &&
              listBankAccount
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
        </View> */}
      </ScrollView>

      {/* <View style={styles.wrapBottomContainer}>
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
      </View> */}
    </SafeAreaView>
  );
};

export default BankAccount;
