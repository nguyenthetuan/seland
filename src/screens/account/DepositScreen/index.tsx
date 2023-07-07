import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  NativeSyntheticEvent,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import RNFetchBlob from 'react-native-blob-util';
import { Header } from '../../../components';
import { COLORS } from '../../../constants';
import PagerView, {
  PagerViewOnPageSelectedEvent,
  PagerViewOnPageSelectedEventData,
} from 'react-native-pager-view';
import PaymentOption from './PaymentOption';
import BankPaymentSuccess from './BankPaymentSuccess';
import Payment from './Payment';

const BankAccount = () => {
  const { t } = useTranslation();
  const qrCodeRef = useRef<any>();
  const pagerRef = useRef<PagerView>(null);
  const [pageIndex, setPageIndex] = useState(0);
  const [isBank, setIsBank] = useState(true);
  const [amount, setAmount] = useState(0);

  const callback = async (data: any) => {
    const base64Data = data && data.replace('data:image/svg+xml;base64,', ''); // Remove data URL prefix

    const filePath = RNFetchBlob.fs.dirs.DocumentDir + '/qrcode.png';

    await RNFetchBlob.fs.writeFile(filePath, base64Data, 'base64'); // Save the PNG to the device's storage

    console.log('QR code downloaded:=======', filePath);
  };

  const handleNext = (isBank?: boolean) => {
    pagerRef.current?.setPage(pageIndex + 1);
    setIsBank(isBank ?? false);
  };

  const onPageSelected = (
    e: NativeSyntheticEvent<PagerViewOnPageSelectedEventData>
  ) => {
    setPageIndex(e.nativeEvent.position);
  };

  const generateHeader = (): string => {
    if (pageIndex === 0) return 'Nạp tiền';
    if (pageIndex === 1) return 'Chuyển khoản ngân hàng';
    if (pageIndex === 2) return 'Kết quả giao dịch';
    return 'Nạp tiền';
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        hasGoBack
        title={generateHeader()}
      />
      <View style={styles.view}>
        <View style={styles.pagerView}></View>
        <PagerView
          scrollEnabled={false}
          onPageSelected={onPageSelected}
          ref={pagerRef}
          style={styles.pager}
        >
          <PaymentOption
            setAmountProps={setAmount}
            onNext={handleNext}
            key="1"
          />
          <Payment
            amount={amount}
            onNext={handleNext}
            isBank={isBank}
          />
          <BankPaymentSuccess doMore={() => pagerRef.current?.setPage(0)} />
        </PagerView>
      </View>
    </SafeAreaView>
  );
};

export default BankAccount;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.WHITE },
  view: { paddingHorizontal: 16, flex: 1 },
  pagerView: {
    height: 4,
    backgroundColor: COLORS.BLUE_2,
    marginBottom: 24,
  },
  pager: { flex: 1 },
});
