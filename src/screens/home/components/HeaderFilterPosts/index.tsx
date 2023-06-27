import React, { FC, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Icon } from '@rneui/base';
import { Select, Text } from '../../../../components';
import { Control, useForm } from 'react-hook-form';
import Filter from '../FilterModal';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../../../constants';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearDistricts,
  clearWards,
  getAllFilter,
  getDistricts,
  getProvinces,
  getWards,
  selectCommon,
  selectPosts,
  selectRealEstates,
} from '../../../../features';
import { dispatchThunk } from '../../../../utils';
import TypeHousing from '../../FilterScreen/screen/components/TypeHousing';

interface Iprops {
  control: Control<any>;
  handleSubmit?: any;
  onSelect: (value: any) => void;
  onFilter?: (value?: any) => void;
  route?: any;
  setValue?: any;
  getValues?: any;
  onShowTypeHousing?: () => void;
  dataLength?: number;
}

const projectOptions = [
  {
    label: 'Dự án 1',
    value: 1,
  },
];

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
  demand_id: null,
};

const HeaderFilterPosts: FC<Iprops> = props => {
  const { onSelect, onFilter, route, onShowTypeHousing, dataLength } = props;

  const { t } = useTranslation();
  const { navigate } = useNavigation();

  const params = route?.params;
  const dataFilters = params?.dataFilters;
  const { control, handleSubmit, setValue, getValues } = useForm({
    defaultValues: dataFilters
      ? Object.assign(initValues, dataFilters)
      : initValues,
  });

  useEffect(() => {
    if (dataFilters) {
      Object.entries(dataFilters).forEach(
        ([key, value]) => value && setValue(key, value)
      );
    }
  }, [dataFilters]);

  const { provinces, districts, wards } = useSelector(selectCommon);

  const { real_estate_type } = useSelector(selectRealEstates);

  const dispatch = useDispatch();

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

  const fetchDistricts = (
    params: { province_code: string },
    callback: undefined
  ) => dispatchThunk(dispatch, getDistricts(params), callback);

  const fetchWards = (params: { province_code: any; district_code: any }) =>
    dispatchThunk(dispatch, getWards(params));

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
    await Promise.all([dispatchThunk(dispatch, getProvinces())]);
  };

  useEffect(() => {
    refresh();
  }, []);

  const { demands } = useSelector(selectPosts);

  const demansOption = demands.map(
    (demandItem: { value: string; id: any }) => ({
      label: demandItem?.value,
      value: demandItem?.id,
    })
  );

  const sortBy = [
    {
      label: 'newest',
      value: 'createdAt',
    },
    {
      label: 'priceAsc',
      value: 'price_asc',
    },
    {
      label: 'priceDesc',
      value: 'price_desc',
    },
    {
      label: 'areaAsc',
      value: 'area_asc',
    },
    {
      label: 'areaDesc',
      value: 'area_desc',
    },
    {
      label: 'hasVideos',
      value: 'videos',
    },
    {
      label: 'pricePerM2Asc',
      value: 'price_per_m_asc',
    },
    {
      label: 'pricePerM2Desc',
      value: 'price_per_m_desc',
    },
  ];

  const onSubmit = (params: any) => {
    onFilter && onFilter(params);
  };

  const typeHousingOptions = real_estate_type.map(
    (type: { value: string; id: string | number }) => ({
      title: type.value,
      value: type.id,
    })
  );

  useEffect(() => {
    dispatchThunk(dispatch, getAllFilter());
  }, [dispatch]);

  const submitFilter = (
    val: { label: string; value: string | number },
    fieldName: string
  ) => {
    const paramsFilter: any = { ...getValues(), [fieldName]: val.value };
    handleSubmit(onSelect(paramsFilter) as any);
  };

  const onSelectTypeHousing = (val: any) => {
    const paramsFilter = { ...getValues(), typeHousing: val };
    handleSubmit(onSelect(paramsFilter) as any);
  };

  return (
    <>
      <View>
        <View style={styles.filter}>
          <TouchableOpacity
            style={styles.btnFilter}
            onPress={() => {
              navigate(SCREENS.FILTER_SCREEN, {
                onSubmit,
                dataFilters,
              });
            }}
          >
            <Icon name="filter-list" />
          </TouchableOpacity>

          {/* <View style={styles.areaRange}>
            <Select
              buttonStyle={[styles.buttonSelect]}
              buttonTextStyle={styles.textButtonSelect}
              rowStyle={styles.buttonSelect}
              rowTextStyle={styles.rowTextStyle}
              control={control}
              data={projectOptions}
              defaultButtonText={t('common.project') || ''}
              name="project_id"
              onSelect={(val: any) => submitFilter(val, 'project_id')}
            />
          </View> */}
          <View style={styles.boxStatus}>
            <Select
              buttonStyle={styles.buttonSelect}
              buttonTextStyle={styles.textButtonSelect}
              rowStyle={styles.buttonSelect}
              rowTextStyle={styles.rowTextStyle}
              control={control}
              data={demansOption}
              defaultButtonText={t('select.type') || ''}
              name="demand_id"
              onSelect={(val: any) => submitFilter(val, 'demand_id')}
            />
          </View>

          <View style={styles.wrapTypeHousing}>
            {/* <Text style={styles.textTypeHousing}>
              {t('select.typeHousing')}
            </Text> */}
            <TypeHousing
              options={typeHousingOptions}
              type={'typeHousing'}
              control={control}
              name="typeHousing"
              multipleChoice
              onSelectTypeHousing={onSelectTypeHousing}
              onShowTypeHousing={onShowTypeHousing}
              brief={true}
              placeHolder={t('select.typeHousing') || ""}
            />
          </View>
        </View>

        {/* <View style={styles.row}>
          <View style={styles.address}>
            <Select
              buttonStyle={styles.buttonAddress}
              buttonTextStyle={styles.textButtonSelect}
              rowStyle={styles.buttonSelect}
              rowTextStyle={styles.rowTextStyle}
              control={control}
              data={provinceOptions}
              defaultButtonText={t('select.province') || ''}
              name="province_id"
              onSelect={(val: any) => {
                handleSelectProvince(val);
                submitFilter(val, 'province_id');
              }}
            />
          </View>
          <View style={styles.address}>
            <Select
              buttonStyle={styles.buttonAddress}
              buttonTextStyle={styles.textButtonSelect}
              rowStyle={styles.buttonSelect}
              rowTextStyle={styles.rowTextStyle}
              control={control}
              data={districtOptions}
              defaultButtonText={t('select.province') || ''}
              name="district_id"
              onSelect={(val: any) => {
                handleSelectDistrict(val);
                submitFilter(val, 'district_id');
              }}
            />
          </View>
          <View style={styles.address}>
            <Select
              buttonStyle={styles.buttonAddress}
              buttonTextStyle={styles.textButtonSelect}
              rowStyle={styles.buttonSelect}
              rowTextStyle={styles.rowTextStyle}
              control={control}
              data={wardOptions}
              defaultButtonText={t('select.ward')}
              name="ward_id"
              onSelect={(val: any) => submitFilter(val, 'ward_id')}
            />
          </View>
        </View> */}

        <View style={styles.row}>
          
        </View>

        <View style={[styles.row, styles.spaceBetween]}>
          <Text>Có {dataLength || 0} bất động sản</Text>
          <View style={styles.boxRealEstate}>
            <Select
              buttonStyle={[styles.buttonSelect]}
              buttonTextStyle={styles.textButtonSelect}
              rowStyle={styles.buttonSelect}
              rowTextStyle={styles.rowTextStyle}
              control={control}
              data={sortBy.map(item => ({
                ...item,
                label: t(`select.${item?.label}`),
              }))}
              defaultButtonText={
                t('select.sortBy', {
                  sortBy: t('select.newest'),
                }) || ''
              }
              name="sort_by"
              onSelect={(val: any) => submitFilter(val, 'sort_by')}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default HeaderFilterPosts;
