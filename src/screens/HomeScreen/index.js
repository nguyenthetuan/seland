import {Button} from '@rneui/themed';
import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from './styles';

const HomeScreen = () => (
  <SafeAreaView style={styles.container}>
    <Button title="Log out" />
  </SafeAreaView>
);

export default HomeScreen;
