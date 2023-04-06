import { useNavigation } from '@react-navigation/native';
import { Button, CheckBox, Text } from '@rneui/themed';
import React from 'react';
import { ImageBackground, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { Logo, SeLand } from '../../assets';
import { Heading, Input, Screen } from '../../components';
import { COLOR_BLUE_1, COLOR_GRAY } from '../../constants/colors';
import { login } from '../../features';
import styles from './styles';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const handleLogin = () => dispatch(login());

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
          inputMode="tel"
          label="Số điện thoại"
        />
        <Input
          autoComplete="current-password"
          isPassword
          label="Mật khẩu"
        />
        <View style={styles.row}>
          <CheckBox
            checked
            checkedColor={COLOR_BLUE_1}
            checkedIcon="check-box"
            containerStyle={styles.checkbox}
            iconType="material"
            title=" Nhớ tài khoản"
            titleProps={{
              style: [styles.text, styles.checkboxTitle],
            }}
            uncheckedColor={COLOR_GRAY}
            uncheckedIcon="check-box-outline-blank"
          />
          <Text style={[styles.text, styles.forgotPassword]}>
            Quên mật khẩu?
          </Text>
        </View>
        <Button
          buttonStyle={styles.button}
          color={COLOR_BLUE_1}
          title="Đăng nhập"
          titleStyle={[styles.text, styles.buttonTitle]}
        />
        <Text style={[styles.text, styles.nonmember]}>
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
