import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, View } from 'react-native';
import OtpInputs from 'react-native-otp-inputs';
import { useDispatch, useSelector } from 'react-redux';

import {
  AuthBackground,
  AuthHeading,
  Button,
  Container,
  Screen,
  Text,
} from '../..';
import { RESEND_OTP_TIMEOUT } from '../../../constants';
import { generateOtp, getProfile, login, verifyOtp } from '../../../features';
import { selectAuth } from '../../../features/auth';
import { dispatchThunk } from '../../../utils';
import styles from './styles';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { toastConfig } from '../../../utils/toast';

interface IProps {
  isOpen: boolean;
  phoneNumber: string;
  onCloseModal: () => void;
}

const OtpModal = ({isOpen, phoneNumber, onCloseModal}: IProps) => {
  const dispatch = useDispatch();
  const { loading } = useSelector(selectAuth);
  const { t } = useTranslation();
  const [otp, setOtp] = useState('');
  const [seconds, setSeconds] = useState(RESEND_OTP_TIMEOUT);

  useEffect(() => {
    dispatchThunk(
      dispatch,
      generateOtp({
        phone_number: phoneNumber,
      })
    );
  }, [dispatch, phoneNumber]);

  useEffect(() => {
    const interval: any = setInterval(
      () => (seconds > 0 ? setSeconds(seconds - 1) : clearInterval(interval)),
      1000
    );
    return () => clearInterval(interval);
  }, [seconds]);

  const handleWhenVerifySuccess = () => {
    dispatchThunk(dispatch, getProfile());
    onCloseModal && onCloseModal();
  };

  const handleVerifyOtp = () => {
    if (!otp || otp.length === 0) {
      Toast.show({
        text1: t('heading.inputOtp') || "",
      });
      return;
    }

    dispatchThunk(
      dispatch,
      verifyOtp({
        phone_number: phoneNumber,
        otp,
      }),
      handleWhenVerifySuccess
    );
  }

  return (
    <Modal visible={isOpen} >
      <AuthBackground />
      <Container>
        <AuthHeading>{t('heading.inputOtp')}</AuthHeading>
        <View style={styles.container}>
          <Text>{t('common.otpSent')}</Text>
          <View style={styles.phoneNumber}>
            <AuthHeading>{phoneNumber}</AuthHeading>
          </View>
          <OtpInputs
            autofillFromClipboard={false}
            handleChange={setOtp}
            style={styles.wrapOtp}
            inputStyles={styles.otp}
            numberOfInputs={6}
          />
          <Text style={[styles.centerText, styles.grayText, styles.smallText]}>
            {t('common.otpValidity')}
          </Text>
          {seconds <= 0 ? (
            <Text
              style={[styles.blueText, styles.centerText, styles.smallText]}
              onPress={() => setSeconds(RESEND_OTP_TIMEOUT)}
            >
              {t('common.resendOtp')}
            </Text>
          ) : (
            <Text style={[styles.centerText, styles.smallText]}>
              {t('common.resendOtpAfter1')}{' '}
              <Text style={[styles.blueText, styles.smallText]}>
                00:{seconds <= 9 ? `0${seconds}` : seconds}
              </Text>{' '}
              {t('common.resendOtpAfter2')}
            </Text>
          )}
          <Button
            buttonStyle={styles.button}
            loading={loading}
            onPress={handleVerifyOtp}
            title={t('button.verify')}
          />
          {seconds === 0 && (
            <Text
              style={[styles.centerText, styles.grayText]}
              onPress={onCloseModal}
            >
              {t('common.skip')}
            </Text>
          )}
        </View>
      </Container>

      <Toast
        config={toastConfig}
        position="bottom"
      />
    </Modal>
  );
};

export default OtpModal;
