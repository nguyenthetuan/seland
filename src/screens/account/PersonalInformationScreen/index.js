import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Icon } from '@rneui/themed';
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
  clearCompanyDistricts,
  // clearCompanyWards,
  clearDistricts,
  // clearWards,
  getCompanyDistricts,
  getCompanyProvinces,
  // getCompanyWards,
  getDistricts,
  getProfile,
  getProvinces,
  // getWards,
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

  const emptyProvinceOption = {
    label: t('select.province'),
    value: null,
  };
  const emptyDistrictOption = {
    label: t('select.district'),
    value: null,
  };
  //  const emptyWardOption = {
  //   label: t('select.ward'),
  //   value: null
  // }

  const provinceOptions = [emptyProvinceOption, ...provinces];
  const districtOptions = [emptyDistrictOption, ...districts];
  // const wardOptions = [emptyWardOption, ...wards];
  const companyProvinceOptions = [emptyProvinceOption, ...companyProvinces];
  const companyDistrictOptions = [emptyDistrictOption, ...companyDistricts];
  // const wardOptions = [emptyWardOption, ...companyWards];

  const {
    clearErrors,
    control,
    formState: { errors },
    // getValues,
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

  // const fetchWards = params => dispatchThunk(dispatch, getWards(params));

  const fetchCompanyDistricts = (params, callback) =>
    dispatchThunk(dispatch, getCompanyDistricts(params), callback);

  // const fetchCompanyWards = params =>
  //   dispatchThunk(dispatch, getCompanyWards(params));

  const refresh = async () => {
    const {
      province_id,
      // district_id,
      company_province_id,
      // company_district_id,
    } = user;
    await Promise.all([
      dispatchThunk(dispatch, getProfile()),
      dispatchThunk(dispatch, getProvinces()),
      province_id &&
        fetchDistricts({
          province_code: province_id,
        }),
      // province_id &&
      //   district_id &&
      //   fetchWards({
      //     province_code: province_id,
      //     district_code: district_id,
      //   }),
      dispatchThunk(dispatch, getCompanyProvinces()),
      company_province_id &&
        fetchCompanyDistricts({
          province_code: company_province_id,
        }),
      // company_province_id &&
      //   company_district_id &&
      //   fetchCompanyWards({
      //     province_code: company_province_id,
      //     district_code: company_district_id,
      //   }),
    ]);
  };

  useEffect(() => {
    refresh();
  }, []);

  useEffect(() => {
    Object.entries(user).forEach(
      ([key, value]) =>
        value &&
        setValue(
          key,
          key === 'birthday'
            ? value.slice(3, 6) + value.slice(0, 3) + value.slice(-4)
            : value
        )
    );
  }, [user, setValue]);

  const handleSelectProvince = selectedItem => {
    setValue('district_id', null);
    // setValue('ward_id', null);

    const { value } = selectedItem;

    if (value) {
      fetchDistricts({
        province_code: selectedItem.value,
      });
    } else {
      dispatch(clearDistricts());
      // dispatch(clearWards());
    }
  };

  // const handleSelectDistrict = selectedItem => {
  //   setValue('ward_id', null);

  //   const { value } = selectedItem;

  //   if (value) {
  //     fetchWards({
  //       province_code: getValues().province_id,
  //       district_code: selectedItem.value,
  //     });
  //   } else {
  //     dispatch(clearWards());
  //   }
  // };

  const handleSelectCompanyProvince = selectedItem => {
    setValue('company_district_id', null);
    // setValue('company_ward_id', null);

    const { value } = selectedItem;

    if (value) {
      fetchCompanyDistricts({
        province_code: selectedItem.value,
      });
    } else {
      dispatch(clearCompanyDistricts());
      // dispatch(clearCompanyWards());
    }
  };

  // const handleSelectCompanyDistrict = selectedItem => {
  //   setValue('company_ward_id', null);

  //   const { value } = selectedItem;

  //   if (value) {
  //     fetchCompanyWards({
  //       province_code: getValues().company_province_id,
  //       district_code: selectedItem.value,
  //     });
  //   } else {
  //     dispatch(clearCompanyWards());
  //   }
  // };

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
                  outline
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
          labelStyle={styles.inputLabel}
          name="name"
          onFocus={() => clearErrors('name')}
          required
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
            labelStyle={styles.inputLabel}
            name="sex"
          />
        </View>
        <DateTimePicker
          labelStyle={styles.labelStyleDate}
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
          required
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
              data={provinceOptions}
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
              data={districtOptions}
              defaultButtonText={t('select.district')}
              disabled={loading}
              labelStyle={styles.inputLabel}
              name="district_id"
              // onSelect={handleSelectDistrict}
            />
          </View>
          {/* </View> */}
          {/* <Select
            buttonStyle={styles.select}
            control={control}
            data={wardOptions}
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
              data={companyProvinceOptions}
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
              data={companyDistrictOptions}
              defaultButtonText={t('select.district')}
              disabled={loading}
              labelStyle={styles.inputLabel}
              name="company_district_id"
              // onSelect={handleSelectCompanyDistrict}
            />
          </View>
          {/* </View> */}
          {/* <Select
            buttonStyle={styles.select}
            control={control}
            data={companyWardOptions}
            defaultButtonText={t('select.ward')}
            disabled={loading}
            labelStyle={styles.inputLabel}
            name="company_ward_id"
          /> */}
        </View>
        <View style={styles.taxCode}>
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
        </View>
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
