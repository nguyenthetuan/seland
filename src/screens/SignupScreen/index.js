import {useNavigation} from '@react-navigation/native';
import {Button} from '@rneui/themed';
import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from './styles';

const SignupScreen = () => {
  const {navigate} = useNavigation();

  const navigateToLogin = () => navigate('Login');

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Signup" />
      <Button onPress={navigateToLogin} title="Go to login" />
    </SafeAreaView>
  );
};

export default SignupScreen;
