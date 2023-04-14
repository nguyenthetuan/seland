import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Alert, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {
  AuthBackground,
  Button,
  CheckBox,
  Heading,
  Input,
  Screen,
  Text,
} from '../../components';
import { COLOR_BLUE_1, COLOR_GRAY } from '../../constants/colors';
import { login, selectAuth } from '../../features';
import { yup } from '../../utils';
import styles from './styles';

const schema = yup.object({
  phone_number: yup.string().isValidPhoneNumber(),
  password: yup.string().isValidPassword(),
  remember_login: yup.boolean(),
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
      remember_login: true,
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = async data => {
    try {
      await dispatch(login(data)).unwrap();
    } catch (error) {
      Alert.alert(error);
    }
  };

  const navigateToSignup = () => navigate('Signup');

  return (
    <Screen>
      <AuthBackground />
      <View style={styles.container}>
        <Heading hasHello>{t('heading.loginToContinue')}</Heading>
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
            checkedColor={COLOR_BLUE_1}
            checkedIcon="check-box"
            containerStyle={styles.checkbox}
            control={control}
            iconType="material"
            name="remember_login"
            title={` ${t('checkbox.rememberLogin')}`}
            uncheckedColor={COLOR_GRAY}
            uncheckedIcon="check-box-outline-blank"
          />
          <Text style={styles.forgotPassword}>
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
      </View>
    </Screen>
  );
};

export default LoginScreen;
