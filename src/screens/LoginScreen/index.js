import {useNavigation} from '@react-navigation/native';
import {Button} from '@rneui/themed';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {useDispatch} from 'react-redux';
import {login} from '../../features/auth/authSlice';
import styles from './styles';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const {navigate} = useNavigation();

  const handleLogin = () => dispatch(login());

  const navigateToSignup = () => navigate('Signup');

  return (
    <SafeAreaView style={styles.container}>
      <Button onPress={handleLogin} title="Login" />
      <Button onPress={navigateToSignup} title="Go to signup" />
    </SafeAreaView>
  );
};

export default LoginScreen;
