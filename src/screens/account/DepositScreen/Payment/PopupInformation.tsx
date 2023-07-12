import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Dimensions, Modal, StyleSheet, View } from 'react-native';
import { COLORS } from '../../../../constants';
import { IconInformation, IconPopupInformation } from '../icon';
import { Button, Text } from '../../../../components';
const { width } = Dimensions.get('screen');

interface Props {}

interface PopupInformation {
  openPopup: () => void;
}

const PopupInformation = forwardRef<PopupInformation, Props>(
  (props: Props, ref) => {
    const [visible, setVisible] = useState(false);

    const openPopup = () => {
      setVisible(true);
    };

    useImperativeHandle(ref, () => ({ openPopup }));

    const handleOk = () => {
      setVisible(false);
    };

    return (
      <Modal
        visible={visible}
        transparent
      >
        <View style={styles.container}>
          <View style={styles.boxPopup}>
            <IconPopupInformation />
            <Text style={styles.title}>Thông báo quan trọng</Text>
            <Text style={styles.text}>
              Khi sử dụng phương thức chuyển khoản ngân hàng, hãy lưu ý rằng
              thời gian xử lý giao dịch sẽ giao động từ 4 đến 6 tiếng
            </Text>
            <Button
              onPress={handleOk}
              buttonStyle={styles.btn}
              title="Đã hiểu"
            />
          </View>
        </View>
      </Modal>
    );
  }
);

export default PopupInformation;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.BLACK_2,
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
  },
  boxPopup: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 8,
    paddingHorizontal: 24,
    width: width * 0.96,
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.TITLE,
    marginTop: 12,
  },
  text: { fontSize: 14, color: COLORS.TITLE, textAlign: 'center' },
  btn: { width: width * 0.96 - 48, marginTop: 16 },
});
