import { Button } from '@rneui/themed';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';

import { logout } from '../../features';
import { dispatchThunk } from '../../utils';
import styles from './styles';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const handleLogout = () => dispatchThunk(dispatch, logout());

  return (
    <SafeAreaView style={styles.container}>
      <Button
        onPress={handleLogout}
        title="Log out"
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
