import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Icon } from '@rneui/base';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';

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
import { selectUser } from '../../../features';
import { yup } from '../../../utils';
import styles from './styles';

const schema = yup.object({
  name: yup.string().isValidName(),
  sex: yup.number(),
  birthday: yup.string(),
  phone_number: yup.string().isValidPhoneNumber(),
  email: yup.string().email(),
  address: yup.string().isValidAddress(),
  ward_id: yup.number(),
  district_id: yup.number(),
  province_id: yup.number(),
  name_company: yup.string().isValidCompanyName(),
  company_address: yup.string().isValidAddress(),
  tax_code: yup.string().isValidTaxCode(),
  website: yup.string().isValidWebsite(),
});

const PersonalInformationScreen = () => {
  const { t } = useTranslation();
  const { user } = useSelector(selectUser);
  const [Iam, setIam] = useState(1);

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
      label: 'Nam',
      value: 1,
    },
    {
      label: 'Nữ',
      value: 2,
    },
  ];

  const {
    clearErrors,
    control,
    formState: { errors },
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
      tax_code: '',
      website: '',
    },
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (user) {
      setValue('name', user.name);
      setValue('phone_number', user.phone_number);
      setValue('email', user.email);
      setValue('website', user.website);
    }
  }, [user, setValue]);

  const onSubmit = data => console.log(data);

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
          errorMessage={errors.name?.message}
          label={t('input.name')}
          name="name"
          onFocus={() => clearErrors('name')}
          labelStyle={styles.inputLabel}
        />
        <View style={styles.sex}>
          <Select
            control={control}
            data={sexes}
            defaultButtonText="Please Select"
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
          disabled={user?.is_phone_verified === 1}
          errorMessage={errors.phone_number?.message}
          inputMode="tel"
          isPhoneNumber
          label={t('input.phoneNumber')}
          name="phone_number"
          onFocus={() => clearErrors('phone_number')}
          labelStyle={styles.inputLabel}
        />
        <Input
          autoComplete="email"
          control={control}
          errorMessage={errors.email?.message}
          inputMode="email"
          label={t('input.email')}
          name="email"
          onFocus={() => clearErrors('email')}
          labelStyle={styles.inputLabel}
        />
        <Input
          control={control}
          errorMessage={errors.address?.message}
          label={t('input.address')}
          name="address"
          onFocus={() => clearErrors('address')}
          labelStyle={styles.inputLabel}
        />
        <View style={styles.address}>
          <Select
            control={control}
            data={[
              {
                label: 'Tỉnh/thành phố',
                value: 1,
              },
            ]}
            defaultButtonText={t('select.province')}
            labelStyle={styles.inputLabel}
            name="province_id"
          />
          <View style={styles.addressMiddle}>
            <Select
              control={control}
              data={[
                {
                  label: 'Quận/huyện',
                  value: 1,
                },
              ]}
              defaultButtonText={t('select.district')}
              labelStyle={styles.inputLabel}
              name="district_id"
            />
          </View>
          <Select
            control={control}
            data={[
              {
                label: 'Phường/xã',
                value: 1,
              },
            ]}
            defaultButtonText={t('select.ward')}
            labelStyle={styles.inputLabel}
            name="ward_id"
          />
        </View>
        <Text style={styles.label}>{t('common.invoiceInformation')}</Text>
        <Input
          control={control}
          errorMessage={errors.name_company?.message}
          label={t('input.companyName')}
          labelStyle={styles.inputLabel}
          name="name_company"
          onFocus={() => clearErrors('name_company')}
        />
        <Input
          control={control}
          errorMessage={errors.company_address?.message}
          label={t('input.address')}
          labelStyle={styles.inputLabel}
          name="company_address"
          onFocus={() => clearErrors('company_address')}
        />
        <Input
          control={control}
          errorMessage={errors.tax_code?.message}
          label={t('input.taxCode')}
          labelStyle={styles.inputLabel}
          name="tax_code"
          onFocus={() => clearErrors('tax_code')}
        />
        <Input
          control={control}
          errorMessage={errors.website?.message}
          label={t('input.website')}
          labelStyle={styles.inputLabel}
          name="website"
          onFocus={() => clearErrors('website')}
        />
        <Button
          buttonStyle={styles.button}
          onPress={handleSubmit(onSubmit)}
          title={t('button.save')}
        />
      </Screen>
    </View>
  );
};

export default PersonalInformationScreen;
