import { useNavigation } from '@react-navigation/native';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Modal, View } from 'react-native';

import { Button, Text } from '../../../../components';
import {
  COLOR_BLUE_1,
  COLOR_GRAY_4,
  COLOR_GRAY_7,
} from '../../../../constants';
import ItemConfirm from '../ItemConfirm';
import styles from './styles';

const PopupConfirmPost = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);
  const { navigate } = useNavigation();

  const openPopup = () => setVisible(true);

  const closePopup = () => setVisible(false);

  useImperativeHandle(ref, () => ({ openPopup }));

  return (
    <Modal
      visible={visible}
      transparent
    >
      <View style={styles.container}>
        <View style={styles.boxPopup}>
          <Text style={styles.posting}>Tin đăng đã được ghi nhận!</Text>
          <Text style={styles.youPost}>
            Tin của bạn sẽ được kiểm duyệt trong 8h làm việc.
          </Text>
          <View style={styles.boxCodePost}>
            <Text style={{ fontWeight: '500' }}>Mã tin đăng</Text>
            <View style={styles.boxCode}>
              <Text style={styles.code}>346582154</Text>
            </View>
          </View>
          <ItemConfirm
            label="Thanh toán"
            value="Vip Bạc"
          />
          <ItemConfirm
            label="Đơn giá/ ngày"
            value="50,000 VNĐ"
          />
          <View style={styles.boxButton}>
            <Button
              buttonStyle={[styles.btnPopup, { borderColor: COLOR_GRAY_4 }]}
              titleStyle={{ color: COLOR_GRAY_7 }}
              title="Quản lý đăng tin"
              outline
              onPress={closePopup}
            />
            <Button
              buttonStyle={[styles.btnPopup, { backgroundColor: COLOR_BLUE_1 }]}
              title="Đăng tin khác"
              onPress={closePopup}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
});

PopupConfirmPost.displayName = 'PopupConfirmPost';

export default PopupConfirmPost;
