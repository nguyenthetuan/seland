import { Icon } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { Control } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import MapView, { Marker } from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';

import { TickButton } from '../../../../assets';
import { Button, Input, Select, Text } from '../../../../components';
import { COLORS } from '../../../../constants';
import {
  clearDistricts,
  clearWards,
  getDistricts,
  getProvinces,
  getWards,
  selectCommon,
  selectPosts,
} from '../../../../features';
import { dispatchThunk } from '../../../../utils';
import { formatDataNameId, formatDataValueId } from '../../CreatePostScreen';
import styles from './styles';
import {
  isYear,
  validateApartmentCode,
  validateFormatYear,
} from '../../../../utils/validates';

interface BasicInformationProps {
  control?: Control;
  setValue?: Function;
  getValues?: Function;
}

const BasicInformation: React.FC<BasicInformationProps> = ({
  control,
  setValue,
  getValues,
}) => {
  const { t } = useTranslation();
  const { realEstateType, projects, demands } = useSelector(selectPosts);
  const [latLong, setLatLong] = useState({
    lat: 21.0227523,
    long: 105.9530334,
  });
  const [isBuy, setIsBuy] = useState(
    (getValues && getValues()?.demand_id) || 1
  );
  const [showInfoApartmentBuilding, setShowInfoApartmentBuilding] =
    useState<boolean>(
      getValues && getValues()?.real_estate_type_id === 3 ? true : false
    );
  const dispatch = useDispatch();
  const { provinces, districts, wards } = useSelector(selectCommon);

  const emptyProject = {
    label: t('select.nameProject'),
    value: null,
  };

  const projectOptions = [emptyProject, ...formatDataNameId(projects)];

  const fetchDistricts = (params: any, callback?: Function) =>
    dispatchThunk(dispatch, getDistricts(params), callback);

  const fetchWards = (params: any) => dispatchThunk(dispatch, getWards(params));

  const refresh = async () => {
    const { province_id, district_id } = getValues && getValues();
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

  const handleSelectRealEstateType = (value: { value?: number }) => {
    if (value?.value === 3) {
      setShowInfoApartmentBuilding(true);
    } else {
      setShowInfoApartmentBuilding(false);
    }
  };

  const handleSelectProvince = (selectedItem: {
    value: number;
    label?: string;
  }) => {
    setValue && setValue('district_id', null);
    setValue && setValue('ward_id', null);

    const { value } = selectedItem;

    if (value) {
      setValue && setValue('address_detail', selectedItem.label);
      fetchDistricts({
        province_code: value,
      });
    } else {
      dispatch(clearDistricts());
      dispatch(clearWards());
    }
  };

  const handleSelectDistrict = (selectedItem: {
    value: number;
    label: string;
  }) => {
    setValue && setValue('ward_id', null);
    const { value } = selectedItem;
    const address_detail = getValues && getValues().address_detail;
    if (value) {
      const address_detail_array = address_detail?.split(',');

      setValue &&
        setValue(
          'address_detail',
          `${selectedItem.label}, ${address_detail_array[0]}`
        );
      fetchWards({
        province_code: getValues && getValues().province_id,
        district_code: value,
      });
    } else {
      dispatch(clearWards());
    }
  };

  const handleSelectWardId = (selectedItem: {
    value: number;
    label: string;
  }) => {
    const { value } = selectedItem;
    const address_detail = getValues && getValues().address_detail;
    if (value) {
      const address_detail_array = address_detail?.split(',');
      setValue &&
        setValue(
          'address_detail',
          `${
            selectedItem.label
          }, ${address_detail_array[1]?.trim()}, ${address_detail_array[0]?.trim()}`
        );
    } else {
      dispatch(clearWards());
    }
  };

  const onRegionChangeComplete = (value: {
    latitude: number | string;
    longitude: number | string;
  }) => {
    setLatLong({
      lat: value?.latitude,
      long: value?.longitude,
    });
    setValue && setValue('lat_long', `${value?.latitude}, ${value?.longitude}`);
  };

  const handleReset = () => {
    setValue && setValue('lat_long', `${21.0227523}, ${105.9530334}`);
  };

  const validateFormatHandorverYear = (value: string) => {
    const { year_built } = getValues && getValues();
    if (value) {
      if (!isYear(value)) {
        return 'Sai định dạng năm';
      }
      if (value < year_built) {
        return 'Năm bàn giao không thể xảy ra trước năm xây dựng';
      }
    }
    return undefined;
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <Text style={styles.youWantCenter}>
          {t('common.need')}
          <Text style={{ color: COLORS.RED_1 }}> *</Text>
        </Text>
        <View style={styles.boxType}>
          {demands.map((item: { id?: number; value?: string }) => (
            <View
              key={`buySell${item.id}`}
              style={styles.buySell}
            >
              <Button
                buttonStyle={styles.isBuy(item.id === isBuy)}
                onPress={() => {
                  setIsBuy(item.id);
                  setValue && setValue('demand_id', item.id);
                }}
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
        <Select
          buttonStyle={styles.select}
          control={control}
          data={[...formatDataValueId(realEstateType)]}
          defaultButtonText={t('select.realEstateType')}
          label={t('select.realEstateType')}
          labelStyle={styles.inputLabel}
          name="real_estate_type_id"
          required
          rules={{ required: 'Vui lòng chọn loại BĐS' }}
          onSelect={handleSelectRealEstateType}
        />
        {showInfoApartmentBuilding && (
          <View>
            <Text style={styles.locationRealEstate}>
              {t('common.locationRealEstate')}
            </Text>
            <Input
              control={control}
              label={t('input.apartmentCode')}
              labelStyle={styles.inputLabel}
              renderErrorMessage={false}
              rules={{
                validate: validateApartmentCode,
              }}
              name="apartment_code"
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Input
                control={control}
                isNumeric
                label={t('input.yearBuilt')}
                labelStyle={styles.inputLabel}
                inputContainerStyle={styles.inputContainerStyle}
                renderErrorMessage={false}
                rules={{
                  validate: validateFormatYear,
                }}
                name="year_built"
              />
              <Input
                control={control}
                isNumeric
                label={t('input.handoverYear')}
                labelStyle={styles.inputLabel}
                inputContainerStyle={styles.inputContainerStyle}
                renderErrorMessage={false}
                rules={{
                  validate: validateFormatHandorverYear,
                }}
                name="handover_year"
              />
            </View>
          </View>
        )}

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
            data={provinces}
            defaultButtonText={t('select.province')}
            rules={{ required: 'Vui lòng chọn Thành phố' }}
            label={t('select.province')}
            labelStyle={styles.inputLabel}
            name="province_id"
            required
            onSelect={handleSelectProvince}
          />
          <Select
            buttonStyle={styles.select1}
            control={control}
            data={districts}
            rules={{ required: 'Vui lòng chọn Quận/huyện' }}
            defaultButtonText={t('select.district')}
            label={t('select.district')}
            labelStyle={styles.inputLabel}
            name="district_id"
            required
            onSelect={handleSelectDistrict}
          />
        </View>
        <Select
          buttonStyle={styles.select1}
          control={control}
          data={wards}
          defaultButtonText={t('select.ward')}
          label={t('select.ward')}
          rules={{ required: 'Vui lòng chọn Phường/xã' }}
          labelStyle={styles.inputLabel}
          name="ward_id"
          onSelect={handleSelectWardId}
          required
        />
        <Select
          buttonStyle={styles.select}
          control={control}
          data={projectOptions}
          defaultButtonText={t('select.nameProject')}
          label={t('select.nameProject')}
          labelStyle={styles.inputLabel}
          name="project_id"
        />
        <Input
          control={control}
          label={t('input.specificAddress')}
          labelStyle={styles.inputLabel}
          name="address_detail"
          required
          maxLength={100}
          rules={{
            required: 'Vui lòng nhập địa chỉ hiển thị trên tin đăng',
          }}
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
          >
            <Marker
              coordinate={{ latitude: latLong.lat, longitude: latLong.long }}
            ></Marker>
          </MapView>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default BasicInformation;
