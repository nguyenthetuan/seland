import { Icon } from '@rneui/base';
import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FlatList, TouchableOpacity, View } from 'react-native';
import Loading from 'react-native-loading-spinner-overlay';
import { useDispatch, useSelector } from 'react-redux';

import { NoResults, Select } from '../../../components';
import { COLOR_BLUE_1 } from '../../../constants';
import {
  getListRealEstates,
  selectRealEstates,
} from '../../../features/realEstates';
import { dispatchThunk } from '../../../utils';
import Filter from '../components/FilterModal';
import HeaderListPosts from '../components/HeaderListPosts';
import ItemPosts from '../components/ItemPosts';
import styles from './styles';

const type = [
  { label: 'Mua', value: '1' },
  { label: 'Bán', value: '2' },
];
const sortBy = [
  { label: 'news', value: 'createAt' },
  { label: 'priceAsc', value: 'price_asc' },
  { label: 'priceDesc', value: 'price_desc' },
  { label: 'areaAsc', value: 'area_asc' },
  { label: 'areaDesc', value: 'area_desc' },
  { label: 'postVideo', value: 'videos' },
  { label: 'pricePerAsc', value: 'price_per_m_asc' },
  { label: 'pricePerDesc', value: 'price_per_m_desc' },
];

const ListPostsScreen = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      real_estate_type_id: '',
      area_range_id: '',
      status: '',
      sort_by: '',
    },
    // mode: 'onSelect',
  });
  const filterRef = useRef();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { data: listPosts, loading: loadingListPost } =
    useSelector(selectRealEstates);

  const realEstateType = [{ label: 'Mua', value: 1 }];

  useEffect(() => {
    dispatchThunk(dispatch, getListRealEstates());
  }, [dispatch]);

  const onSelect = value => {
    console.log('🚀 ~ file: index.js:51 ~ onSelect ~ value:', value);
  };

  const onOpenFilter = () => {
    filterRef.current.onOpen();
  };

  return (
    <>
      <Loading
        visible={loadingListPost}
        textContent={t('common.loading')}
        color={COLOR_BLUE_1}
        textStyle={styles.spinnerTextStyle}
      />
      <View style={styles.boxListPost}>
        <HeaderListPosts />
        <FlatList
          style={styles.list}
          data={listPosts}
          renderItem={({ item }) => <ItemPosts item={item} />}
          keyExtractor={(_, index) => `itemPost${index}`}
          ListEmptyComponent={loadingListPost ? null : <NoResults />}
          ListHeaderComponent={
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
                    defaultButtonText={t('select.typeHousing')}
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
                    defaultButtonText={t('select.area')}
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
                    defaultButtonText={t('select.type')}
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
                defaultButtonText={t('select.sortWith').replace(
                  'nameType',
                  t('common.new')
                )}
                name="sort_by"
                onSelect={handleSubmit(onSelect)}
              />
            </View>
          }
        />
      </View>
      <Filter ref={filterRef} />
    </>
  );
};

export default ListPostsScreen;
