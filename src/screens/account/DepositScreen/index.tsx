import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NativeSyntheticEvent, SafeAreaView, View } from 'react-native';
import RNFetchBlob from 'react-native-blob-util';
import { Header } from '../../../components';
import { COLORS } from '../../../constants';
import PagerView, {
  PagerViewOnPageSelectedEvent,
  PagerViewOnPageSelectedEventData,
} from 'react-native-pager-view';
import PaymentOption from './PaymentOption';
import BankPayment from './BankPayment';

const BankAccount = () => {
  const { t } = useTranslation();
  const qrCodeRef = useRef<any>();
  const pagerRef = useRef<PagerView>(null);
  const [pageIndex, setPageIndex] = useState(0);

  const callback = async (data: any) => {
    const base64Data = data && data.replace('data:image/svg+xml;base64,', ''); // Remove data URL prefix

    const filePath = RNFetchBlob.fs.dirs.DocumentDir + '/qrcode.png';

    await RNFetchBlob.fs.writeFile(filePath, base64Data, 'base64'); // Save the PNG to the device's storage

    console.log('QR code downloaded:=======', filePath);
  };

  const handleNext = () => {
    pagerRef.current?.setPage(pageIndex + 1);
  };

  const onPageSelected = (
    e: NativeSyntheticEvent<PagerViewOnPageSelectedEventData>
  ) => {
    setPageIndex(e.nativeEvent.position);
  };

  const generateHeader = (): string => {
    if (pageIndex === 0) return 'Nạp tiền';
    if (pageIndex === 1) return 'Chuyển khoản ngân hàng';
    return 'Nạp tiền';
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
      <Header
        hasGoBack
        title={generateHeader()}
      />
      <View style={{ paddingHorizontal: 16, flex: 1 }}>
        <View
          style={{
            height: 4,
            backgroundColor: COLORS.BLUE_2,
            marginBottom: 24,
          }}
        ></View>
        <PagerView
          onPageSelected={onPageSelected}
          ref={pagerRef}
          style={{ flex: 1 }}
        >
          <PaymentOption
            onNext={handleNext}
            key="1"
          />
          <BankPayment />
        </PagerView>
      </View>
    </SafeAreaView>
  );
};

export default BankAccount;
