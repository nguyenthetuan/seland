import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  NativeSyntheticEvent,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import RNFetchBlob from 'react-native-blob-util';
import { Header, Text } from '../../../components';
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
  const [vnPayResult, setVNPayResult] = useState(false);

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
    if (pageIndex === 1) {
      if (isBank) return 'Chuyển khoản ngân hàng';
      return 'VN Pay';
    }
    if (pageIndex === 2) return 'Kết quả giao dịch';
    return 'Nạp tiền';
  };

  const handleResult = (result: boolean) => {
    setVNPayResult(result);
    pagerRef.current?.setPage(pageIndex + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        hasGoBack
        title={generateHeader()}
        right={<Text>{pageIndex + 1 + '/3'}</Text>}
      />
      <View style={styles.view}>
        <View style={styles.pagerView}>
          <View style={styles.defaultIndicator}></View>
          <View
            style={[styles.indicator, pageIndex >= 1 && styles.indicatorBlue]}
          ></View>
          <View
            style={[styles.indicator, pageIndex >= 2 && styles.indicatorBlue]}
          ></View>
        </View>
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
            currentIndex={pageIndex}
            onVNPayResult={handleResult}
          />
          <BankPaymentSuccess
            isBank={isBank}
            doMore={() => pagerRef.current?.setPage(0)}
            vnPayResult={vnPayResult}
          />
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
    marginBottom: 24,
    flexDirection: 'row',
  },
  pager: { flex: 1 },
  indicator: { flex: 1, backgroundColor: COLORS.NEUTRAL4, marginLeft: 4 },
  indicatorBlue: { backgroundColor: COLORS.BLUE_2 },
  defaultIndicator: { flex: 1, backgroundColor: COLORS.BLUE_2 },
});
