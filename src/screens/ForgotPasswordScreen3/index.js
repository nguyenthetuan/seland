import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
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
} from '../../components';
import { forgotPassword, selectAuth } from '../../features';
import { dispatchThunk, yup } from '../../utils';
import styles from './styles';

const schema = yup.object({
  password: yup.string().isValidPassword(true),
  password_confirmation: yup.string().isValidPasswordConfirmation(),
});

const ForgotPasswordScreen3 = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(selectAuth);
  const { navigate } = useNavigation();
  const { params } = useRoute();
  const { t } = useTranslation();
  const {
    clearErrors,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      password: '',
      password_confirmation: '',
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const navigateToLogin = () => navigate('Login');

  const onSubmit = data =>
    dispatchThunk(
      dispatch,
      forgotPassword({ ...params, ...data }),
      navigateToLogin
    );

  return (
    <Screen>
      <AuthBackground />
      <Container>
        <Heading>{t('heading.createNewPassword')}</Heading>
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
          title={t('button.finish')}
        />
      </Container>
    </Screen>
  );
};

export default ForgotPasswordScreen3;
