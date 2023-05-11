import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Icon } from '@rneui/base';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { TickButton } from '../../../assets';
import {
  Button,
  Container,
  DashedButton,
  DateTimePicker,
  Header,
  Input,
  Screen,
  Select,
  Text,
} from '../../../components';
import {
  getCompanyDistricts,
  getCompanyProvinces,
  getCompanyWards,
  getDistricts,
  getProvinces,
  getWards,
  selectCommon,
  selectUser,
  updateProfile,
} from '../../../features';
import { dispatchThunk, yup } from '../../../utils';
import styles from './styles';

const schema = yup.object({
  name: yup.string().isValidName(),
  sex: yup.number().nullable(),
  birthday: yup.string().nullable(),
  phone_number: yup.string().isValidPhoneNumber(),
  email: yup.string().nullable().isValidEmail(),
  address: yup.string().nullable().isValidAddress(),
  ward_id: yup.number().nullable(),
  district_id: yup.number().nullable(),
  province_id: yup.string().nullable(),
  name_company: yup.string().nullable().isValidCompanyName(),
  company_address: yup.string().nullable().isValidAddress(),
  tax_code: yup.string().nullable().isValidTaxCode(),
  website: yup.string().nullable().isValidWebsite(),
});

const PersonalInformationScreen = () => {
  const dispatch = useDispatch();
  const { loading, data: user } = useSelector(selectUser);
  const { t } = useTranslation();
  const [Iam, setIam] = useState(user.user_type_id || 1);

  const {
    provinces,
    districts,
    // wards,
    companyProvinces,
    companyDistricts,
    // companyWards,
  } = useSelector(selectCommon);

  const Iams = [
    {
      key: 1,
      name: 'customer',
    },
    {
      key: 2,
      name: 'investor',
    },
    {
      key: 3,
      name: 'landlord',
    },
    {
      key: 4,
      name: 'broker',
    },
  ];

  const sexes = [
    {
      label: 'male',
      value: 1,
    },
    {
      label: 'female',
      value: 2,
    },
  ];

  const {
    clearErrors,
    control,
    formState: { errors },
    getValues,
    handleSubmit,
    setValue,
  } = useForm({
    defaultValues: {
      name: '',
      sex: null,
      birthday: '',
      phone_number: '',
      email: '',
      address: '',
      ward_id: null,
      district_id: null,
      province_id: null,
      name_company: '',
      company_address: '',
      company_ward_id: null,
      company_district_id: null,
      company_province_id: null,
      tax_code: '',
      website: '',
    },
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const fetchDistricts = (params, callback) =>
    dispatchThunk(dispatch, getDistricts(params), callback);

  const fetchWards = params => dispatchThunk(dispatch, getWards(params));

  const fetchCompanyDistricts = (params, callback) =>
    dispatchThunk(dispatch, getCompanyDistricts(params), callback);

  const fetchCompanyWards = params =>
    dispatchThunk(dispatch, getCompanyWards(params));

  const refresh = async () => {
    await dispatchThunk(dispatch, getProvinces(), async () => {
      const { district_id, province_id } = user;
      if (province_id) {
        await fetchDistricts(
          {
            province_code: province_id,
          },
          async () => {
            if (district_id) {
              await fetchWards({
                province_code: province_id,
                district_code: district_id,
              });
            }
          }
        );
      }
    });
    await dispatchThunk(dispatch, getCompanyProvinces(), async () => {
      const { company_district_id, company_province_id } = user;
      if (company_province_id) {
        await fetchCompanyDistricts(
          {
            province_code: company_province_id,
          },
          async () => {
            if (company_district_id) {
              await fetchCompanyWards({
                province_code: company_province_id,
                district_code: company_district_id,
              });
            }
          }
        );
      }
    });
    Object.entries(user).forEach(([key, value]) => setValue(key, value));
  };

  useEffect(() => {
    refresh();
  }, []);

  const handleSelectProvince = selectedItem =>
    fetchDistricts({
      province_code: selectedItem.value,
    });

  const handleSelectDistrict = selectedItem =>
    fetchWards({
      province_code: getValues().province_id,
      district_code: selectedItem.value,
    });

  const handleSelectCompanyProvince = selectedItem =>
    fetchCompanyDistricts({
      province_code: selectedItem.value,
    });

  const handleSelectCompanyDistrict = selectedItem =>
    fetchCompanyWards({
      province_code: getValues().company_province_id,
      district_code: selectedItem.value,
    });

  const onSubmit = data => {
    dispatchThunk(
      dispatch,
      updateProfile({
        ...data,
        id: user.id,
        user_type_id: Iam,
        name: data.name.trim(),
        address: data.address.trim(),
        name_company: data.name_company.trim(),
        company_address: data.company_address.trim(),
      })
    );
  };

  return (
    <View style={styles.container}>
      <Header title={t('header.personalInformation')} />
      <Screen>
        <Container>
          <Avatar
            containerStyle={styles.boxAvatar}
            icon={<Icon name="photo-camera" />}
            renderPlaceholderContent={
              <Text style={styles.text}>{user?.name?.charAt(0)}</Text>
            }
            rounded
            size={120}
          >
            <Avatar.Accessory
              name="photo-camera"
              size={30}
            />
          </Avatar>
          <Text style={styles.mainLabel}>{t('common.iam')}</Text>
          <FlatList
            data={Iams}
            keyExtractor={item => `iam${item.key}`}
            numColumns={2}
            renderItem={({ item }) => (
              <View style={styles.iamButtonContainer}>
                <Button
                  buttonStyle={styles.iamButton(item.key === Iam)}
                  onPress={() => setIam(item.key)}
                  title={t(`button.${item.name}`)}
                  titleStyle={styles.iamButtonTitle}
                  type="outline"
                />
                {item?.key === Iam && (
                  <View style={styles.checked}>
                    <TickButton />
                  </View>
                )}
              </View>
            )}
          />
          <Text style={styles.mainLabel}>{t('common.accountRank')}</Text>
          <View style={styles.accountRank}>
            <DashedButton title={t('common.professionalAccount')} />
            <Text style={styles.viewMoreAccountPackages}>
              {t('common.viewMoreAccountPackages')}
            </Text>
          </View>
        </Container>
        <Text style={styles.label}>{t('common.personalInformation')}</Text>
        <Input
          autoComplete="name"
          control={control}
          disabled={loading}
          errorMessage={errors.name?.message}
          label={t('input.name')}
          name="name"
          onFocus={() => clearErrors('name')}
          labelStyle={styles.inputLabel}
        />
        <View style={styles.sex}>
          <Select
            buttonStyle={styles.select}
            control={control}
            data={sexes.map(sex => ({
              ...sex,
              label: t(`select.${sex.label}`),
            }))}
            defaultButtonText="Please Select"
            disabled={loading}
            label={t('select.sex')}
            name="sex"
            labelStyle={styles.inputLabel}
          />
        </View>
        <DateTimePicker
          labelStyle={styles.inputLabel}
          label="Ngày sinh"
          control={control}
          name="birthday"
        />
        <Text style={styles.label}>{t('common.contactInformation')}</Text>
        <Input
          autoComplete="tel"
          control={control}
          disabled
          errorMessage={errors.phone_number?.message}
          inputMode="numeric"
          isNumeric
          label={t('input.phoneNumber')}
          labelStyle={styles.inputLabel}
          name="phone_number"
          onFocus={() => clearErrors('phone_number')}
        />
        <Input
          autoComplete="email"
          control={control}
          disabled={loading}
          errorMessage={errors.email?.message}
          inputMode="email"
          isEmail
          label={t('input.email')}
          labelStyle={styles.inputLabel}
          name="email"
          onFocus={() => clearErrors('email')}
        />
        <Input
          control={control}
          disabled={loading}
          errorMessage={errors.address?.message}
          label={t('input.address')}
          labelStyle={styles.inputLabel}
          name="address"
          onFocus={() => clearErrors('address')}
        />
        <View style={styles.address}>
          <View style={styles.addressItem}>
            <Select
              buttonStyle={styles.select}
              control={control}
              data={provinces}
              defaultButtonText={t('select.province')}
              disabled={loading}
              labelStyle={styles.inputLabel}
              name="province_id"
              onSelect={handleSelectProvince}
            />
          </View>
          {/* <View style={styles.addressMiddle}> */}
          <View style={styles.addressItem}>
            <Select
              buttonStyle={styles.select}
              control={control}
              data={districts}
              defaultButtonText={t('select.district')}
              disabled={loading}
              labelStyle={styles.inputLabel}
              name="district_id"
              onSelect={handleSelectDistrict}
            />
          </View>
          {/* </View> */}
          {/* <Select
            buttonStyle={styles.select}
            control={control}
            data={wards}
            defaultButtonText={t('select.ward')}
            disabled={loading}
            labelStyle={styles.inputLabel}
            name="ward_id"
          /> */}
        </View>
        <Text style={styles.label}>{t('common.invoiceInformation')}</Text>
        <Input
          control={control}
          disabled={loading}
          errorMessage={errors.name_company?.message}
          label={t('input.companyName')}
          labelStyle={styles.inputLabel}
          name="name_company"
          onFocus={() => clearErrors('name_company')}
        />
        <Input
          control={control}
          disabled={loading}
          errorMessage={errors.company_address?.message}
          label={t('input.address')}
          labelStyle={styles.inputLabel}
          name="company_address"
          onFocus={() => clearErrors('company_address')}
        />
        <View style={styles.address}>
          <View style={styles.addressItem}>
            <Select
              buttonStyle={styles.select}
              control={control}
              data={companyProvinces}
              defaultButtonText={t('select.province')}
              disabled={loading}
              labelStyle={styles.inputLabel}
              name="company_province_id"
              onSelect={handleSelectCompanyProvince}
            />
          </View>
          {/* <View style={styles.addressMiddle}> */}
          <View style={styles.addressItem}>
            <Select
              buttonStyle={styles.select}
              control={control}
              data={companyDistricts}
              defaultButtonText={t('select.district')}
              disabled={loading}
              labelStyle={styles.inputLabel}
              name="company_district_id"
              onSelect={handleSelectCompanyDistrict}
            />
          </View>
          {/* </View> */}
          {/* <Select
            buttonStyle={styles.select}
            control={control}
            data={companyWards}
            defaultButtonText={t('select.ward')}
            disabled={loading}
            labelStyle={styles.inputLabel}
            name="company_ward_id"
          /> */}
        </View>
        <Input
          control={control}
          disabled={loading}
          errorMessage={errors.tax_code?.message}
          inputMode="numeric"
          label={t('input.taxCode')}
          labelStyle={styles.inputLabel}
          name="tax_code"
          onFocus={() => clearErrors('tax_code')}
        />
        <Input
          control={control}
          disabled={loading}
          errorMessage={errors.website?.message}
          isWebsite
          label={t('input.website')}
          labelStyle={styles.inputLabel}
          name="website"
          onFocus={() => clearErrors('website')}
        />
        <Button
          buttonStyle={styles.button}
          loading={loading}
          onPress={handleSubmit(onSubmit)}
          title={t('button.save')}
        />
      </Screen>
    </View>
  );
};

export default PersonalInformationScreen;
