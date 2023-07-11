import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Modal, View } from 'react-native';

import styles from './styles';
import { Button, Text } from '../../../../components';
import { COLORS } from '../../../../constants';
import ItemConfirm from '../ItemConfirm';
import { formatPrice } from '../../../../utils/format';

interface PopupPaymentErrorProps {
  data?: {
    balance: number;
    balancePromotion: number;
    message: string;
    paymentCode: number;
    value?: string;
    price?: number;
    post_min?: number;
    totalPrice?: number;
    count_date?: number;
    endDate?: string;
    real_estate_id?: number;
  };
  onSavePrivate?: () => void;
}

const PopupPaymentError: React.FC<PopupPaymentErrorProps> = forwardRef(
  ({ data, onSavePrivate }, ref) => {
    const [visible, setVisible] = useState(false);

    const openPopup = () => {
      setVisible(true);
    };

    useImperativeHandle(ref, () => ({ openPopup }));

    const handleButtonLeft = () => {
      setVisible(false);
    };

    const handleButtonRight = () => {
      setVisible(false);
    };

    const handleSavePrivate = () => {
      onSavePrivate && onSavePrivate();
    };

    return (
      <Modal
        visible={visible}
        transparent
      >
        <View style={styles.container}>
          <View style={styles.boxPopup}>
            <Text style={styles.posting}>Tin đăng chưa được ghi nhận</Text>
            <Text style={styles.youPost}>Tài khoản của bạn không đủ tiền</Text>
            <View style={styles.boxItem}>
              <Text style={styles.labelItem}>Số dư</Text>
              <Text style={styles.valueSurplus}>{`${formatPrice(
                data?.balance
              )} đ`}</Text>
            </View>
            <ItemConfirm
              value={<Text style={styles.value}>{data?.value}</Text>}
              label="Thanh toán"
            />
            <ItemConfirm
              value={`${formatPrice(data?.price)} đ`}
              label="Đơn giá/ngày"
            />
            <ItemConfirm
              value={`${data?.count_date} ngày`}
              label="Thời gian đăng tin"
            />
            <ItemConfirm
              value={`${formatPrice(data?.balancePromotion)} đ`}
              label="Khuyễn mãi"
            />
            <ItemConfirm
              value={
                <Text style={styles.totalPrice}>{`${formatPrice(
                  data?.totalPrice
                )} đ`}</Text>
              }
              label="Tổng tiền"
            />
            <Button
              buttonStyle={styles.btnPopupAdd}
              title="Lưu riêng tư"
              onPress={handleSavePrivate}
            />

            <View style={styles.boxButton}>
              <Button
                buttonStyle={[styles.btnPopup, { borderColor: COLORS.GRAY_4 }]}
                titleStyle={{ color: COLORS.GRAY_7 }}
                title="Nạp tiền"
                outline
                onPress={handleButtonLeft}
              />
              <Button
                buttonStyle={[styles.btnPopup]}
                outline
                title="Huỷ"
                onPress={handleButtonRight}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  }
);

export default PopupPaymentError;
