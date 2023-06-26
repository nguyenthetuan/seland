import { Icon } from '@rneui/base';
import React, {
  FC,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import {
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Select } from '../../../components';
import { COLORS, SCREENS } from '../../../constants';
import {
  clearDistricts,
  getDistricts,
  getProvinces,
  selectCommon,
  selectPosts,
} from '../../../features';
import { dispatchThunk } from '../../../utils';
import styles from './style';
import { Control, useController } from 'react-hook-form';
import { Header } from '../../../components';
import { useNavigation } from '@react-navigation/native';

const UserAppoinmentScreen = () => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();
  const navigationToCreateAppoinment = () =>
    navigate(SCREENS.CREATEAPPOIONMENTSCREEN);
  return (
    <SafeAreaView style={styles.container}>
      <Header title={t('header.appoinmentSeeRealState')} />
      <View style={{ flex: 1 }} />
      <Button
        title={t('button.crateAppoinment')}
        buttonStyle={styles.buttonFooter}
        onPress={navigationToCreateAppoinment}
      />
    </SafeAreaView>
  );
};

export default UserAppoinmentScreen;
