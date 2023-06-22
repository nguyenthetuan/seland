import React, { FC, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { Icon } from '@rneui/base';
import { Control, useController } from 'react-hook-form';
import { Button, Select } from '../../../../../components';
import { dispatchThunk } from '../../../../../utils';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadListAllWareHouses,
  loadListAgency,
  selectWareHouses,
  loadRealEstateWarehouses,
} from '../../../../../features';
import { formatSelect } from '../../../../../utils/format';
import ModalFilter from '../../../UserPostsScreen/components/ModalFilter';
import { YOUR_WANT } from '../../../../../constants';

interface Iprops {
  control: Control<any>;
  handleSubmit?: any;
  onSelect: (value: any) => void;
  onFilter?: (value?: any) => void;
  setValue?: Function;
  getValues?: any;
}

const FilterWarehouse: FC<Iprops> = props => {
  const { control, handleSubmit, onSelect, onFilter, setValue, getValues } =
    props;
  const {
    field: { onChange, value },
  } = useController({ control, name: 'status' });
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
  const statuses = [
    {
      label: 'all',
      value: null,
    },
    {
      label: 'pendingReview',
      value: YOUR_WANT.PENDING,
    },
    {
      label: 'publicPosts',
      value: YOUR_WANT.POST_PUBLIC,
    },
    {
      label: 'hidden',
      value: YOUR_WANT.DOWN,
    },
    {
      label: 'rejected',
      value: YOUR_WANT.REJECT,
    },
    {
      label: 'expired',
      value: YOUR_WANT.INACTIVE,
    },
    {
      label: 'privatePosts',
      value: YOUR_WANT.SAVE_PRIVATE,
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
  const handleSelectStatus = (value: number | null) => {
    onChange(value);
    dispatchThunk(dispatch, loadRealEstateWarehouses(getValues()));
  };
  const submit = handleSubmit(onFilter);

  useEffect(() => {
    dispatchThunk(dispatch, loadListAllWareHouses());
    dispatchThunk(dispatch, loadListAgency());
  }, [dispatch]);

  return (
    <>
      <View>
        <FlatList
          style={styles.listButton}
          data={statuses}
          horizontal
          renderItem={({ item }) => (
            <Button
              buttonStyle={[styles.marginHorizontal, styles.postButton]}
              onPress={() => handleSelectStatus(item?.value)}
              outline={item?.value !== value}
              title={t(`button.${item?.label}`)}
            />
          )}
          showsHorizontalScrollIndicator={false}
        />
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
          name="sort_by"
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
