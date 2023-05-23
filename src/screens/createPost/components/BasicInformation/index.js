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
  getAllInformation,
  getDistricts,
  getProvinces,
  getWards,
  selectCommon,
  selectPosts,
} from '../../../../features';
import { dispatchThunk } from '../../../../utils';
import { formatDataNameId, formatDataValueId } from '../../CreatePostScreen';
import styles from './styles';

const initInfo = {
  real_estate_type_id: 0,
  project_id: 0,
  address_detail: '',
  province_id: null,
  district_id: null,
  ward_id: null,
  street_id: null,
  lat_long: `${21.0227523}, ${105.9530334}`,
};

const BasicInformation = forwardRef((props, ref) => {
  const { t } = useTranslation();
  const { basicInformation, realEstateType, projects, demands } =
    useSelector(selectPosts);
  const [isBuy, setIsBuy] = useState(basicInformation?.demand_id || 1);
  const dispatch = useDispatch();
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
  const emptyRealEstateType = {
    label: t('select.realEstateType'),
    value: null,
  };
  const emptyProject = {
    label: t('select.nameProject'),
    value: null,
  };

  const provinceOptions = [emptyProvinceOption, ...provinces];
  const districtOptions = [emptyDistrictOption, ...districts];
  const wardOptions = [emptyWardOption, ...wards];
  const realEstateTypeOptions = [
    emptyRealEstateType,
    ...formatDataValueId(realEstateType),
  ];
  const projectOptions = [emptyProject, ...formatDataNameId(projects)];

  const { control, setValue, getValues, reset } = useForm({
    defaultValues: initInfo,
  });

  const fetchDistricts = (params, callback) =>
    dispatchThunk(dispatch, getDistricts(params), callback);

  const fetchWards = params => dispatchThunk(dispatch, getWards(params));

  const refresh = async () => {
    const { province_id, district_id } = basicInformation;
    dispatchThunk(dispatch, getAllInformation());
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
    Object.entries(basicInformation).forEach(
      ([key, value]) => value && setValue(key, value)
    );
  }, [basicInformation, setValue]);

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
    setValue('lat_long', `${value?.latitude}, ${value?.longitude}`);
  };

  const handleReset = () => {
    setValue('lat_long', `${21.0227523}, ${105.9530334}`);
  };

  const handleNext = () => {
    const value = getValues();
    dispatchThunk(
      dispatch,
      createBasicInformation({
        ...value,
        demand_id: isBuy,
      })
    );
  };

  const clearForm = () => {
    reset();
  };

  useImperativeHandle(ref, () => ({ handleNext, clearForm }));

  return (
    <View>
      <Text style={styles.youWantCenter}>{t('common.youWant')}</Text>
      <View style={styles.boxType}>
        {demands.map(item => (
          <View
            key={`buySell${item.id}`}
            style={styles.buySell}
          >
            <Button
              buttonStyle={styles.isBuy(item.id === isBuy)}
              onPress={() => setIsBuy(item.id)}
              title={item.value}
              titleStyle={styles.txtType(item.id === isBuy)}
              outline
            />
            {item?.id === isBuy && (
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
          data={realEstateTypeOptions}
          defaultButtonText="Please Select"
          label={t('select.realEstateType')}
          labelStyle={styles.inputLabel}
          name="real_estate_type_id"
        />
        <Select
          buttonStyle={styles.select}
          control={control}
          data={projectOptions}
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
        rightLabel={
          <Text
            style={styles.reset}
            onPress={handleReset}
          >
            Đặt lại
          </Text>
        }
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
