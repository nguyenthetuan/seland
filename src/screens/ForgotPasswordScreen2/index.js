import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import OtpInputs from 'react-native-otp-inputs';
import { useDispatch, useSelector } from 'react-redux';

import {
  AuthBackground,
  Button,
  Container,
  Heading,
  Screen,
  Text,
} from '../../components';
import { RESEND_OTP_TIMEOUT } from '../../constants';
import { generateOtp, verifyOtp } from '../../features';
import { selectAuth } from '../../features/auth';
import { dispatchThunk } from '../../utils';
import styles from './styles';

const OtpScreen = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(selectAuth);
  const { params } = useRoute();
  const { t } = useTranslation();
  const [otp, setOtp] = useState('');
  const [seconds, setSeconds] = useState(RESEND_OTP_TIMEOUT);

  const phone_number = params?.phone_number;

  useEffect(() => {
    dispatchThunk(
      dispatch,
      generateOtp({
        phone_number,
      })
    );
  }, [dispatch, phone_number]);

  useEffect(() => {
    const interval = setInterval(
      () => (seconds > 0 ? setSeconds(seconds - 1) : clearInterval(interval)),
      1000
    );
    return () => clearInterval(interval);
  }, [seconds]);

  const handleVerifyOtp = () =>
    dispatchThunk(
      dispatch,
      verifyOtp({
        phone_number,
        otp,
      }),
      console.log
    );

  return (
    <Screen>
      <AuthBackground />
      <Container>
        <Heading hasBack>{t('heading.forgotPassword')}</Heading>
        <View style={styles.container}>
          <Text>{t('common.otpSent')}</Text>
          <View style={styles.phoneNumber}>
            <Heading>{phone_number}</Heading>
          </View>
          <OtpInputs
            handleChange={setOtp}
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
        </View>
      </Container>
    </Screen>
  );
};

export default OtpScreen;
