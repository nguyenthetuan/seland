import React, { FC, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles';
import { TouchableOpacity, View } from 'react-native';
import { Icon } from '@rneui/base';
import { Select } from '../../../../components';
import { Control } from 'react-hook-form';
import Filter from '../FilterModal';

interface Iprops {
  control: Control<any>;
  handleSubmit?: any;
  onSelect: (value: any) => void;
  onFilter: (value?: any) => void;
}

const HeaderFilterPosts: FC<Iprops> = props => {
  const { control, handleSubmit, onSelect, onFilter } = props;
  const { t } = useTranslation();
  const filterRef: any = useRef();

  const type = [
    {
      label: 'Mua',
      value: '1',
    },
    {
      label: 'Bán',
      value: '2',
    },
  ];
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
  const realEstateType = [{ label: 'Mua', value: 1 }];

  const onOpenFilter = () => {
    filterRef.current.onOpen();
  };

  const onSubmit = (params: any) => {
    onFilter && onFilter(params);
    filterRef.current.onClose();
  }

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
              data={realEstateType}
              defaultButtonText={t('select.typeHousing') || ""}
              name="real_estate_type_id"
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
              data={[{ label: 'test', value: 'test' }]}
              defaultButtonText={t('select.area') || ""}
              name="area_range_id"
              onSelect={handleSubmit(onSelect)}
            />
          </View>
          <View style={styles.boxStatus}>
            <Select
              buttonStyle={styles.buttonSelect}
              buttonTextStyle={styles.textButtonSelect}
              rowStyle={styles.buttonSelect}
              rowTextStyle={styles.rowTextStyle}
              control={control}
              data={type}
              defaultButtonText={t('select.type') || ""}
              name="type"
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
          defaultButtonText={t('select.sortBy', {
            sortBy: t('select.newest'),
          }) || ""}
          name="sort_by"
          onSelect={handleSubmit(onSelect)}
        />
      </View>
      <Filter ref={filterRef} onSubmit={onSubmit} />
    </>
  );
};

export default HeaderFilterPosts;
