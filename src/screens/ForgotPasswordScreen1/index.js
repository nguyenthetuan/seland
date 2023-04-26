import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import {
  AuthBackground,
  Button,
  Container,
  Heading,
  Input,
  Screen,
  Text,
} from '../../components';
import { generateOtp, selectAuth } from '../../features';
import { yup } from '../../utils';
import styles from './styles';

const schema = yup.object({
  phone_number: yup.string().isValidPhoneNumber(),
});

const ForgotPasswordScreen1 = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(selectAuth);
  const { navigate } = useNavigation();
  const { t } = useTranslation();
  const {
    clearErrors,
    control,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm({
    defaultValues: {
      phone_number: '',
    },
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: yupResolver(schema),
  });
  const [errorVisible, setErrorVisible] = useState(false);

  const handleFocus = () => {
    clearErrors('phone_number');
    setErrorVisible(false);
  };

  const onSubmit = async data => {
    try {
      await dispatch(generateOtp(data)).unwrap();
      navigate('ForgotPassword2', data);
    } catch (error) {
      setErrorVisible(true);
    }
  };

  const navigateToSignup = () => navigate('Signup', getValues());

  const navigateToLogin = () => navigate('Login');

  return (
    <Screen>
      <AuthBackground />
      <Container>
        <Heading hasHello>{t('heading.forgotPassword')}</Heading>
        <Input
          autoComplete="tel"
          control={control}
          disabled={loading}
          errorMessage={errors.phone_number?.message}
          inputMode="tel"
          isPhoneNumber
          label={t('input.inputPhoneNumber')}
          name="phone_number"
          onFocus={handleFocus}
          placeholder={t('input.phoneNumber')}
          renderErrorMessage={!errorVisible}
        />
        {errorVisible && (
          <Text style={styles.error}>
            {t('error.phoneNumber.signupRequired1')}{' '}
            <Text
              style={styles.blueUnderlineText}
              onPress={navigateToSignup}
            >
              {t('error.phoneNumber.signupRequired2')}
            </Text>
          </Text>
        )}
        <Button
          buttonStyle={styles.button}
          loading={loading}
          onPress={handleSubmit(onSubmit)}
          title={t('button.continue')}
        />
        <Text style={styles.hadAccount}>
          {t('common.hadAccount')}{' '}
          <Text
            style={styles.blueUnderlineText}
            onPress={navigateToLogin}
          >
            {t('common.login')}
          </Text>
        </Text>
      </Container>
    </Screen>
  );
};

export default ForgotPasswordScreen1;
