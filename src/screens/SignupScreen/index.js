import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Alert } from 'react-native';
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
import { selectAuth, signup } from '../../features';
import { yup } from '../../utils';
import styles from './styles';

const schema = yup.object({
  phone_number: yup.string().isValidPhoneNumber(),
  password: yup.string().isValidPassword(true),
  password_confirmation: yup.string().isValidPasswordConfirmation(),
});

const SignupScreen = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(selectAuth);
  const { navigate } = useNavigation();
  const { t } = useTranslation();
  const {
    clearErrors,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      phone_number: '',
      password: '',
      password_confirmation: '',
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = async data => {
    try {
      await dispatch(signup(data)).unwrap();
    } catch (error) {
      Alert.alert(error);
    }
  };

  const navigateToLogin = () => navigate('Login');

  return (
    <Screen>
      <AuthBackground />
      <Container>
        <Heading hasHello>{t('heading.registerNewAccount')}</Heading>
        <Input
          autoComplete="tel"
          control={control}
          disabled={loading}
          errorMessage={errors.phone_number?.message}
          inputMode="tel"
          isPhoneNumber
          label={t('input.phoneNumber')}
          name="phone_number"
          onFocus={() => clearErrors('phone_number')}
        />
        <Input
          autoComplete="new-password"
          control={control}
          disabled={loading}
          errorMessage={errors.password?.message}
          isPassword
          label={t('input.password')}
          name="password"
          onFocus={() => clearErrors('password')}
          showPasswordPolicy
        />
        <Input
          autoComplete="off"
          control={control}
          disabled={loading}
          errorMessage={errors.password_confirmation?.message}
          isPassword
          label={t('input.passwordConfirmation')}
          name="password_confirmation"
          onFocus={() => clearErrors('password_confirmation')}
        />
        <Button
          buttonStyle={styles.button}
          loading={loading}
          onPress={handleSubmit(onSubmit)}
          title={t('button.continue')}
        />
        <Text style={styles.tnc1}>
          {t('common.tnc1')}{' '}
          <Text style={[styles.tnc1, styles.tnc2]}>{t('common.tnc2')}</Text>{' '}
          {t('common.tnc3')}
        </Text>
        <Text style={styles.hadAccount}>
          {t('common.hadAccount')}{' '}
          <Text
            style={styles.login}
            onPress={navigateToLogin}
          >
            {t('common.login')}
          </Text>
        </Text>
      </Container>
    </Screen>
  );
};

export default SignupScreen;
