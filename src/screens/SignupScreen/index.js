import {useNavigation} from '@react-navigation/native';
import {Button} from '@rneui/themed';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {useDispatch} from 'react-redux';
import {signup} from '../../features';
import styles from './styles';

const SignupScreen = () => {
  const dispatch = useDispatch();
  const {navigate} = useNavigation();

  const handleSignup = () => dispatch(signup());

  const navigateToLogin = () => navigate('Login');

  return (
    <SafeAreaView style={styles.container}>
      <Button onPress={handleSignup} title="Signup" />
      <Button onPress={navigateToLogin} title="Go to login" />
    </SafeAreaView>
  );
};

export default SignupScreen;
