import { useNavigation } from '@react-navigation/native';
import { CheckBox } from '@rneui/themed';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ImageBackground, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { isMobilePhone } from 'validator';

import { Logo, SeLand } from '../../assets';
import { Button, Heading, Input, Screen, Text } from '../../components';
import { COLOR_BLUE_1, COLOR_GRAY } from '../../constants/colors';
import { login } from '../../features';
import styles from './styles';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phone_number: '',
      password: '',
    },
    mode: 'onTouched',
  });

  const onSubmit = data => {
    dispatch(login(data));
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
            checked
            checkedColor={COLOR_BLUE_1}
            checkedIcon="check-box"
            containerStyle={styles.checkbox}
            iconType="material"
            title={<Text> Nhớ tài khoản</Text>}
            uncheckedColor={COLOR_GRAY}
            uncheckedIcon="check-box-outline-blank"
          />
          <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>
        </View>
        <Button
          buttonStyle={styles.button}
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
