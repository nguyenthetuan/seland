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
  FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button, Input, Select } from '../../../components';
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
import { IconFilter } from '../../../assets';
import ItemAppointment from './components/ItemAppointment';

const UserAppoinmentScreen = () => {
  const { clearErrors, control, getValues, handleSubmit, setValue } = useForm({
    defaultValues: {
      ward_id: null,
      district_id: null,
      province_id: null,
    },
  });
  const { t } = useTranslation();
  const { navigate } = useNavigation();
  const [data] = useState([
    {
      location: 'Bán chung cư 219 Trung Kính',
      name: 'Trịnh Trần Quỳnh Anh',
      phone: '0963204366',
      note: 'KH đổi lịch hẹn sang ngày 4/3',
      time: '13:30 - 15:00',
      date: 'Apr 5 - Apr 6',
    },
    {
      location: 'Bán chung cư 219 Trung Kính',
      name: 'Trịnh Trần Quỳnh Anh',
      phone: '0963204366',
      note: 'KH đổi lịch hẹn sang ngày 4/3',
      time: '13:30 - 15:00',
      date: 'Apr 5 - Apr 6',
    },
  ]);
  const navigationToCreateAppoinment = () =>
    navigate(SCREENS.CREATEAPPOIONMENTSCREEN);

  return (
    <SafeAreaView style={styles.container}>
      <Header title={t('header.appoinmentSeeRealState')} />
      <View style={styles.header}>
        <Input
          inputContainerStyle={styles.inputSearch}
          rightIcon={<Icon name="search" />}
          placeholder={''}
          control={control}
          name="ward_id"
        />
        <Button
          title={t('button.filter')}
          buttonStyle={styles.buttonFooter}
          onPress={navigationToCreateAppoinment}
          icon={<IconFilter />}
        />
      </View>
      <FlatList
        data={data}
        renderItem={item => {
          return <ItemAppointment item={item} />;
        }}
        contentContainerStyle={{ flex: 1 }}
        style={{ flex: 1 }}
      />
    </SafeAreaView>
  );
};

export default UserAppoinmentScreen;
