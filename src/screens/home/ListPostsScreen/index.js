/* eslint-disable react/prop-types */
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

const ListPostsScreen = (props) => {
  const { control, handleSubmit, setValue, getValues } = useForm({
    defaultValues: {
      district_id: '',
      typeHousing: '',
      demand_id: 1,
      sort_by: '',
    },
  });
  const filterRef = useRef();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { data: listPosts, loading: loadingListPost } =
    useSelector(selectRealEstates);

  useEffect(() => {
    dispatchThunk(dispatch, getListRealEstates());
  }, [dispatch]);

  const convertDataFilter = data => {
    const res = {};
    res.sort_by = 'asc';

    if (data?.sort_by) {
      res.sort_by = data?.sort_by;
    }

    if (data?.priceRange?.length > 0 && data?.priceRange[1] !== 1) {
      res.price_range_id = `${Number(data?.priceRange[0])}-${
        Number(data?.priceRange[1])
      }`;
    }
    if (data?.acreage?.length > 0 && data?.acreage[1] !== 1) {
      res.area_range_id = `${Number(data?.acreage[0])}-${Number(
        data?.acreage[1]
      )}`;
    }
    if (data?.typeHousing?.length > 0) {
      res.real_estate_type = data?.typeHousing;
    } else if (data?.typeHousing && ['number', 'string'].includes(typeof (data?.typeHousing))) {
      res.real_estate_type = [data?.typeHousing];
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
    if (data?.province_id && data?.ward_id) {
      res.province_id = data?.province_id;
    }
    if (data?.ward_id) {
      res.ward_id = data?.ward_id;
    }
    if (data?.district_id) {
      res.district_id = data?.district_id;
    }
    if (data?.demand_id) {
      res.demand_id = data?.demand_id;
    }
    return res;
  };

  const onFilter = data => {
    const dataFilter = convertDataFilter(data);
    dispatchThunk(dispatch, getListRealEstates(dataFilter));
    filterRef?.current?.onClose();
  };

  const onSelect = value => {
    console.log('🚀 ~ file: index.js:51 ~ onSelect ~ value:', value);
    const dataFilter = convertDataFilter(value);
    dispatchThunk(dispatch, getListRealEstates(dataFilter));
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
          contentContainerStyle={styles.contentContainer}
          data={listPosts}
          renderItem={({ item }) => <ItemRealEstates item={item} />}
          keyExtractor={(_, index) => `itemPost${index}`}
          ListEmptyComponent={loadingListPost ? null : <NoResults />}
          ListHeaderComponent={
            <HeaderFilterPosts
              control={control}
              getValues={getValues}
              handleSubmit={handleSubmit}
              onSelect={onSelect}
              onFilter={onFilter}
              setValue={setValue}
              {...props}
            />
          }
        />
      </View>
    </>
  );
};

export default ListPostsScreen;
