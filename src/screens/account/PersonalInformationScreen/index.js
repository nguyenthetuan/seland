import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import {
  Button,
  Container,
  DashedButton,
  DateTimePicker,
  Input,
  Screen,
  Select,
  Text,
} from '../../../components';
import { COLOR_BLUE_2 } from '../../../constants';
import { yup } from '../../../utils';

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

  return (
    <Screen>
      <Container>
        <Text
          style={{
            fontWeight: 'bold',
            marginVertical: 8,
          }}
        >
          Tôi là
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 8,
          }}
        >
          <View
            style={{
              flex: 1,
              marginRight: 8,
            }}
          >
            <Button title="Khách hàng" />
          </View>
          <View
            style={{
              flex: 1,
            }}
          >
            <Button title="Nhà đầu tư" />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 8,
          }}
        >
          <View
            style={{
              flex: 1,
              marginRight: 8,
            }}
          >
            <Button title="Chủ đất" />
          </View>
          <View
            style={{
              flex: 1,
            }}
          >
            <Button title="Môi giới" />
          </View>
        </View>
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
      <Text
        style={{
          fontWeight: 500,
          marginLeft: 8,
          marginVertical: 16,
        }}
      >
        Thông tin cá nhân
      </Text>
      <Input
        autoComplete="name"
        control={control}
        errorMessage={errors.name?.message}
        label={t('input.name')}
        name="name"
        onFocus={() => clearErrors('name')}
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
        />
        <DateTimePicker
          control={control}
          name="birthday"
        />
      </View>
      <Text
        style={{
          fontWeight: 500,
          marginLeft: 8,
          marginVertical: 16,
        }}
      >
        Thông tin liên hệ
      </Text>
      <Input
        autoComplete="tel"
        control={control}
        errorMessage={errors.phone_number?.message}
        inputMode="tel"
        isPhoneNumber
        label={t('input.phoneNumber')}
        name="phone_number"
        onFocus={() => clearErrors('phone_number')}
      />
      <Input
        autoComplete="email"
        control={control}
        errorMessage={errors.email?.message}
        inputMode="email"
        label={t('input.email')}
        name="email"
        onFocus={() => clearErrors('email')}
      />
      <Input
        control={control}
        errorMessage={errors.address?.message}
        label={t('input.address')}
        name="address"
        onFocus={() => clearErrors('address')}
      />
      <Text
        style={{
          fontWeight: 500,
          marginBottom: 16,
          marginLeft: 8,
        }}
      >
        Thông tin xuất hoá đơn
      </Text>
      <Input
        control={control}
        errorMessage={errors.name_company?.message}
        label={t('input.companyName')}
        name="name_company"
        onFocus={() => clearErrors('name_company')}
      />
      <Input
        control={control}
        errorMessage={errors.company_address?.message}
        label={t('input.address')}
        name="company_address"
        onFocus={() => clearErrors('company_address')}
      />
      <Input
        control={control}
        errorMessage={errors.tax_code?.message}
        label={t('input.taxCode')}
        name="tax_code"
        onFocus={() => clearErrors('tax_code')}
      />
      <Input
        control={control}
        errorMessage={errors.website?.message}
        label={t('input.website')}
        name="website"
        onFocus={() => clearErrors('website')}
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
  );
};

export default PersonalInformationScreen;
