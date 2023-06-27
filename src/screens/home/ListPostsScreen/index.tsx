import { useRoute } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import Loading from 'react-native-loading-spinner-overlay';
import { useDispatch, useSelector } from 'react-redux';

import { NoResults, Text } from '../../../components';
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
  const demand_id = route?.params?.demand_id;
  const is_hot = route?.params?.is_hot;
  const for_you = route?.params?.for_you;

  const dispatch = useDispatch();
  const { data: listPosts, loading: loadingListPost } =
    useSelector(selectRealEstates);
  const { control } = useForm({
    defaultValues: {},
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [enableScroll, setEnableScroll] = useState<boolean>(true);
  const [dataListPosts, setDataListPosts] = useState([]);
  const [page, setPage] = useState<number>(1);

  const [totalPost, setTotalPost] = useState<number>(0);

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
    dispatchThunk(dispatch, getListRealEstates(dataFilter));
  };

  const onGetListRealEstates = () => {
    setIsLoading(true);

    const callback = (res: any) => {
      setIsLoading(false);
      if (dataListPosts.length > 0) {
        setDataListPosts([...dataListPosts, ...res]);
      } else {
        setDataListPosts(res);
      }
    };

    const params = {
      demand_id: demand_id,
      is_hot: is_hot ? is_hot : null,
      for_you: for_you ? for_you : null,
      page: page,
      setTotal: setTotalPost,
    };
    dispatchThunk(dispatch, getListRealEstates(params), callback);
  };

  const onShowTypeHousing = (data: boolean) => {
    if (data) {
      setEnableScroll(false);
    } else {
      setEnableScroll(true);
    }
  };

  const onLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    onGetListRealEstates();
  }, [page]);
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
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.contentContainer}
          onEndReached={dataListPosts.length > 0 ? onLoadMore : null}
          data={dataListPosts}
          renderItem={({ item }) => <ItemRealEstates item={item} />}
          keyExtractor={(_, index) => `itemPost${index}`}
          ListEmptyComponent={loadingListPost ? null : <NoResults />}
          ListHeaderComponent={
            <HeaderFilterPosts
              onSelect={onSelect}
              onFilter={onFilter}
              onShowTypeHousing={onShowTypeHousing}
              dataLength={totalPost}
              dataFilters={{demand_id: "2"}}
              {...props}
            />
          }
          ListFooterComponent={
            isLoading ? <ActivityIndicator size={'small'} /> : null
          }
          refreshing={isLoading}
          onRefresh={onGetListRealEstates}
          scrollEnabled={enableScroll}
        />
      </View>
    </>
  );
};

export default ListPostsScreen;
