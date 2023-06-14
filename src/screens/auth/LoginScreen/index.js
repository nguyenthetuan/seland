import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {
  AuthBackground,
  AuthHeading,
  Button,
  CheckBox,
  Container,
  Input,
  Screen,
  Text,
} from '../../../components';
import { COLORS } from '../../../constants/colors';
import { login, selectAuth } from '../../../features';
import { dispatchThunk, yup } from '../../../utils';
import styles from './styles';

const schema = yup.object({
  phone_number: yup.string().isValidPhoneNumber(),
  password: yup.string().isValidPassword(),
  remember_me: yup.boolean(),
});

const LoginScreen = () => {
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
      remember_me: true,
    },
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = data => dispatchThunk(dispatch, login(data));

  const navigateToForgotPassword1 = () => navigate('ForgotPassword1');

  const navigateToSignup = () => navigate('Signup');

  return (
    <Screen>
      <AuthBackground />
      <Container>
        <AuthHeading hasHello>{t('heading.loginToContinue')}</AuthHeading>
        <Input
          autoComplete="tel"
          control={control}
          disabled={loading}
          errorMessage={errors.phone_number?.message}
          inputMode="numeric"
          isNumeric
          label={t('input.phoneNumber')}
          name="phone_number"
          onFocus={() => clearErrors('phone_number')}
        />
        <Input
          autoComplete="current-password"
          control={control}
          disabled={loading}
          errorMessage={errors.password?.message}
          isPassword
          label={t('input.password')}
          name="password"
          onFocus={() => clearErrors('password')}
        />
        <View style={styles.row}>
          <CheckBox
            checkedColor={COLORS.BLUE_1}
            checkedIcon="check-box"
            containerStyle={styles.checkbox}
            control={control}
            iconType="material"
            name="remember_me"
            title={` ${t('checkbox.rememberLogin')}`}
            uncheckedColor={COLORS.GRAY_5}
            uncheckedIcon="check-box-outline-blank"
          />
          <Text
            style={styles.forgotPassword}
            onPress={navigateToForgotPassword1}
          >
            {t('common.forgotPassword')}
          </Text>
        </View>
        <Button
          buttonStyle={styles.button}
          loading={loading}
          onPress={handleSubmit(onSubmit)}
          title={t('button.login')}
        />
        <Text style={styles.nonmember}>
          {t('common.nonmember')}{' '}
          <Text
            style={styles.signup}
            onPress={navigateToSignup}
          >
            {t('common.signup')}
          </Text>
        </Text>
      </Container>
    </Screen>
  );
};

export default LoginScreen;
