import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import OtpInputs from 'react-native-otp-inputs';

import {
  AuthBackground,
  Button,
  Container,
  Heading,
  Screen,
  Text,
} from '../../components';
import styles from './styles';

const OtpScreen = () => {
  const { navigate } = useNavigation();
  const { params } = useRoute();
  const { t } = useTranslation();
  const [otp, setOtp] = useState('');
  const [timeLeft, setTimeLeft] = useState(60);

  let timer;

  const startTimer = () => {
    timer = setTimeout(() => {
      if (timeLeft <= 0) return clearTimeout(timer);
      return setTimeLeft(timeLeft - 1);
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => clearTimeout(timer);
  });

  const restartTimer = () => {
    setTimeLeft(60);
    clearTimeout(timer);
    startTimer();
  };

  const navigateToLogin = () => navigate('Login');

  return (
    <Screen>
      <AuthBackground />
      <Container>
        <Heading hasBack>{t('heading.inputOtp')}</Heading>
        <Text>{t('common.otpSent')}</Text>
        <View style={styles.phoneNumber}>
          <Heading>{params?.phoneNumber}</Heading>
        </View>
        <OtpInputs
          handleChange={setOtp}
          numberOfInputs={6}
          inputStyles={styles.otp}
        />
        <Text style={[styles.centerText, styles.otpValidity, styles.smallText]}>
          {t('common.otpValidity')}
        </Text>
        {timeLeft <= 0 ? (
          <Text
            style={[styles.blueText, styles.centerText, styles.smallText]}
            onPress={restartTimer}
          >
            {t('common.resendOtp')}
          </Text>
        ) : (
          <Text style={[styles.centerText, styles.smallText]}>
            {t('common.resendOtpAfter1')}{' '}
            <Text style={[styles.blueText, styles.smallText]}>
              00:{timeLeft <= 9 ? `0${timeLeft}` : timeLeft}
            </Text>{' '}
            {t('common.resendOtpAfter2')}
          </Text>
        )}
        <Button
          buttonStyle={styles.button}
          onPress={() => {}}
          title={t('button.verify')}
        />
        <Text style={[styles.centerText, styles.hadAccount]}>
          {t('common.hadAccount')}{' '}
          <Text
            style={styles.blueText}
            onPress={navigateToLogin}
          >
            {t('common.login')}
          </Text>
        </Text>
      </Container>
    </Screen>
  );
};

export default OtpScreen;
