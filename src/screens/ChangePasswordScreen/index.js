import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';

import {
  AuthBackground,
  Button,
  Container,
  Heading,
  Input,
  Screen,
} from '../../components';
import { changePassword, selectAuth } from '../../features';
import { dispatchThunk, yup } from '../../utils';
import styles from './styles';

const schema = yup.object({
  old_password: yup.string().isValidPassword(),
  password: yup.string().isValidPassword(true),
  password_confirmation: yup.string().isValidPasswordConfirmation(),
});

const ChangePasswordScreen = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(selectAuth);
  const { t } = useTranslation();
  const {
    clearErrors,
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      old_password: '',
      password: '',
      password_confirmation: '',
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const handleSuccess = response => {
    Toast.show({
      text1: response,
    });
    reset();
  };

  const onSubmit = data =>
    dispatchThunk(dispatch, changePassword(data), handleSuccess);

  return (
    <Screen>
      <AuthBackground />
      <Container>
        <Heading>{t('heading.createNewPassword')}</Heading>
        <Input
          autoComplete="current-password"
          control={control}
          disabled={loading}
          errorMessage={errors.old_password?.message}
          isPassword
          label={t('input.currentPassword')}
          name="old_password"
          onFocus={() => clearErrors('old_password')}
        />
        <Input
          autoComplete="new-password"
          control={control}
          disabled={loading}
          errorMessage={errors.password?.message}
          isPassword
          label={t('input.newPassword')}
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
          title={t('button.save')}
        />
      </Container>
    </Screen>
  );
};

export default ChangePasswordScreen;
