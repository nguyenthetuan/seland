import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import Clipboard from '@react-native-clipboard/clipboard';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React, { useEffect, useRef } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import RNFS from 'react-native-fs';
import QRCode from 'react-native-qrcode-svg';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import WebView from 'react-native-webview';
import { useDispatch, useSelector } from 'react-redux';
import { Techcombank, Vietcombank } from '../../../../assets';
import { Button, Text } from '../../../../components';
import { COLORS } from '../../../../constants';
import {
  createTransaction,
  getVNPayUrl,
  selectPayment,
  selectUser,
} from '../../../../features';
import { dispatchThunk } from '../../../../utils';
import { requestReadAndWritePermission } from '../../../../utils/permission';
import { IconCopy, IconInformation } from '../icon';
import PopupInformation from './PopupInformation';

interface Props {
  isBank: boolean;
  onNext: () => void;
  amount: number;
  currentIndex: number;
}

const Payment = (props: Props) => {
  const { isBank, onNext, amount, currentIndex } = props;
  const { goBack } = useNavigation();
  const { data: user } = useSelector(selectUser);
  const { loadingCreateTransaction, vnPayUrl } = useSelector(selectPayment);
  const dispatch = useDispatch();
  const content = `"Nap tien ${user?.phone_number}"`;
  const contentBody = `Nap tien ${user?.phone_number}`;

  const qrRef = useRef<QRCode | null>(null);
  const popupRef = useRef<PopupInformation>(null);

  useEffect(() => {
    if (!isBank && amount > 0) {
      dispatchThunk(dispatch, getVNPayUrl(amount));
    }
  }, [amount, isBank]);

  const copy = (content: string) => {
    Clipboard.setString(content);
    Toast.show({
      text1: 'Copy thành công',
    });
  };

  const handleCancel = () => {
    goBack();
  };

  useEffect(() => {
    if (isBank && currentIndex === 1) {
      popupRef.current?.openPopup();
    }
  }, [isBank, currentIndex]);

  const confirm = () => {
    const params = {
      title: contentBody,
      note: 4,
      status: 2,
      transaction_date: moment().format('yyyy-MM-DD HH:mm:ss'),
      phone_number: user?.phone_number,
      transaction_amount: amount,
    };
    dispatchThunk(dispatch, createTransaction(params), createSuccess);
  };

  const createSuccess = () => {
    onNext();
  };

  const saveQR = async () => {
    const qrName = '/QR' + moment().valueOf() + '.png';
    console.log(qrName);
    if (await requestReadAndWritePermission()) {
      qrRef.current?.toDataURL((data: any) => {
        RNFS.writeFile(RNFS.CachesDirectoryPath + qrName, data, 'base64')
          .then(success => {
            return CameraRoll.save(RNFS.CachesDirectoryPath + qrName, {
              type: 'photo',
            });
          })
          .then(() => {
            Toast.show({
              text1: 'Lưu ảnh QR thành công',
            });
          });
      });
    }
  };

  const getValueInUrl = (url: string, paramName: string) => {
    const regex = /[?&]([^=#]+)=([^&#]*)/g;
    const params = {};
    let match;
    while ((match = regex.exec(url))) {
      params[match[1]] = match[2];
    }
    return params[paramName];
  };

  return (
    <View style={styles.container}>
      {isBank ? (
        <View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollView}
          >
            <Text style={[styles.title, styles.marginB16]}>
              Thông tin chuyển khoản
            </Text>

            <View style={styles.card}>
              <View style={styles.bank}>
                <Image
                  style={styles.image}
                  source={Techcombank}
                />
                <View style={styles.marginL8}>
                  <Text style={styles.title}>Techcombank</Text>
                  <Text style={styles.bankDescription}>
                    Ngân hàng Thương mại cổ phần Kỹ Thương
                  </Text>
                </View>
              </View>
              <View style={[styles.spaceBetween, styles.marginT22]}>
                <Text style={styles.bankOwnerTitle}>Chủ tài khoản</Text>
                <Text style={styles.bankOwner}>NGUYEN QUOC VIET</Text>
              </View>
              <View style={[styles.spaceBetween, styles.marginT6]}>
                <Text style={styles.bankOwnerTitle}>Số tài khoản</Text>
                <View style={styles.row}>
                  <Text style={styles.bankOwner}>4296888888</Text>
                  <TouchableOpacity onPress={() => copy('4296888888')}>
                    <IconCopy />
                  </TouchableOpacity>
                </View>
              </View>
              <Button
                onPress={saveQR}
                buttonStyle={styles.btnSaveQR}
                title="Lưu mã QR thanh toán"
                titleStyle={styles.btnSaveQRTitle}
              />
            </View>

            <View style={[styles.card, styles.marginT12]}>
              <View style={styles.bank}>
                <Image
                  style={styles.image}
                  source={Vietcombank}
                />
                <View style={styles.marginL8}>
                  <Text style={styles.title}>Vietcombank</Text>
                  <Text style={styles.bankDescription}>
                    Ngân hàng thương mại cổ phần Ngoại thương
                  </Text>
                </View>
              </View>
              <View style={[styles.spaceBetween, styles.marginT22]}>
                <Text style={styles.bankOwnerTitle}>Chủ tài khoản</Text>
                <Text style={styles.bankOwner}>NGUYEN QUOC VIET</Text>
              </View>
              <View style={[styles.spaceBetween, styles.marginT6]}>
                <Text style={styles.bankOwnerTitle}>Số tài khoản</Text>
                <View style={styles.row}>
                  <Text style={styles.bankOwner}>4296888888</Text>
                  <TouchableOpacity onPress={() => copy('4296888888')}>
                    <IconCopy />
                  </TouchableOpacity>
                </View>
              </View>
              <Button
                onPress={saveQR}
                buttonStyle={styles.btnSaveQR}
                title="Lưu mã QR thanh toán"
                titleStyle={styles.btnSaveQRTitle}
              />
            </View>

            <View
              style={[
                styles.card,
                {
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 12,
                },
              ]}
            >
              <View>
                <Text style={styles.bankDescription}>
                  Nội dung chuyển khoản<Text style={styles.red}>*</Text>
                </Text>
                <Text style={styles.bankContent}>{content}</Text>
              </View>
              <TouchableOpacity onPress={() => copy(content)}>
                <IconCopy />
              </TouchableOpacity>
            </View>

            <View style={[styles.informationCard, styles.marginT12]}>
              <IconInformation />
              <Text style={styles.informationText}>
                <Text style={styles.informationTitle}>Lưu ý: </Text>
                {`Vui lòng chuyển khoản chính xác nội dung để giao dịch được xử lý nhanh chóng. Thời gian xử lý giao dịch sẽ giao động từ 4 đến 6 tiếng\nNếu cần hỗ trợ, vui lòng gọi số: 09xxxxx`}
              </Text>
            </View>
          </ScrollView>
          <View style={styles.bottom}>
            <Button
              loading={loadingCreateTransaction}
              title="Xác nhận chuyển khoản"
              onPress={confirm}
            />
            <Button
              onPress={handleCancel}
              titleStyle={styles.btnCancelTitle}
              buttonStyle={styles.btnCancel}
              title="Huỷ"
            />
          </View>
        </View>
      ) : (
        <WebView
          onNavigationStateChange={e => {
            console.log(decodeURIComponent(e.url));
            if (e.url.includes('paymentStatus')) {
              const callback = getValueInUrl(
                decodeURIComponent(e.url),
                'callbackUrl'
              );
              console.log(getValueInUrl(callback, 'paymentStatus'));
              //TODO: direct to last screen
            }
          }}
          source={{
            uri: vnPayUrl,
          }}
        />
      )}
      <View style={styles.qr}>
        <QRCode
          getRef={c => {
            qrRef.current = c;
          }}
        />
      </View>
      <PopupInformation ref={popupRef} />
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.WHITE },
  card: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: COLORS.NEUTRAL2,
    borderRadius: 8,
  },
  informationCard: {
    paddingLeft: 16,
    paddingVertical: 16,
    backgroundColor: COLORS.BLUE_7,
    borderRadius: 8,
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.BLACK_1,
  },
  bankDescription: {
    fontSize: 13,
    fontWeight: '400',
    color: COLORS.LOCAL_GRAY,
  },
  marginB16: { marginBottom: 16 },
  marginL8: { marginLeft: 8 },
  marginT22: { marginTop: 22 },
  marginT6: { marginTop: 6 },
  marginT12: { marginTop: 12 },
  image: { width: 40, height: 40 },
  bank: { flexDirection: 'row', alignItems: 'center' },
  spaceBetween: { flexDirection: 'row', justifyContent: 'space-between' },
  bankOwnerTitle: { fontSize: 14, color: COLORS.LOCAL_GRAY },
  bankOwner: { fontSize: 14, color: COLORS.TITLE, fontWeight: '700' },
  btnSaveQR: {
    backgroundColor: COLORS.WHITE,
    borderStyle: 'dashed',
    marginTop: 20,
  },
  btnSaveQRTitle: {
    color: COLORS.BLUE_1,
    fontWeight: '700',
    fontSize: 16,
  },
  bankContent: { fontWeight: '700', fontSize: 16, color: COLORS.BLACK_1 },
  red: {
    color: COLORS.RED_1,
  },
  informationText: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 18,
    color: COLORS.BLUE_1,
    paddingLeft: 8,
    paddingRight: 16,
  },
  informationTitle: {
    fontWeight: '700',
    fontSize: 13,
    lineHeight: 18,
    color: COLORS.BLUE_1,
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
  row: { flexDirection: 'row' },
  scrollView: { paddingBottom: 120 },
  qr: { height: 0, width: 0 },
});
