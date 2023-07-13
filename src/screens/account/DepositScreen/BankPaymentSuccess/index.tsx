import React, { useEffect } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { COLORS } from '../../../../constants';
import { IconInformation, IconRetweet } from '../icon';
import { Button, Text } from '../../../../components';
import { appStyles } from '../../../../constants/appStyles';
import { IconCircleSuccess } from '../../BuyPackage/icon';
import { IconCircleFail } from '../../../../assets';
import { VNPayStatus } from '../model';

interface Props {
  doMore: () => void;
  isBank: boolean;
  vnPayResult?: VNPayStatus;
}

const BankPaymentSuccess = (props: Props) => {
  const { doMore, isBank, vnPayResult } = props;

  const generateTitle = (): string => {
    if (isBank || vnPayResult === 'processing') {
      return 'Đang xử lý giao dịch...';
    }
    if (vnPayResult === 'success') {
      return 'Giao dịch thành công';
    }
    return 'Giao dịch thất bại';
  };

  const generateMessage = (): string => {
    return isBank
      ? 'Cảm ơn bạn đã sử dụng dịch vụ. Hãy lưu ý rằng thời gian xử lý giao dịch sẽ giao động từ 4 đến 6 tiếng'
      : 'Cảm ơn bạn đã sử dụng dịch vụ.';
  };

  const generateIcon = () => {
    if (isBank || vnPayResult === 'processing') return <IconRetweet />;
    if (vnPayResult === 'success') return <IconCircleSuccess />;
    return (
      <Image
        style={styles.img}
        source={IconCircleFail}
      />
    );
  };

  return (
    <View style={appStyles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.scrollviewContainer}>
          {generateIcon()}
          <Text style={styles.handling}>{generateTitle()}</Text>
          <Text style={styles.content}>{generateMessage()}</Text>
          <View style={styles.informationCard}>
            <IconInformation />
            <Text style={styles.informationText}>
              Nếu cần hỗ trợ, vui lòng gọi số: 09xxxxx để được hỗ trợ.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottom}>
        <Button title="Quản lý giao dịch" />
        <Button
          onPress={doMore}
          titleStyle={styles.btnCancelTitle}
          buttonStyle={styles.btnCancel}
          title="Nạp thêm"
        />
      </View>
    </View>
  );
};

export default BankPaymentSuccess;

const styles = StyleSheet.create({
  container: { paddingBottom: 120 },
  scrollviewContainer: { alignItems: 'center', marginTop: 102 },
  handling: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.TITLE,
    marginTop: 24,
    lineHeight: 32,
  },
  content: { textAlign: 'center', marginTop: 8, color: COLORS.TITLE },
  informationCard: {
    paddingLeft: 16,
    paddingVertical: 16,
    backgroundColor: COLORS.BLUE_7,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  informationText: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 18,
    color: COLORS.BLUE_1,
    paddingLeft: 8,
    paddingRight: 16,
  },
  bottom: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    paddingBottom: 16,
    backgroundColor: COLORS.WHITE,
  },
  btnCancel: {
    backgroundColor: COLORS.WHITE,
    borderColor: COLORS.BLUE_1,
    marginTop: 8,
  },
  btnCancelTitle: { color: COLORS.BLUE_1 },
  img: { width: 80, height: 80 },
});
