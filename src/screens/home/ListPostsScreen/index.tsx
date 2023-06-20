import { useRoute } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, FlatList, View } from 'react-native';
import Loading from 'react-native-loading-spinner-overlay';
import { useDispatch, useSelector } from 'react-redux';

import { NoResults } from '../../../components';
import { COLORS } from '../../../constants';
import {
  getListRealEstates,
  selectRealEstates,
} from '../../../features/realEstates';
import { dispatchThunk } from '../../../utils';
import HeaderFilterPosts from '../components/HeaderFilterPosts';
import HeaderListPosts from '../components/HeaderListPosts';
import ItemRealEstates from '../components/ItemRealEstates';
import styles from './styles';

const ListPostsScreen = (props: any) => {
  const filterRef = useRef();
  const { t } = useTranslation();
  const route: any = useRoute();
  const demand_id = route?.params?.demandType;
  const is_hot = route?.params?.is_hot;
  const for_you = route?.params?.for_you;
  const dispatch = useDispatch();
  const { data: listPosts, loading: loadingListPost } =
    useSelector(selectRealEstates);
  const { control } = useForm({
    defaultValues: {},
  });

  const [isLoading, setIsLoading] = useState(false);

  const convertDataFilter = (data: any) => {
    const res: any = {};
    res.sort_by = 'asc';
    res.demand_id = '1';

    if (data?.sort_by) {
      res.sort_by = data?.sort_by;
    }

    if (data?.priceRange?.length > 0 && data?.priceRange[1] !== 1) {
      res.price_range_id = `${Number(data?.priceRange[0])}-${Number(
        data?.priceRange[1]
      )}`;
    }
    if (data?.acreage?.length > 0 && data?.acreage[1] !== 1) {
      res.area_range_id = `${Number(data?.acreage[0])}-${Number(
        data?.acreage[1]
      )}`;
    }
    if (data?.typeHousing?.length > 0) {
      res.real_estate_type = data?.typeHousing;
    } else if (
      data?.typeHousing &&
      ['number', 'string'].includes(typeof data?.typeHousing)
    ) {
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
    if (data?.province_id) {
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

  const onFilter = (data: any) => {
    const dataFilter = convertDataFilter(data);
    dispatchThunk(dispatch, getListRealEstates(dataFilter));
    filterRef?.current?.onClose();
  };

  const onSelect = (value: any) => {
    const dataFilter = convertDataFilter(value);
    console.log('🚀 dataFilter', dataFilter);

    dispatchThunk(dispatch, getListRealEstates(dataFilter));
  };

  const onGetListRealEstates = () => {
    const params = {
      demand_id: demand_id,
      is_hot: is_hot ? is_hot : null,
      for_you: for_you ? for_you : null,
    };
    dispatchThunk(dispatch, getListRealEstates(params));
  };

  useEffect(() => {
    onGetListRealEstates();
  }, [dispatch]);

  return (
    <>
      <Loading
        visible={loadingListPost}
        textContent={t('common.loading') || ''}
        color={COLORS.BLUE_1}
        textStyle={styles.spinnerTextStyle}
      />
      <View style={styles.boxListPost}>
        <HeaderListPosts control={control} />
        {isLoading ? (
          <ActivityIndicator size={'small'} />
        ) : (
          <FlatList
            style={styles.list}
            contentContainerStyle={styles.contentContainer}
            data={listPosts}
            renderItem={({ item }) => <ItemRealEstates item={item} />}
            keyExtractor={(_, index) => `itemPost${index}`}
            ListEmptyComponent={loadingListPost ? null : <NoResults />}
            ListHeaderComponent={
              <HeaderFilterPosts
                onSelect={onSelect}
                onFilter={onFilter}
                {...props}
              />
            }
            refreshing={isLoading}
            onRefresh={onGetListRealEstates}
          />
        )}
      </View>
    </>
  );
};

export default ListPostsScreen;
