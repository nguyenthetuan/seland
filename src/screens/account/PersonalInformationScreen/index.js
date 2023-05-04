import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Icon } from '@rneui/base';
import React, { useState } from 'react';
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
import {
  COLOR_BLUE_1,
  COLOR_BLUE_2,
  COLOR_GRAY_2,
  COLOR_GRAY_5,
  COLOR_WHITE,
} from '../../../constants';
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

  const onSubmit = data => console.log(data);

  const ListIAm = [
    {
      name: 'Khách hàng',
      key: 1,
    },
    {
      name: 'Nhà đầu từ',
      key: 2,
    },
    {
      name: 'Chủ đất',
      key: 3,
    },
    {
      name: 'Môi giới',
      key: 4,
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: COLOR_WHITE }}>
      <Header title="Thông tin cá nhân" />
      <Screen>
        <Container>
          <Avatar
            rounded
            icon={<Icon name="photo-camera" />}
            size={120}
            containerStyle={styles.boxAvatar}
            renderPlaceholderContent={
              <Text style={styles.text}>{user?.name.charAt(0)}</Text>
            }
          >
            <Avatar.Accessory
              size={30}
              name="photo-camera"
            />
          </Avatar>
          <Text
            style={{
              fontWeight: 'bold',
              marginVertical: 8,
            }}
          >
            Tôi là
          </Text>
          <FlatList
            data={ListIAm}
            numColumns={2}
            keyExtractor={item => `iam${item?.key}`}
            renderItem={({ item }) => (
              <View
                style={{
                  flex: 0.5,
                  marginHorizontal: 4,
                  marginBottom: 6,
                }}
              >
                <Button
                  title={item?.name}
                  type="outline"
                  titleStyle={{ color: COLOR_BLUE_1 }}
                  buttonStyle={{
                    borderWidth: 2,
                    borderColor:
                      item?.key === Iam ? COLOR_BLUE_2 : COLOR_GRAY_5,
                  }}
                  onPress={() => setIam(item.key)}
                />
                {item?.key === Iam ? (
                  <View style={{ position: 'absolute', right: 4, top: 4 }}>
                    <TickButton />
                  </View>
                ) : null}
              </View>
            )}
          />

          <Text
            style={{
              fontWeight: 'bold',
              marginVertical: 8,
            }}
          >
            Hạng tài khoản
          </Text>
          <View
            style={{
              alignItems: 'flex-end',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <DashedButton title="Tài khoản chuyên nghiệp" />
            <Text
              style={{
                color: COLOR_BLUE_2,
                fontSize: 14,
                lineHeight: 22,
                textAlign: 'right',
                textDecorationLine: 'underline',
              }}
            >
              Xem thêm gói tài khoản
            </Text>
          </View>
        </Container>
        <Text style={styles.label}>Thông tin cá nhân</Text>
        <Input
          autoComplete="name"
          control={control}
          errorMessage={errors.name?.message}
          label={t('input.name')}
          name="name"
          onFocus={() => clearErrors('name')}
          styleLabel={styles.inputLabel}
        />
        <View
          style={{
            marginHorizontal: 8,
          }}
        >
          <Select
            control={control}
            data={sexes}
            defaultButtonText="Please Select"
            label="Giới tính"
            name="sex"
            styleLabel={styles.inputLabel}
          />
        </View>

        <DateTimePicker
          styleLabel={styles.inputLabel}
          label="Ngày sinh"
          control={control}
          name="birthday"
        />
        <Text style={styles.label}>Thông tin liên hệ</Text>
        <Input
          autoComplete="tel"
          control={control}
          errorMessage={errors.phone_number?.message}
          inputMode="tel"
          isPhoneNumber
          label={t('input.phoneNumber')}
          name="phone_number"
          onFocus={() => clearErrors('phone_number')}
          styleLabel={styles.inputLabel}
        />
        <Input
          autoComplete="email"
          control={control}
          errorMessage={errors.email?.message}
          inputMode="email"
          label={t('input.email')}
          name="email"
          onFocus={() => clearErrors('email')}
          styleLabel={styles.inputLabel}
        />
        <Input
          control={control}
          errorMessage={errors.address?.message}
          label={t('input.address')}
          name="address"
          onFocus={() => clearErrors('address')}
          styleLabel={styles.inputLabel}
        />
        <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
          <Select
            control={control}
            data={[
              {
                label: 'Tỉnh/thành phố',
                value: 1,
              },
            ]}
            defaultButtonText="Tỉnh/thành phố"
            name="sex"
            styleLabel={styles.inputLabel}
          />
          <View style={{ width: 6, height: 10 }} />
          <Select
            control={control}
            data={[
              {
                label: 'Quận/huyện',
                value: 1,
              },
            ]}
            defaultButtonText="Quận/huyện"
            name="sex"
            styleLabel={styles.inputLabel}
          />
          <View style={{ width: 6, height: 10 }} />
          <Select
            control={control}
            data={[
              {
                label: 'Phường/xã',
                value: 1,
              },
            ]}
            defaultButtonText="Phường/xã"
            name="sex"
            styleLabel={styles.inputLabel}
          />
        </View>
        <Text style={styles.label}>Thông tin xuất hoá đơn</Text>
        <Input
          control={control}
          errorMessage={errors.name_company?.message}
          label={t('input.companyName')}
          name="name_company"
          onFocus={() => clearErrors('name_company')}
          styleLabel={styles.inputLabel}
        />
        <Input
          control={control}
          errorMessage={errors.company_address?.message}
          label={t('input.address')}
          name="company_address"
          onFocus={() => clearErrors('company_address')}
          styleLabel={styles.inputLabel}
        />
        <Input
          control={control}
          errorMessage={errors.tax_code?.message}
          label={t('input.taxCode')}
          name="tax_code"
          onFocus={() => clearErrors('tax_code')}
          styleLabel={styles.inputLabel}
        />
        <Input
          control={control}
          errorMessage={errors.website?.message}
          label={t('input.website')}
          name="website"
          onFocus={() => clearErrors('website')}
          styleLabel={styles.inputLabel}
        />
        <Button
          buttonStyle={{
            marginHorizontal: 8,
            marginTop: 24,
          }}
          onPress={handleSubmit(onSubmit)}
          title={t('button.save')}
        />
      </Screen>
    </View>
  );
};

export default PersonalInformationScreen;
