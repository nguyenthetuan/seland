import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
  AuthBackground,
  Button,
  Container,
  Heading,
  Input,
  Screen,
  Text,
} from '../../components';
import { selectAuth } from '../../features';
import { yup } from '../../utils';
import styles from './styles';

const schema = yup.object({
  phone_number: yup.string().isValidPhoneNumber(),
});

const ForgotPasswordScreen1 = () => {
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
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = data => console.log(data);

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
          label={t('input.inputPhoneNumberEmail')}
          name="phone_number"
          onFocus={() => clearErrors('phone_number')}
          placeholder={t('input.phoneNumberEmail')}
        />
        <Button
          buttonStyle={styles.button}
          loading={loading}
          onPress={handleSubmit(onSubmit)}
          title={t('button.continue')}
        />
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

export default ForgotPasswordScreen1;
