import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';

import { Button } from '../../components';
import { logout } from '../../features';
import { dispatchThunk } from '../../utils';
import styles from './styles';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const navigateToChangePassword = () => navigate('ChangePassword');

  const handleLogout = () => dispatchThunk(dispatch, logout());

  return (
    <SafeAreaView style={styles.container}>
      <Button
        onPress={navigateToChangePassword}
        title="Change password"
      />
      <Button
        onPress={handleLogout}
        title="Log out"
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
