import { Icon } from '@rneui/themed';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';

import { TickButton } from '../../../../assets';
import { Button, Input, Select, Text } from '../../../../components';
import {
  clearDistricts,
  clearWards,
  createBasicInformation,
  getDistricts,
  getProvinces,
  getWards,
  selectCommon,
  selectPosts,
} from '../../../../features';
import { dispatchThunk } from '../../../../utils';
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

const initInfo = {
  real_estate_type_id: '',
  project_id: '',
  address_detail: '',
  province_id: null,
  district_id: null,
  ward_id: null,
  street_id: null,
  longitude: 0,
  latitude: 0,
};

const BasicInformation = forwardRef((props, ref) => {
  const { t } = useTranslation();
  const { basicInformation } = useSelector(selectPosts);
  const [isBuy, setIsBuy] = useState(1);
  const dispatch = useDispatch();
  const { provinces, districts, wards, street } = useSelector(selectCommon);

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
  const emptyStreetNames = {
    label: t('select.ward'),
    value: null,
  };

  const provinceOptions = [emptyProvinceOption, ...provinces];
  const districtOptions = [emptyDistrictOption, ...districts];
  const wardOptions = [emptyWardOption, ...wards];
  const streetNamesOptions = [emptyStreetNames, ...street];

  const { control, setValue, getValues, reset } = useForm({
    defaultValues: initInfo,
  });

  const fetchDistricts = (params, callback) =>
    dispatchThunk(dispatch, getDistricts(params), callback);

  const fetchWards = params => dispatchThunk(dispatch, getWards(params));

  const refresh = async () => {
    const { province_id, district_id } = basicInformation?.data;
    await Promise.all([
      dispatchThunk(dispatch, getProvinces()),
      province_id &&
        fetchDistricts({
          province_code: province_id,
        }),

      province_id &&
        district_id &&
        fetchWards({
          province_code: province_id,
          district_code: district_id,
        }),
    ]);
  };

  useEffect(() => {
    refresh();
  }, []);

  useEffect(() => {
    Object.entries(basicInformation?.data).forEach(
      ([key, value]) => value && setValue(key, value)
    );
  }, [basicInformation?.data, setValue]);

  const handleSelectProvince = selectedItem => {
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

  const handleSelectDistrict = selectedItem => {
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

  const onRegionChangeComplete = value => {
    console.log(
      '🚀 ~ file: index.js:42 ~ onRegionChangeComplete ~ value:',
      value
    );
  };

  const handleNext = () => {
    const value = getValues();
    dispatchThunk(dispatch, createBasicInformation(value));
  };

  const clearForm = () => {
    reset();
  };

  useImperativeHandle(ref, () => ({ handleNext, clearForm }));

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
              outline
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
          name="project_id"
        />
      </View>
      <Input
        control={control}
        label={t('input.quickAddressEntry')}
        labelStyle={styles.inputLabel}
        rightIcon={<Icon name="search" />}
        name="search_address"
      />
      <View style={[styles.boxSelectAddress, { marginTop: -30 }]}>
        <Select
          buttonStyle={styles.select1}
          control={control}
          data={provinceOptions}
          defaultButtonText="Please Select"
          label={t('select.province')}
          labelStyle={styles.inputLabel}
          name="province_id"
          onSelect={handleSelectProvince}
        />
        <Select
          buttonStyle={styles.select1}
          control={control}
          data={districtOptions}
          defaultButtonText="Please Select"
          label={t('select.district')}
          labelStyle={styles.inputLabel}
          name="district_id"
          onSelect={handleSelectDistrict}
        />
      </View>
      <View style={styles.boxSelectAddress}>
        <Select
          buttonStyle={styles.select1}
          control={control}
          data={wardOptions}
          defaultButtonText="Please Select"
          label={t('select.ward')}
          labelStyle={styles.inputLabel}
          name="ward_id"
        />
        <Select
          buttonStyle={styles.select1}
          control={control}
          data={streetNamesOptions}
          defaultButtonText="Please Select"
          label={t('select.street')}
          labelStyle={styles.inputLabel}
          name="street_id"
        />
      </View>
      <Input
        control={control}
        label={t('input.specificAddress')}
        labelStyle={styles.inputLabel}
        name="address_detail"
        renderErrorMessage={false}
      />
      <Input
        control={control}
        label={t('input.locationOnMap')}
        name="lat_long"
        rightLabel={<Text style={styles.reset}>Đặt lại</Text>}
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
});

BasicInformation.displayName = 'BasicInformation';

export default BasicInformation;
