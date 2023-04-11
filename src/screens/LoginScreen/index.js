import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Alert, ImageBackground, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { isMobilePhone } from 'validator';

import { Logo, SeLand } from '../../assets';
import {
  Button,
  CheckBox,
  Heading,
  Input,
  Screen,
  Text,
} from '../../components';
import { COLOR_BLUE_1, COLOR_GRAY } from '../../constants/colors';
import { login, selectAuth } from '../../features';
import styles from './styles';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(selectAuth);
  const { navigate } = useNavigation();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      phone_number: '',
      password: '',
      remember_login: true,
    },
    mode: 'onTouched',
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
      <ImageBackground
        source={SeLand}
        style={styles.image}
      >
        <View style={styles.logo}>
          <Logo />
        </View>
      </ImageBackground>
      <View style={styles.container}>
        <Heading hasHello>Đăng nhập để tiếp tục</Heading>
        <Input
          autoComplete="tel"
          autoFocus
          control={control}
          disabled={loading}
          errorMessage={errors.phone_number && 'Số điện thoại không hợp lệ'}
          inputMode="tel"
          label="Số điện thoại"
          name="phone_number"
          rules={{
            validate: value => /^\d{10}$/.test(value) && isMobilePhone(value),
          }}
        />
        <Input
          autoComplete="current-password"
          control={control}
          disabled={loading}
          errorMessage={errors.password && 'Mật khẩu không hợp lệ'}
          isPassword
          label="Mật khẩu"
          name="password"
          rules={{
            validate: value =>
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,64}$/.test(value),
          }}
        />
        <View style={styles.row}>
          <CheckBox
            checkedColor={COLOR_BLUE_1}
            checkedIcon="check-box"
            containerStyle={styles.checkbox}
            control={control}
            iconType="material"
            name="remember_login"
            title=" Nhớ tài khoản"
            uncheckedColor={COLOR_GRAY}
            uncheckedIcon="check-box-outline-blank"
          />
          <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>
        </View>
        <Button
          buttonStyle={styles.button}
          loading={loading}
          onPress={handleSubmit(onSubmit)}
          title="Đăng nhập"
        />
        <Text style={styles.nonmember}>
          Chưa là thành viên?{' '}
          <Text
            style={styles.signup}
            onPress={navigateToSignup}
          >
            Đăng ký
          </Text>
        </Text>
      </View>
    </Screen>
  );
};

export default LoginScreen;
