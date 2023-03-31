import {useNavigation} from '@react-navigation/native';
import {Button} from '@rneui/themed';
import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from './styles';

const LoginScreen = () => {
  const {navigate} = useNavigation();

  const navigateToSignup = () => navigate('Signup');

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Login" />
      <Button onPress={navigateToSignup} title="Go to signup" />
    </SafeAreaView>
  );
};

export default LoginScreen;
