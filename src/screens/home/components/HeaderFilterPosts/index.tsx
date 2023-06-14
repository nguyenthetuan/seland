import React, { FC, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles';
import { TouchableOpacity, View } from 'react-native';
import { Icon } from '@rneui/base';
import { Select } from '../../../../components';
import { Control } from 'react-hook-form';
import Filter from '../FilterModal';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../../../constants';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllFilter,
  getDistricts,
  getProvinces,
  selectCommon,
  selectPosts,
  selectRealEstates,
} from '../../../../features';
import { dispatchThunk } from '../../../../utils';

interface Iprops {
  control: Control<any>;
  handleSubmit?: any;
  onSelect: (value: any) => void;
  onFilter: (value?: any) => void;
  route?: any;
  setValue?: any;
  getValues?: any;
}

const HeaderFilterPosts: FC<Iprops> = props => {
  const {
    control,
    handleSubmit,
    onSelect,
    onFilter,
    route,
    setValue,
    getValues,
  } = props;
  const { t } = useTranslation();
  const { navigate } = useNavigation();

  const params = route?.params;
  const district_id = params?.district_id;
  const typeHousing = params?.typeHousing;
  const demand_id = params?.demand_id;

  useEffect(() => {
    if (district_id) {
      setValue('district_id', district_id);
      const paramsFilter = { ...getValues(), district_id };
      handleSubmit(paramsFilter);
    }
  }, [district_id]);

  useEffect(() => {
    if (typeHousing && typeHousing.length > 0) {
      setValue('typeHousing', typeHousing?.[0]);
      const paramsFilter = { ...getValues(), typeHousing: [typeHousing?.[0]] };
      handleSubmit(paramsFilter);
    }
  }, [typeHousing]);

  useEffect(() => {
    if (demand_id) {
      setValue('demand_id', demand_id);
      const paramsFilter = { ...getValues(), demand_id };
      handleSubmit(paramsFilter);
    }
  }, [demand_id]);

  const { districts } = useSelector(selectCommon);

  const { real_estate_type } = useSelector(selectRealEstates);

  const dispatch = useDispatch();

  const emptyDistrictOption = {
    label: t('select.district'),
    value: null,
  };

  const province_id = 'HNI';
  const districtOptions = [emptyDistrictOption, ...districts];

  const fetchDistricts = (params: any, callback?: () => void) => {
    dispatchThunk(dispatch, getDistricts(params), callback);
  };

  const refresh = async () => {
    await Promise.all([
      dispatchThunk(dispatch, getProvinces()),
      province_id &&
        fetchDistricts({
          province_code: province_id,
        }),
    ]);
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
      label: type.value,
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
    const paramsFilter = { ...getValues(), [fieldName]: val.value };
    handleSubmit(onSelect(paramsFilter));
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
              });
            }}
          >
            <Icon name="filter-list" />
          </TouchableOpacity>

          <View style={styles.boxRealEstate}>
            <Select
              buttonStyle={styles.buttonSelect}
              buttonTextStyle={styles.textButtonSelect}
              rowStyle={styles.buttonSelect}
              rowTextStyle={styles.rowTextStyle}
              control={control}
              data={typeHousingOptions}
              defaultButtonText={t('select.typeHousing') || ''}
              name="typeHousing"
              onSelect={(val: any) => submitFilter(val, 'typeHousing')}
            />
          </View>
          <View style={styles.areaRange}>
            <Select
              buttonStyle={[styles.buttonSelect]}
              buttonTextStyle={styles.textButtonSelect}
              rowStyle={styles.buttonSelect}
              rowTextStyle={styles.rowTextStyle}
              control={control}
              data={districtOptions}
              defaultButtonText={t('select.area') || ''}
              name="district_id"
              onSelect={(val: any) => submitFilter(val, 'district_id')}
            />
          </View>
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
        </View>
        <Select
          buttonStyle={[styles.buttonSelect, styles.buttonSort]}
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
      <Filter onSubmit={onSubmit} />
    </>
  );
};

export default HeaderFilterPosts;
