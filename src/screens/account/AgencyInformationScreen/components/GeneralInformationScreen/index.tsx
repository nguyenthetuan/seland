import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {
  Button,
  Container,
  Input,
  Select,
  Text,
} from '../../../../../components';
import { Avatar, Icon } from '@rneui/themed';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
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
import { COLORS } from '../../../../../constants';
import UploadImage from '../../../CollaboratorInformationScreen/components/UploadImage';
import styles from './styles';

const GeneralInformationScreen = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const {
    clearErrors,
    control,
    formState: { errors },
    getValues,
    handleSubmit,
    setValue,
  } = useForm({
    defaultValues: {
      ward_id: null,
      district_id: null,
      province_id: null,
      businessLicenseCard: '',
    },
  });

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
    <ScrollView style={styles.container}>
      {/* <Text>GeneralInformationScreen</Text> */}
      <Container>
        <Avatar
          containerStyle={styles.boxAvatar}
          icon={<Icon name="photo-camera" />}
          renderPlaceholderContent={<Text style={styles.text}>Q</Text>}
          rounded
          size={120}
        >
          <Avatar.Accessory
            name="photo-camera"
            size={30}
          />
        </Avatar>
      </Container>

      <View style={styles.form}>
        <Text style={styles.label}>{t('common.companyInformation')}</Text>

        <Input
          errorStyle={styles.errorStyle}
          control={control}
          // errorMessage={errors.name?.message}
          label={t('input.companyName') || ''}
          labelStyle={styles.inputLabel}
          name="companyName"
          required
        />

        <Input
          errorStyle={styles.errorStyle}
          control={control}
          // errorMessage={errors.name?.message}
          label={t('input.presentativeName') || ''}
          labelStyle={styles.inputLabel}
          name="presentativeName"
          required
        />

        <Input
          errorStyle={styles.errorStyle}
          control={control}
          // errorMessage={errors.name?.message}
          label={t('input.companyAddress') || ''}
          labelStyle={styles.inputLabel}
          name="companyAddress"
          required
        />

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

        <Input
          errorStyle={styles.errorStyle}
          control={control}
          // errorMessage={errors.name?.message}
          label={t('input.phoneNumber') || ''}
          labelStyle={styles.inputLabel}
          name="phoneNumber"
          isNumeric
          required
        />

        <Input
          errorStyle={styles.errorStyle}
          control={control}
          // errorMessage={errors.name?.message}
          label={t('input.taxCode') || ''}
          labelStyle={styles.inputLabel}
          name="taxCode"
          isNumeric
          required
        />

        <UploadImage
          label={t('collaboratorInformation.businessLicenseCard')}
          required={true}
          control={control}
          name="businessLicenseCard"
          setValue={setValue}
        />

        <Button
          buttonStyle={styles.buttonSave}
          // loading={loading}
          onPress={() => {}}
          title={t('button.save')}
        />
      </View>
    </ScrollView>
  );
};

export default GeneralInformationScreen;
