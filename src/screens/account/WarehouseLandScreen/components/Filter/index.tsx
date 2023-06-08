import React, { FC, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles';
import { TouchableOpacity, View } from 'react-native';
import { Icon } from '@rneui/base';
import { Control } from 'react-hook-form';
import { Select } from '../../../../../components';
import Filter from '../../../../home/components/FilterModal';

interface Iprops {
  control: Control<any>;
  handleSubmit?: any;
  onSelect: (value: any) => void;
  onFilter?: (value?: any) => void;
}

const FilterWarehouse: FC<Iprops> = props => {
  const { control, handleSubmit, onSelect, onFilter } = props;
  const { t } = useTranslation();
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
  const listWareHouse = [{ label: t('button.all'), value: 1 }];
  const listAgency = [{ label: t('button.all'), value: 1 }];

  const onOpenFilter = () => {
    filterRef.current.onOpen();
  };

  const onSubmit = () => {
    onFilter && onFilter();
    filterRef.current.onClose();
  };

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
              data={listWareHouse}
              name="real_estate_type_id"
              onSelect={handleSubmit(onSelect)}
              defaultButtonText={
                t('select.realEstates', {
                  realEstates: t('button.all'),
                }) || ''
              }
            />
          </View>
          <View style={styles.areaRange}>
            <Select
              buttonStyle={[styles.buttonSelect]}
              buttonTextStyle={styles.textButtonSelect}
              rowStyle={styles.buttonSelect}
              rowTextStyle={styles.rowTextStyle}
              control={control}
              data={listAgency}
              defaultButtonText={
                t('select.agency', {
                  agency: t('button.all'),
                }) || ''
              }
              name="area_range_id"
              onSelect={handleSubmit(onSelect)}
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
          onSelect={handleSubmit(onSelect)}
        />
      </View>
      <Filter
        ref={filterRef}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default FilterWarehouse;
