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

import { Button, DateTimePicker, Input, Header } from '../../../components';
import { COLORS, SCREENS } from '../../../constants';
import { createAppoinment } from '../../../features';
import { dispatchThunk } from '../../../utils';
import styles from './style';
import { Control, useController } from 'react-hook-form';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import {
  validateName,
  validatePhone,
  validateEmail,
} from '../../../utils/validates';
import dayjs from 'dayjs';

const CrateAppoinment = () => {
  const router: any = useRoute();
  const {
    clearErrors,
    control,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
    getValues,
  } = useForm({
    defaultValues: {
      date: new Date(),
      name: '',
      phone_number: '',
      email: '',
    },
    // mode: 'onBlur',
    // reValidateMode: 'onBlur',
    // resolver: yupResolver(schema),
  });
  const { t } = useTranslation();
  const { navigate, goBack } = useNavigation();
  const dispatch = useDispatch();
  const submit = (data: any) => {
    const formData = new FormData();
    formData.append('real_estate_id', router.params.id);
    formData.append('time_weekday', dayjs(data.date).format('YYYY-MM-YY'));
    formData.append('time_hour', dayjs(data.date).hour());
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone_number', data.phone_number);

    dispatchThunk(dispatch, createAppoinment(formData), response => {
      goBack();
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title={t('header.appoinmentSeeRealState')} />
      <ScrollView>
        <View style={styles.body}>
          <Text style={styles.title}>Lịch hẹn Khách Hàng - Tô Minh Tuấn</Text>
          <Input
            errorStyle={styles.errorStyle}
            label={t('input.customer')}
            labelStyle={styles.inputLabel}
            name="name"
            required
            control={control}
            styleInput={{ flex: 0, marginTop: 30 }}
            rules={{
              required: 'Vui lòng chọn khách hàng',
              validate: validateName,
            }}
          />
          <Input
            errorStyle={styles.errorStyle}
            label={t('input.phoneNumber')}
            labelStyle={styles.inputLabel}
            name="phone_number"
            isNumeric
            required
            control={control}
            styleInput={{ flex: 0 }}
            rules={{
              required: 'Vui lòng chọn số điện thoại',
              validate: validatePhone,
            }}
          />
          <DateTimePicker
            label={t('input.dateSchedule')}
            control={control}
            labelStyle={styles.inputLabel}
            name="date"
          />
          <View style={styles.InforRealState}>
            <Text>{t('input.postBDS')}</Text>
            <Text style={styles.valueBDS}>Bán căn hộ 219 Trung Kính</Text>
          </View>
          <Input
            errorStyle={styles.errorStyle}
            label={t('input.email')}
            labelStyle={styles.inputLabel}
            name="email"
            control={control}
            styleInput={{ flex: 0, marginTop: 30 }}
            rules={{ required: '', validate: validateEmail }}
          />
        </View>
      </ScrollView>
      <View style={styles.Footer}>
        <Button
          title={t('button.goBack')}
          buttonStyle={styles.buttonBack}
          onPress={goBack}
          outline
        />
        <Button
          title={t('button.addNew')}
          buttonStyle={styles.buttonFooter}
          onPress={handleSubmit(submit)}
        />
      </View>
    </SafeAreaView>
  );
};

export default CrateAppoinment;
