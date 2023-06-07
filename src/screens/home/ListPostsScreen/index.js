import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FlatList, View } from 'react-native';
import Loading from 'react-native-loading-spinner-overlay';
import { useDispatch, useSelector } from 'react-redux';

import { NoResults } from '../../../components';
import { COLOR_BLUE_1 } from '../../../constants';
import {
  getListRealEstates,
  selectRealEstates,
} from '../../../features/realEstates';
import { dispatchThunk } from '../../../utils';
import HeaderFilterPosts from '../components/HeaderFilterPosts';
import HeaderListPosts from '../components/HeaderListPosts';
import ItemRealEstates from '../components/ItemRealEstates';
import styles from './styles';

const ListPostsScreen = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      real_estate_type_id: '',
      area_range_id: '',
      status: '',
      sort_by: '',
    },
  });
  const filterRef = useRef();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { data: listPosts, loading: loadingListPost } =
    useSelector(selectRealEstates);

  const onSelect = value => {
    console.log('🚀 ~ file: index.js:51 ~ onSelect ~ value:', value);
  };

  useEffect(() => {
    dispatchThunk(dispatch, getListRealEstates());
  }, [dispatch]);

  const convertDataFilter = (data) => {
    const res = {};
    res.sort_by = 'asc';

    if (data?.priceRange?.length > 0) {
      res.price_range_id = `${Number(data?.priceRange[0])/(10**9)}-${Number(data?.priceRange[1])/(10**9)}`;
    }
    if (data?.acreage?.length > 0) {
      res.area_range_id = `${Number(data?.acreage[0])}-${Number(data?.acreage[1])}`;
    }
    if (data?.typeHousing?.length > 0) {
      res.real_estate_type_id = data?.typeHousing?.join(',');
    }
    if (data?.compass?.length > 0) {
      res.main_direction_id = data?.compass?.join(',');
    }
    if (data?.bedroom?.length > 0) {
      res.bedroom = data?.bedroom?.join(',');
    }
    if (data?.bathroom?.length > 0) {
      res.bathroom = data?.bathroom?.join(',');
    }
    if (data?.numberFloors > 0) {
      res.floor = data?.numberFloors.join(',');
    }
    if (data?.location > 0) {
      res.location_id = data?.location.join(',');
    }
    if (data?.province_id) {
      res.province_id = data?.province_id;
    }
    if (data?.ward_id) {
      res.ward_id = data?.ward_id;
    }
    if (data?.district_id) {
      res.district_id = data?.district_id;
    }
    return res;
  }

  const onFilter = (data) => {
    const dataFilter = convertDataFilter(data);
    dispatchThunk(dispatch, getListRealEstates(dataFilter));
    filterRef?.current?.onClose();
  }

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
          contentContainerStyle={styles.contentContainer}
          data={listPosts}
          renderItem={({ item }) => <ItemRealEstates item={item} />}
          keyExtractor={(_, index) => `itemPost${index}`}
          ListEmptyComponent={loadingListPost ? null : <NoResults />}
          ListHeaderComponent={
            <HeaderFilterPosts
              control={control}
              handleSubmit={handleSubmit}
              onSelect={onSelect}
              onFilter={onFilter}
            />
          }
        />
      </View>
    </>
  );
};

export default ListPostsScreen;
