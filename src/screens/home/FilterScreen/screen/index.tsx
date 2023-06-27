import { Icon } from '@rneui/themed';
import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
  useMemo,
} from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
  Dimensions,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { Button, Input, Select, Text } from '../../../../components';
import { COLORS, SCREENS } from '../../../../constants';
import TypeHousing from './components/TypeHousing/index';
import { SliderComponent } from './components/SliderComponent';
import { SelectComponent } from './components/SelectComponent';
import { Reload } from '../../../../assets';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCommon,
  getDistricts,
  getProvinces,
  selectPosts,
  getWards,
  clearWards,
  selectRealEstates,
  getAllFilter,
  clearDistricts,
} from '../../../../features';
import { dispatchThunk } from '../../../../utils';
import REAL_ESTATE from '../../../../constants/realEstate';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('screen');

const convertOptionsFromApi = ({
  value,
  id,
}: {
  value: string;
  id: string | number;
}) => {
  return {
    title: value,
    value: id,
  };
};

const convertValuePriceToTitle = (priceItem: { value: string }) => {
  let stringVal = '';
  const arrVal = priceItem?.value?.split('-');

  if (Number(arrVal[0]) < 1) {
    if (Number(arrVal[1]) < 1) {
      stringVal = `${Number(arrVal[0]) * 1000}`;
    } else {
      stringVal = `${Number(arrVal[0]) * 1000} triệu`;
    }
  } else {
    stringVal = `${Number(arrVal[0])}`;
  }

  if (Number(arrVal[1]) < 1) {
    stringVal = `${stringVal} - ${Number(arrVal[1]) * 1000} triệu`;
  } else if (Number(arrVal[1]) >= 1) {
    stringVal = `${stringVal} - ${Number(arrVal[1])} tỷ`;
  }

  if (Number(arrVal[0]) == 0) {
    stringVal = `Dưới ${Number(arrVal[1]) * 1000} triệu`;
  } else if (Number(arrVal[1]) == 0) {
    stringVal = `Trên ${Number(arrVal[0])} tỷ`;
  }

  return {
    value: priceItem?.value,
    title: stringVal,
  };
};

const convertValueAreaToTitle = (priceItem: { value: string }) => {
  let stringVal = '';
  const arrVal = priceItem?.value?.split('-');
  if (Number(arrVal[0]) === 0) {
    stringVal = `Dưới ${Number(arrVal[1])}m²`;
  } else if (Number(arrVal[1]) === 0) {
    stringVal = `Trên ${Number(arrVal[0])}m²`;
  } else {
    stringVal = `${Number(arrVal[0])} - ${Number(arrVal[1])}m²`;
  }

  return {
    value: priceItem?.value,
    title: stringVal,
  };
};

interface TOptions {
  title: string;
  value: number | string;
}

const initValues = {
  district: '',
  ward: '',
  address: '',
  typeHousing: [],
  priceRange: [0, 1],
  acreage: [0, 1],
  compass: [],
  legalDocuments: [],
  location: [],
  bedroom: [],
  bathroom: [],
  numberFloors: [],
  province_id: null,
  ward_id: null,
  district_id: null,
  demand_id: 1,
};

const projectOptions = [
  {
    label: 'Dự án 1',
    value: 1,
  },
];

const FilterScreen = (props: any) => {
  const { route } = props;
  const { params } = route;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { navigate, goBack } = useNavigation();

  const dataFilters = params?.dataFilters;

  const defaultVal: any = Object.assign(initValues, dataFilters);

  const { control, handleSubmit, setValue, getValues } = useForm({
    defaultValues: defaultVal,
  });

  const [tabSelected, setTabSelected] = useState(dataFilters?.demand_id || 1);
  const [enableScroll, setEnableScroll] = useState(true);

  const { basicInformation, demands } = useSelector(selectPosts);

  const { area, bathroom, bedroom, floor, more, price, real_estate_type } =
    useSelector(selectRealEstates);

  const directionOptions = more?.[0]?.children?.map((directionItem: any) => ({
    value: directionItem?.id,
    title: directionItem?.value,
  }));

  const legalDocumentOptions = more?.[2]?.children?.map(
    (legalDocumentItem: any) => ({
      value: legalDocumentItem?.id,
      title: legalDocumentItem?.value,
    })
  );

  const locationOptions = more?.[5]?.children?.map((locationItem: any) => ({
    value: locationItem?.id,
    title: locationItem?.value,
  }));

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

  const typeHousingOptions = real_estate_type.map(
    (type: { value: string; id: string | number }) => ({
      title: type.value,
      value: type.id,
    })
  );

  const onSelect = (value: any) => {
    console.log('🚀 ~ file: index.js:51 ~ onSelect ~ value:', value);
  };

  const onSubmit = (data: any) => {
    navigate(SCREENS.LIST_POST, {
      district_id: data?.district_id,
      typeHousing: data?.typeHousing,
      demand_id: tabSelected,
      dataFilters: data,
    });
    params?.onSubmit && params?.onSubmit(data);
  };

  const clearForm = () => {
    Object.entries(initValues).forEach(
      ([key, value]: any) => value && setValue(key, value)
    );
    setValue('address', '');
    params?.onSubmit &&
      params?.onSubmit({ ...initValues, priceRange: [], acreage: [] });
    navigate(SCREENS.LIST_POST, initValues);
  };

  const fetchDistricts = (params: any, callback?: () => void) => {
    dispatchThunk(dispatch, getDistricts(params), callback);
  };

  const fetchWards = (params: any) => dispatchThunk(dispatch, getWards(params));

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

  const refresh = async () => {
    const { district_id } = basicInformation;
    const province_id = 'HNI';
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

  const onShowTypeHousing = (data: boolean) => {
    if (data) {
      setEnableScroll(false);
    } else {
      setEnableScroll(true);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  useEffect(() => {
    dispatchThunk(dispatch, getAllFilter());
  }, [dispatch]);

  useEffect(() => {
    setValue('demand_id', tabSelected);
  }, [tabSelected]);

  useEffect(() => {
    Object.entries(basicInformation).forEach(
      ([key, value]) => value && setValue(key, value)
    );
  }, [basicInformation, setValue]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scroll}
        scrollEnabled={enableScroll}
      >
        <View style={styles.header}>
          <Text style={styles.filterPost}>{t('heading.filterPost')}</Text>
          <TouchableOpacity
            style={styles.buttonClose}
            onPress={goBack}
          >
            <Icon
              name="close"
              color={COLORS.WHITE}
              size={20}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.txtFilter}>{t('select.type')}</Text>

        <View style={styles.wrapButton}>
          {demands.map((demandItem: { value: string; id: any }) => (
            <Button
              buttonStyle={styles.btnSelect}
              titleStyle={styles.txtSelect}
              onPress={() => setTabSelected(demandItem?.id)}
              title={demandItem?.value}
              radius={4}
              outline={tabSelected !== demandItem?.id}
            />
          ))}
        </View>

        <View style={styles.wrapArea}>
          <View style={styles.wrapFilter}>
            <Text style={styles.txtFilter}>{t('select.area')}</Text>
            <View style={styles.boxRealEstate}>
              <View style={styles.district}>
                <Select
                  buttonStyle={styles.buttonSelect}
                  buttonTextStyle={styles.textButtonSelect}
                  rowStyle={styles.buttonSelect}
                  rowTextStyle={styles.rowTextStyle}
                  control={control}
                  data={provinceOptions}
                  defaultButtonText={t('select.province') || ''}
                  name="province_id"
                  onSelect={handleSelectProvince}
                />
              </View>
              <View style={styles.district}>
                <Select
                  buttonStyle={styles.buttonSelect}
                  buttonTextStyle={styles.textButtonSelect}
                  rowStyle={styles.buttonSelect}
                  rowTextStyle={styles.rowTextStyle}
                  control={control}
                  data={districtOptions}
                  defaultButtonText={t('select.district') || ''}
                  name="district_id"
                  onSelect={handleSelectDistrict}
                />
              </View>
              <View style={styles.ward}>
                <Select
                  buttonStyle={styles.buttonSelect}
                  buttonTextStyle={styles.textButtonSelect}
                  rowStyle={styles.buttonSelect}
                  rowTextStyle={styles.rowTextStyle}
                  control={control}
                  data={wardOptions}
                  defaultButtonText={t('select.ward') || ''}
                  name="ward_id"
                  onSelect={handleSubmit(onSelect)}
                />
              </View>
              <View style={styles.areaRange}>
                <Select
                  buttonStyle={[styles.buttonSelect]}
                  buttonTextStyle={styles.textButtonSelect}
                  rowStyle={styles.buttonSelect}
                  rowTextStyle={styles.rowTextStyle}
                  control={control}
                  data={projectOptions}
                  defaultButtonText={t('common.project') || ''}
                  name="project_id"
                  onSelect={(val: any) => {}}
                />
              </View>
            </View>

            {/* <View>
              <Input
                control={control}
                name="address"
                required
                placeholder={t('input.addressPlaceHolder') || ''}
              />
            </View> */}
          </View>
        </View>

        <View style={styles.wrapTypeHousing}>
          <Text>{t('select.typeHousing')}</Text>
          <TypeHousing
            options={typeHousingOptions}
            type={'typeHousing'}
            control={control}
            name="typeHousing"
            multipleChoice
            onShowTypeHousing={onShowTypeHousing}
          />
        </View>

        <SliderComponent
          title={t('common.priceRange') || ''}
          options={price.map((priceItem: any) =>
            convertValuePriceToTitle(priceItem)
          )}
          defaultValues={initValues.priceRange}
          minimumValue={0}
          maximumValue={50}
          step={0.1}
          control={control}
          name="priceRange"
          convertDisplay={(val: string) =>
            (Number(val).toFixed(1) || '0').toString() + ' tỷ VND'
          }
        />

        <SliderComponent
          title={t('common.acreage') || ''}
          options={area.map((areaItem: any) =>
            convertValueAreaToTitle(areaItem)
          )}
          defaultValues={initValues.acreage}
          minimumValue={0}
          maximumValue={500}
          step={5}
          control={control}
          name="acreage"
          convertDisplay={(val: string) => (val || '0').toString() + 'm²'}
        />

        <View style={styles.wrapTypeHousing}>
          <Text>{t('select.compass')}</Text>
          <TypeHousing
            options={directionOptions}
            type={'compass'}
            control={control}
            name="compass"
            onShowTypeHousing={onShowTypeHousing}
          />
        </View>

        <SelectComponent
          title={t('common.legalDocuments') || ''}
          options={legalDocumentOptions}
          name="legalDocuments"
          control={control}
        />

        <SelectComponent
          title={t('common.location') || ''}
          options={locationOptions}
          name="location"
          control={control}
        />

        <SelectComponent
          title={t('common.bedroom') || ''}
          options={bedroom.map((bedroomItem: any) =>
            convertOptionsFromApi(bedroomItem)
          )}
          name="bedroom"
          control={control}
        />

        <SelectComponent
          title={t('common.bathroom') || ''}
          options={bathroom.map((bathroomItem: any) =>
            convertOptionsFromApi(bathroomItem)
          )}
          name="bathroom"
          control={control}
        />

        <SelectComponent
          title={t('common.numberFloors') || ''}
          options={floor.map((bathroomItem: any) =>
            convertOptionsFromApi(bathroomItem)
          )}
          name="numberFloors"
          control={control}
        />

        <View style={styles.footer}>
          <Button
            buttonStyle={{
              width: width * 0.45,
              borderColor: COLORS.GRAY_2,
            }}
            titleStyle={{
              color: COLORS.BLACK_1,
              fontSize: 14,
              lineHeight: 22,
            }}
            radius={5}
            title={t('button.reset')}
            outline
            onPress={clearForm}
            icon={
              <View style={styles.wrapIcon}>
                <Reload />
              </View>
            }
          />
          <Button
            buttonStyle={{
              width: width * 0.45,
              backgroundColor: COLORS.BLUE_1,
              borderColor: COLORS.BLUE_1,
            }}
            titleStyle={{ fontSize: 14, lineHeight: 22 }}
            radius={5}
            onPress={handleSubmit(onSubmit)}
            title={t('button.apply')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FilterScreen;
