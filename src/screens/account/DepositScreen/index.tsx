import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import {
  NativeSyntheticEvent,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import PagerView, {
  PagerViewOnPageSelectedEventData,
} from 'react-native-pager-view';
import { Header, Text } from '../../../components';
import { COLORS } from '../../../constants';
import BankPaymentSuccess from './BankPaymentSuccess';
import Payment from './Payment';
import PaymentOption from './PaymentOption';
import { PaymentNote, PaymentStatus, VNPayStatus } from './model';
import { dispatchThunk } from '../../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { createTransaction, getVNPayUrl, selectUser } from '../../../features';
import moment from 'moment';

const BankAccount = () => {
  const { goBack } = useNavigation();
  const dispatch = useDispatch();
  const { data: user } = useSelector(selectUser);
  const pagerRef = useRef<PagerView>(null);
  const [pageIndex, setPageIndex] = useState(0);
  const [isBank, setIsBank] = useState(true);
  const [amount, setAmount] = useState(0);
  const [vnPayResult, setVNPayResult] = useState<VNPayStatus>('processing');
  const [isCreatedVNPayRecord, setCreated] = useState(false);

  const handleNext = (isBank?: boolean) => {
    pagerRef.current?.setPage(pageIndex + 1);
    if (isBank !== undefined) {
      setIsBank(isBank);
    }
  };

  useEffect(() => {
    if (pageIndex === 1 && !isBank && amount >= 10000) {
      dispatchThunk(dispatch, getVNPayUrl(amount));
    }
  }, [pageIndex, amount, isBank]);

  useEffect(() => {
    if (pageIndex === 0) setCreated(false);
  }, [pageIndex]);

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

  const handleResult = (result: VNPayStatus) => {
    setVNPayResult(result);
    pagerRef.current?.setPage(2);
    if (result === 'success' && !isCreatedVNPayRecord) {
      confirm();
    }
  };

  const confirm = () => {
    setCreated(true);
    const params = {
      title: 'Nap tien VNPay',
      note: PaymentNote['Nạp tiền qua VNPay'],
      status: PaymentStatus.COMPLETED_STATUS,
      transaction_date: moment().format('yyyy-MM-DD HH:mm:ss'),
      phone_number: user?.phone_number,
      transaction_amount: amount,
    };
    dispatchThunk(dispatch, createTransaction(params));
  };

  const handleBackPress = () => {
    if (pageIndex === 1) {
      pagerRef.current?.setPage(0);
    } else {
      goBack();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        hasGoBack
        title={generateHeader()}
        right={<Text>{pageIndex + 1 + '/3'}</Text>}
        onPress={handleBackPress}
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
