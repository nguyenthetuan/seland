import React, { FC, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles';
import { TouchableOpacity, View } from 'react-native';
import { Icon } from '@rneui/base';
import { Control } from 'react-hook-form';
import { Select } from '../../../../../components';
import { dispatchThunk } from '../../../../../utils';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadListAllWareHouses,
  loadListAgency,
  selectWareHouses,
} from '../../../../../features';
import { formatSelect } from '../../../../../utils/format';
import ModalFilter from '../../../UserPostsScreen/components/ModalFilter';

interface Iprops {
  control: Control<any>;
  handleSubmit?: any;
  onSelect: (value: any) => void;
  onFilter?: (value?: any) => void;
  setValue?: Function;
}

const FilterWarehouse: FC<Iprops> = props => {
  const { control, handleSubmit, onSelect, onFilter, setValue } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const filterRef: any = useRef();

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
  const { listAllWareHouses, listAgency } = useSelector(selectWareHouses);
  const listAllWareHousesConvert = (listAllWareHouses &&
    Array.isArray(listAllWareHouses) &&
    formatSelect(listAllWareHouses)) || [
    {
      label: `${t('button.all')}`,
      value: null,
    },
  ];
  const listAgencyConvert = (listAgency &&
    Array.isArray(listAgency) &&
    formatSelect(listAgency)) || [
    {
      label: `${t('button.all')}`,
      value: null,
    },
  ];
  const onOpenFilter = () => {
    filterRef.current.onOpen();
  };
  const submit = handleSubmit(onFilter);

  useEffect(() => {
    dispatchThunk(dispatch, loadListAllWareHouses());
    dispatchThunk(dispatch, loadListAgency());
  }, [dispatch]);

  console.log('listAllWareHousesConvert', listAllWareHousesConvert);

  return (
    <>
      <View>
        <View style={styles.filter}>
          <TouchableOpacity
            style={styles.btnFilter}
            onPress={onOpenFilter}
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
              data={listAllWareHousesConvert}
              name="real_estate_warehouse_id"
              onSelect={handleSubmit(onSelect)}
              title={`${t('upgradeAccount.realEstatesSelect')}` || ''}
            />
          </View>
          <View style={styles.areaRange}>
            <Select
              buttonStyle={[styles.buttonSelect]}
              buttonTextStyle={styles.textButtonSelect}
              rowStyle={styles.buttonSelect}
              rowTextStyle={styles.rowTextStyle}
              control={control}
              data={listAgencyConvert}
              name="area_range_id"
              onSelect={handleSubmit(onSelect)}
              title={`${t('upgradeAccount.agencySelect')}` || ''}
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
          title={`${t('select.sortBySelect')}` || ''}
          name="sort_order"
          onSelect={handleSubmit(onSelect)}
        />
      </View>
      <ModalFilter
        ref={filterRef}
        control={control}
        onPressConfirm={submit}
        setValueHookForm={setValue}
      />
    </>
  );
};

export default FilterWarehouse;
