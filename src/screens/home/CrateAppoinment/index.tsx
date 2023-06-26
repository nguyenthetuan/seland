import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { useDispatch } from 'react-redux';

import { useNavigation, useRoute } from '@react-navigation/native';
import dayjs from 'dayjs';
import { useForm } from 'react-hook-form';
import {
  Button,
  DateTimePicker,
  Header,
  Input,
  Select,
} from '../../../components';
import { createAppoinment } from '../../../features';
import { dispatchThunk } from '../../../utils';
import {
  validateEmail,
  validateName,
  validatePhone,
} from '../../../utils/validates';
import styles from './style';

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
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    // resolver: yupResolver(schema),
  });
  const { t } = useTranslation();
  const { navigate, goBack } = useNavigation();
  const dispatch = useDispatch();
  const submit = (data: any) => {
    const formData = new FormData();
    formData.append('real_estate_id', router.params.id);
    formData.append('time_weekday', dayjs(data.date).format('YYYY-MM-YY'));
    formData.append('time_hour', data.time);
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone_number', data.phone_number);

    dispatchThunk(dispatch, createAppoinment(formData), response => {
      Toast.show({
        text1: `${t('Toast.complete')}`,
      });
      goBack();
    });
  };
  const [data] = useState([
    {
      label: '1h Sáng',
      value: '1h Sáng',
    },
    {
      label: '1h30 Sáng',
      value: '1h Sáng',
    },
    {
      label: '2h Sáng',
    },
    {
      label: '2h30 Sáng',
    },
    {
      label: '3h Sáng',
    },
    {
      label: '3h30 Sáng',
    },
    {
      label: '4h Sáng',
    },
    {
      label: '4h30 Sáng',
    },
    {
      label: '5h Sáng',
    },
    {
      label: '5h30 Sáng',
    },
    {
      label: '6h Sáng',
    },
    {
      label: '6h30 Sáng',
    },
    {
      label: '7h Sáng',
    },
    {
      label: '7h30 Sáng',
    },
    {
      label: '8h Sáng',
    },
    {
      label: '8h30 Sáng',
    },
    {
      label: '9h Sáng',
    },
    {
      label: '9h30 Sáng',
    },
    {
      label: '10h Sáng',
    },
    {
      label: '10h30 Sáng',
    },
    {
      label: '11h Sáng',
    },
    {
      label: '11h30 Sáng',
    },
    {
      label: '12h Sáng',
    },
  ]);
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
          <Select
            buttonStyle={styles.select}
            control={control}
            data={data}
            defaultButtonText="Please Select"
            disabled={false}
            label={t('button.selectTime')}
            labelStyle={styles.inputTime}
            name="time"
          />
          <View style={styles.InforRealState}>
            <Text>{t('input.postBDS')}</Text>
            <Text style={styles.valueBDS}>{router.params.title}</Text>
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
