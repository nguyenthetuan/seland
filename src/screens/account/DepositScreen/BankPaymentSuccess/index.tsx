import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { COLORS } from '../../../../constants';
import { IconInformation, IconRetweet } from '../icon';
import { Button, Text } from '../../../../components';

interface Props {
  doMore: () => void;
  isBank: boolean;
  vnPayResult?: boolean;
}

const BankPaymentSuccess = (props: Props) => {
  const { doMore, isBank, vnPayResult } = props;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {isBank ? (
        <View>
          <View style={styles.scrollviewContainer}>
            <IconRetweet />
            <Text style={styles.handling}>Đang xử lý giao dịch...</Text>
            <Text style={styles.content}>
              Cảm ơn bạn đã sử dụng dịch vụ. Hãy lưu ý rằng thời gian xử lý giao
              dịch sẽ giao động từ 4 đến 6 tiếng
            </Text>
            <View style={styles.informationCard}>
              <IconInformation />
              <Text style={styles.informationText}>
                Nếu cần hỗ trợ, vui lòng gọi số: 09xxxxx để được hỗ trợ.
              </Text>
            </View>
          </View>
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
      ) : (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text>{vnPayResult ? 'Thành công' : 'Thất bại'}</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default BankPaymentSuccess;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.WHITE, paddingBottom: 120 },
  scrollviewContainer: { alignItems: 'center', marginTop: 102 },
  handling: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.TITLE,
    marginTop: 24,
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
});
