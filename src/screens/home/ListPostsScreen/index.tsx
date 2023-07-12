import {
  useNavigation,
  useRoute,
  NavigationProp,
} from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FlatList, View } from 'react-native';
import Loading from 'react-native-loading-spinner-overlay';
import { useDispatch, useSelector } from 'react-redux';

import { NoResults } from '../../../components';
import { COLORS, SCREENS } from '../../../constants';
import {
  getListRealEstates,
  selectRealEstates,
} from '../../../features/realEstates';
import { dispatchThunk } from '../../../utils';
import HeaderFilterPosts from '../components/HeaderFilterPosts';
import HeaderListPosts from '../components/HeaderListPosts';
import ItemRealEstates from '../components/ItemRealEstates';
import styles from './styles';
import TYPE from '../../../constants/types';
import { KIND_REALTY, URL_MAP, kindRealty } from '../../../utils/maps';

const ListPostsScreen = (props: any) => {
  let dataFilterRef = useRef({});
  const { navigate }: NavigationProp<any, any> = useNavigation();
  const { t } = useTranslation();
  const route: any = useRoute();
  const demand_id = route?.params?.demand_id;
  const is_hot = route?.params?.is_hot;
  const for_you = route?.params?.for_you;

  const dispatch = useDispatch();
  const { data: listPosts, loading: loadingListPost } =
    useSelector(selectRealEstates);
  const { control, setValue, getValues } = useForm({
    defaultValues: {},
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [enableScroll, setEnableScroll] = useState<boolean>(true);
  const [dataListPosts, setDataListPosts] = useState([]);
  const [page, setPage] = useState<number>(1);
  const [totalPost, setTotalPost] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(0);
  let stopLoadMore = true;

  const convertDataFilter = (data: any) => {
    const res: any = {};
    res.sort_by = 'asc';
    res.page = page;
    res.setTotal = setTotalPost;

    if (data?.sort_by) {
      res.sort_by = data?.sort_by;
    }

    if (data?.priceRange?.length > 0 && data?.priceRange[1] !== 0.01) {
      res.price_range_id = `${Number(data?.priceRange[0]).toFixed(1)}-${Number(
        data?.priceRange[1]
      ).toFixed(1)}`;
    }
    if (data?.acreage?.length > 0 && data?.acreage[1] !== 0.01) {
      res.area_range_id = `${Number(data?.acreage[0]).toFixed(0)}-${Number(
        data?.acreage[1]
      ).toFixed(0)}`;
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
    res.province_id = data?.province_id;
    if (data?.ward_id) {
      res.ward_id = data?.ward_id;
    }
    if (data?.district_id) {
      res.district_id = data?.district_id;
    }
    res.demand_id = data?.demand_id
      ? data?.demand_id
      : route?.params?.demand_id;
    if (data?.page) {
      res.page = data?.page;
    }
    return res;
  };

  let paramsData = {
    demand_id: demand_id,
    is_hot: is_hot ? is_hot : null,
    for_you: for_you ? for_you : null,
    page: page,
    setTotal: setTotalPost,
    setTotalPage: setTotalPage,
  };

  const onFilter = (data: any) => {
    const dataFilter = convertDataFilter({
      ...data,
      page: 1,
    });
    dataFilterRef.current = {
      title: getValues()?.title
        ? getValues()?.title
        : dataFilterRef.current?.title,
      ...dataFilter,
    };
    onGetListRealEstates(
      {
        ...dataFilterRef.current,
        is_hot: is_hot || '',
      },
      TYPE.FILTER
    );
  };

  const onFilterTitle = (val: string) => {
    let params;

    if (Object.keys(dataFilterRef.current).length > 0) {
      params = {
        ...dataFilterRef.current,
        title: val,
        page: 1,
        setTotal: setTotalPost,
        setTotalPage: setTotalPage,
      };
    } else {
      params = {
        ...paramsData,
        title: val,
        page: 1,
        setTotal: setTotalPost,
        setTotalPage: setTotalPage,
      };
    }

    dataFilterRef.current = params;

    onGetListRealEstates(params, TYPE.FILTER);
  };

  const onGetListRealEstates = (params?: any, type?: string) => {
    setIsLoading(true);

    const callback = (res: any) => {
      setIsLoading(false);
      if (type === TYPE.LOAD_MORE) {
        const tout = setTimeout(() => {
          clearInterval(tout);
          setDataListPosts([...dataListPosts, ...res] as any);
        }, 200);
      } else {
        setDataListPosts(res);
      }
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

  const onPullToRefresh = () => {
    setPage(1);
    onGetListRealEstates(
      Object.keys(dataFilterRef.current).length === 0
        ? { ...paramsData, page: 1 }
        : {
            ...dataFilterRef.current,
            setTotal: setTotalPost,
            page: 1,
            setTotalPage: setTotalPage,
          },
      TYPE.PULL_TO_REFRESH
    );
  };

  const onLoadMore = () => {
    if (!stopLoadMore) {
      if (page === totalPage) return;
      setPage(page + 1);
      onGetListRealEstates(
        Object.keys(dataFilterRef.current).length === 0
          ? {
              ...paramsData,
              page: page + 1,
              setTotal: setTotalPost,
              setTotalPage: setTotalPage,
            }
          : {
              ...dataFilterRef.current,
              setTotal: setTotalPost,
              setTotalPage: setTotalPage,
              page: page + 1,
            },
        TYPE.LOAD_MORE
      );
      stopLoadMore = true;
    }
  };

  useEffect(() => {
    onGetListRealEstates(paramsData);
  }, []);

  const onToLocation = (value: any) => {
    navigate(SCREENS.MAPS, {
      realtyID: value?.id,
      latLng: value?.lat_long,
      kindRealty: kindRealty({
        demand_id,
        is_hot,
      }),
    });
  };

  const onOpenMap = () => {
    navigate(SCREENS.MAPS, {
      customerUrl: `${URL_MAP}kindRealty=${kindRealty({
        demand_id,
        is_hot,
      })}&defaultFilter=false&demandId=${dataFilterRef.current?.demand_id}`,
    });
  };

  return (
    <>
      <Loading
        visible={isLoading}
        textContent={t('common.loading') || ''}
        color={COLORS.BLUE_1}
        textStyle={styles.spinnerTextStyle}
      />
      <View style={styles.boxListPost}>
        <HeaderListPosts
          control={control}
          handleSubmit={onFilterTitle}
          onOpenMap={onOpenMap}
          setValue={setValue}
        />
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.contentContainer}
          onEndReached={
            dataListPosts.length > 3 && isLoading === false ? onLoadMore : null
          }
          data={dataListPosts}
          initialNumToRender={20}
          renderItem={({ item }) => (
            <ItemRealEstates
              item={item}
              is_hot={!!is_hot}
              onToLocation={() => onToLocation(item)}
            />
          )}
          keyExtractor={(_, index) => `itemPost${index}`}
          ListEmptyComponent={isLoading ? null : <NoResults />}
          ListHeaderComponent={
            <HeaderFilterPosts
              onSelect={onFilter}
              onFilter={onFilter}
              onShowTypeHousing={onShowTypeHousing}
              dataLength={totalPost}
              setTitleValue={setValue}
              {...props}
            />
          }
          refreshing={isLoading}
          onRefresh={onPullToRefresh}
          scrollEnabled={enableScroll}
          onEndReachedThreshold={0.5}
          onScrollBeginDrag={() => {
            stopLoadMore = false;
          }}
        />
      </View>
    </>
  );
};

export default ListPostsScreen;
