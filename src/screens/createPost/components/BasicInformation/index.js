import { Icon } from '@rneui/base';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import MapView, { MarkerAnimated, PROVIDER_GOOGLE } from 'react-native-maps';

import { TickButton } from '../../../../assets';
import { Button, Input, Select, Text } from '../../../../components';
import styles from './styles';

const buySell = [
  {
    key: 1,
    name: 'buy',
  },
  {
    key: 2,
    name: 'lease',
  },
];

const BasicInformation = () => {
  const { t } = useTranslation();
  const [isBuy, setIsBuy] = useState(1);
  const {
    control,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      real_estate_type_id: '',
      name: '',
      address_detail: '',
      province_id: null,
      district_id: null,
      ward_id: null,
      street_id: null,
      longitude: 0,
      latitude: 0,
    },
  });

  const onRegionChangeComplete = value => {
    console.log(
      '🚀 ~ file: index.js:42 ~ onRegionChangeComplete ~ value:',
      value
    );
  };
  return (
    <View>
      <Text style={styles.youWantCenter}>{t('common.youWant')}</Text>
      <View style={styles.boxType}>
        {buySell.map(item => (
          <View
            key={`buySell${item.key}`}
            style={styles.buySell}
          >
            <Button
              buttonStyle={styles.isBuy(item.key === isBuy)}
              onPress={() => setIsBuy(item.key)}
              title={t(`button.${item.name}`)}
              titleStyle={styles.txtType(item.key === isBuy)}
              type="outline"
            />
            {item?.key === isBuy && (
              <View style={styles.checked}>
                <TickButton />
              </View>
            )}
          </View>
        ))}
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <Select
          buttonStyle={styles.select}
          control={control}
          data={[{ value: 'sex', label: 'sex' }]}
          defaultButtonText="Please Select"
          label={t('select.realEstateType')}
          labelStyle={styles.inputLabel}
          name="real_estate_type_id"
        />
        <Select
          buttonStyle={styles.select}
          control={control}
          data={[{ value: 'sex', label: 'sex' }]}
          defaultButtonText="Please Select"
          label={t('select.nameProject')}
          labelStyle={styles.inputLabel}
          name="name"
        />
      </View>
      <Input
        autoComplete="tel"
        control={control}
        inputMode="numeric"
        isNumeric
        label={t('input.quickAddressEntry')}
        labelStyle={styles.inputLabel}
        name="address_detail"
      />
      <View style={[styles.boxSelectAddress, { marginTop: -30 }]}>
        <Select
          buttonStyle={styles.select1}
          control={control}
          data={[{ value: 'sex', label: 'sex' }]}
          defaultButtonText="Please Select"
          label={t('select.province')}
          labelStyle={styles.inputLabel}
          name="province_id"
        />
        <Select
          buttonStyle={styles.select1}
          control={control}
          data={[{ value: 'sex', label: 'sex' }]}
          defaultButtonText="Please Select"
          label={t('select.district')}
          labelStyle={styles.inputLabel}
          name="district_id"
        />
      </View>
      <View style={styles.boxSelectAddress}>
        <Select
          buttonStyle={styles.select1}
          control={control}
          data={[{ value: 'sex', label: 'sex' }]}
          defaultButtonText="Please Select"
          label={t('select.ward')}
          labelStyle={styles.inputLabel}
          name="ward_id"
        />
        <Select
          buttonStyle={styles.select1}
          control={control}
          data={[{ value: 'sex', label: 'sex' }]}
          defaultButtonText="Please Select"
          label={t('select.street')}
          labelStyle={styles.inputLabel}
          name="type_estate"
        />
      </View>
      <Input
        control={control}
        label={t('input.specificAddress')}
        labelStyle={styles.inputLabel}
        name="specific_address"
      />
      <Input
        control={control}
        label={t('input.locationOnMap')}
        labelStyle={styles.inputLabel}
        name="lat_long"
      />
      <View style={styles.containerMaps}>
        <MapView
          style={styles.map}
          region={{
            latitude: 21.0227523,
            longitude: 105.9530334,
            latitudeDelta: 0.5,
            longitudeDelta: 0.21,
          }}
          onRegionChangeComplete={onRegionChangeComplete}
        />
      </View>
    </View>
  );
};

export default BasicInformation;
