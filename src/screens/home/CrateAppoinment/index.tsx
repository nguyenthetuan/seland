import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';

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
import { createAppoinment, selectUser } from '../../../features';
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
  const { data: user } = useSelector(selectUser);
  const submit = (data: any) => {
    const formData = new FormData();
    formData.append('real_estate_id', router.params.id);
    formData.append('time_weekday', dayjs(data.date).format('YYYY-MM-YY'));
    formData.append('time_hour', data.time);
    formData.append('name', data.name);
    // formData.append('email', data.email);
    formData.append('phone_number', data.phone_number);
    formData.append('user_type_id', user.user_type_id);
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
      value: '2h Sáng',
    },
    {
      label: '2h30 Sáng',
      value: '2h30 Sáng',
    },
    {
      label: '3h Sáng',
      value: '3h Sáng',
    },
    {
      label: '3h30 Sáng',
      value: '3h30 Sáng',
    },
    {
      label: '4h Sáng',
      value: '4h Sáng',
    },
    {
      label: '4h30 Sáng',
      value: '4h30 Sáng',
    },
    {
      label: '5h Sáng',
      value: '5h Sáng',
    },
    {
      label: '5h30 Sáng',
      value: '5h30 Sáng',
    },
    {
      label: '6h Sáng',
      value: '6h Sáng',
    },
    {
      label: '6h30 Sáng',
      value: '6h30 Sáng',
    },
    {
      label: '7h Sáng',
      value: '7h Sáng',
    },
    {
      label: '7h30 Sáng',
      value: '7h30 Sáng',
    },
    {
      label: '8h Sáng',
      value: '8h Sáng',
    },
    {
      label: '8h30 Sáng',
      value: '8h30 Sáng',
    },
    {
      label: '9h Sáng',
      value: '9h Sáng',
    },
    {
      label: '9h30 Sáng',
      value: '9h30 Sáng',
    },
    {
      label: '10h Sáng',
      value: '10h Sáng',
    },
    {
      label: '10h30 Sáng',
      value: '10h30 Sáng',
    },
    {
      label: '11h Sáng',
      value: '11h Sáng',
    },
    {
      label: '11h30 Sáng',
      value: '11h30 Sáng',
    },
    {
      label: '12h Sáng',
      value: '12h Sáng',
    },
    {
      label: '1h Chiều',
      value: '1h Chiều',
    },
    {
      label: '1h30 Chiều',
      value: '1h Chiều',
    },
    {
      label: '2h Chiều',
      value: '2h Chiều',
    },
    {
      label: '2h30 Chiều',
      value: '2h30 Chiều',
    },
    {
      label: '3h Chiều',
      value: '3h Chiều',
    },
    {
      label: '3h30 Chiều',
      value: '3h30 Chiều',
    },
    {
      label: '4h Chiều',
      value: '4h Chiều',
    },
    {
      label: '4h30 Chiều',
      value: '4h30 Chiều',
    },
    {
      label: '5h Chiều',
      value: '5h Chiều',
    },
    {
      label: '5h30 Chiều',
      value: '5h30 Chiều',
    },
    {
      label: '6h Chiều',
      value: '6h Chiều',
    },
    {
      label: '6h30 Chiều',
      value: '6h30 Chiều',
    },
    {
      label: '7h Chiều',
      value: '7h Chiều',
    },
    {
      label: '7h30 Chiều',
      value: '7h30 Chiều',
    },
    {
      label: '8h Chiều',
      value: '8h Chiều',
    },
    {
      label: '8h30 Chiều',
      value: '8h30 Chiều',
    },
    {
      label: '9h Chiều',
      value: '9h Chiều',
    },
    {
      label: '9h30 Chiều',
      value: '9h30 Chiều',
    },
    {
      label: '10h Chiều',
      value: '10h Chiều',
    },
    {
      label: '10h30 Chiều',
      value: '10h30 Chiều',
    },
    {
      label: '11h Chiều',
      value: '11h Chiều',
    },
    {
      label: '11h30 Chiều',
      value: '11h30 Chiều',
    },
    {
      label: '12h Chiều',
      value: '12h Chiều',
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
            mode="datetime"
            disableMaxDate={true}
          />
          <Select
            buttonStyle={styles.select}
            control={control}
            data={data}
            defaultButtonText="Please Select"
            label={t('button.selectTime')}
            labelStyle={styles.inputTime}
            name="time"
            required
            rules={{
              required: 'Vui lòng chọn giờ',
            }}
          />
          <View style={styles.InforRealState}>
            <Text>{t('input.postBDS')}</Text>
            <Text style={styles.valueBDS}>{router.params.title}</Text>
          </View>
          <Input
            errorStyle={styles.errorStyle}
            label={t('input.noteAppoinment')}
            labelStyle={styles.inputLabel}
            name="note"
            control={control}
            styleInput={{ flex: 0, marginTop: 30, height: 50 }}
            inputContainerStyle={{ height: 80 }}
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
