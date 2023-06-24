import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { ArrowLeft } from '../../../../../assets/icons';
import { Input, Text, Select } from '../../../../../components';
import styles from './styles';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import yup from '../../../../../utils/yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { COLORS, SCREENS } from '../../../../../constants';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearDistricts,
  clearWards,
  getDistricts,
  getProvinces,
  getWards,
  selectCommon,
} from '../../../../../features';
import { dispatchThunk } from '../../../../../utils';

const StaffInformationScreen = () => {
  const { goBack } = useNavigation();
  const { t } = useTranslation();
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const schema = yup.object({
    name: yup.string().nullable(),
  });

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
      name: '',
      sex: '',
      dob: '',
      phoneNumber: '',
      email: '',
      address: '',
      ward_id: null,
      district_id: null,
      province_id: null,
    },
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onAddNewAccount = () => {
    // navigate(SCREENS.CHANGE_STATUS_SCREEN);
  };

  const { provinces, districts, wards } = useSelector(selectCommon);

  const emptyProvinceOption = {
    label: t('select.province'),
    value: null,
  };
  const emptyDistrictOption = {
    label: t('select.district'),
    value: null,
  };
  const emptyWardOption = {
    label: t('select.ward'),
    value: null,
  };

  const provinceOptions = [emptyProvinceOption, ...provinces];
  const districtOptions = [emptyDistrictOption, ...districts];
  const wardOptions = [emptyWardOption, ...wards];

  const fetchDistricts = (params?: any, callback?: any) =>
    dispatchThunk(dispatch, getDistricts(params), callback);

  const fetchWards = (params: any) => dispatchThunk(dispatch, getWards(params));

  const refresh = async () => {
    await Promise.all([dispatchThunk(dispatch, getProvinces())]);
  };

  useEffect(() => {
    refresh();
  }, []);

  const handleSelectProvince = (selectedItem: any) => {
    setValue('district_id', null);
    setValue('ward_id', null);

    const { value } = selectedItem;

    if (value) {
      fetchDistricts({
        province_code: selectedItem.value,
      });
    } else {
      dispatch(clearDistricts());
      dispatch(clearWards());
    }
  };

  const handleSelectDistrict = (selectedItem: any) => {
    setValue('ward_id', null);

    const { value } = selectedItem;

    if (value) {
      fetchWards({
        province_code: getValues().province_id,
        district_code: selectedItem.value,
      });
    } else {
      dispatch(clearWards());
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
      <ScrollView style={styles.container}>
        <View style={styles.wrapHeader}>
          <TouchableOpacity
            style={styles.wrapHeaderIcon}
            onPress={goBack}
          >
            <ArrowLeft />
          </TouchableOpacity>
          <Text style={styles.title}>
            {t('collaboratorInformation.header')}
          </Text>
        </View>

        <Text style={styles.description}>{t('staffInformation.header')}</Text>

        <View>
          <Input
            labelStyle={styles.labelStyle}
            control={control}
            errorMessage={errors.name?.message}
            label={t('staffInformation.name')}
            name="name"
            onFocus={() => clearErrors('name')}
            rightIcon={undefined}
            renderErrorMessage={false}
            placeholder={t('staffInformation.name')}
          />
        </View>

        <View>
          <Input
            labelStyle={styles.labelStyle}
            control={control}
            errorMessage={errors.phoneNumber?.message}
            label={t('staffInformation.sex')}
            name="sex"
            onFocus={() => clearErrors('sex')}
            rightIcon={undefined}
            renderErrorMessage={false}
            placeholder={t('staffInformation.sex')}
          />
        </View>

        <View>
          <Input
            labelStyle={styles.labelStyle}
            control={control}
            errorMessage={errors.password?.message}
            label={t('staffInformation.dob')}
            name="dob"
            onFocus={() => clearErrors('dob')}
            rightIcon={undefined}
            renderErrorMessage={false}
            placeholder={t('staffInformation.dob')}
          />
        </View>

        <Text style={styles.description}>
          {t('staffInformation.subHeader')}
        </Text>

        <View>
          <Input
            labelStyle={styles.labelStyle}
            control={control}
            errorMessage={errors.password?.message}
            label={t('staffInformation.phoneNumber')}
            name="phoneNumber"
            onFocus={() => clearErrors('phoneNumber')}
            rightIcon={undefined}
            renderErrorMessage={false}
            placeholder={t('staffInformation.phoneNumber')}
          />
        </View>

        <View>
          <Input
            labelStyle={styles.labelStyle}
            control={control}
            errorMessage={errors.password?.message}
            label={t('staffInformation.email')}
            name="email"
            onFocus={() => clearErrors('email')}
            rightIcon={undefined}
            renderErrorMessage={false}
            placeholder={t('staffInformation.email')}
          />
        </View>

        <View>
          <Input
            labelStyle={styles.labelStyle}
            control={control}
            errorMessage={errors.password?.message}
            label={t('staffInformation.address')}
            name="address"
            onFocus={() => clearErrors('address')}
            rightIcon={undefined}
            renderErrorMessage={false}
            placeholder={t('staffInformation.address')}
          />
        </View>

        <View style={styles.address}>
          <View style={styles.addressItem}>
            <Select
              buttonStyle={styles.select}
              control={control}
              data={provinceOptions}
              defaultButtonText={t('select.province') || ''}
              // disabled={loading}
              labelStyle={styles.inputLabel}
              name="province_id"
              onSelect={handleSelectProvince}
            />
          </View>

          <View style={styles.addressItem}>
            <Select
              buttonStyle={styles.select}
              control={control}
              data={districtOptions}
              defaultButtonText={t('select.district') || ''}
              // disabled={loading}
              labelStyle={styles.inputLabel}
              name="district_id"
              onSelect={handleSelectDistrict}
            />
          </View>

          <View style={styles.addressItem}>
            <Select
              buttonStyle={styles.select}
              control={control}
              data={wardOptions}
              defaultButtonText={t('select.ward') || ''}
              // disabled={loading}
              labelStyle={styles.inputLabel}
              name="ward_id"
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.wrapBottomContainer}>
        <TouchableOpacity
          style={styles.confirmPayContainer}
          onPress={onAddNewAccount}
        >
          <Text style={styles.selectedTitle}>{t('staffInformation.save')}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default StaffInformationScreen;
