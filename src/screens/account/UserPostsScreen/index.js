import { Icon } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FlatList, View } from 'react-native';
import Loading from 'react-native-loading-spinner-overlay';
import { useDispatch, useSelector } from 'react-redux';

import {
  Button,
  Header,
  Input,
  NoResults,
  Screen,
  Select,
} from '../../../components';
import { COLOR_BLUE_1, COLOR_WHITE } from '../../../constants';
import { getListRealEstates, selectRealEstates } from '../../../features';
import { dispatchThunk } from '../../../utils';
import { UserPost } from '../components';
import styles from './styles';

const UserPostsScreen = () => {
  const dispatch = useDispatch();
  const { data: realEstates, loading } = useSelector(selectRealEstates);
  const { t } = useTranslation();
  const [filter, setFilter] = useState(1);

  useEffect(() => {
    dispatchThunk(dispatch, getListRealEstates());
  }, [dispatch]);

  const filters = [
    {
      label: 'all',
      value: -1,
    },
    {
      label: 'pendingReview',
      value: 3,
    },
    {
      label: 'publicPosts',
      value: 1,
    },
    {
      label: 'hidden',
      value: 6,
    },
    {
      label: 'rejected',
      value: 5,
    },
    {
      label: 'expired',
      value: 0,
    },
    {
      label: 'privatePosts',
      value: 2,
    },
  ];

  const calendar = [
    {
      label: 'lastWeek',
      value: 'last_week',
    },
    {
      label: 'last30Days',
      value: 'last_30_days',
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

  const { control, handleSubmit } = useForm({
    defaultValues: {
      search: '',
      calendar: 'last_week',
      sort_by: 'createdAt',
    },
  });

  const onSubmit = data =>
    dispatchThunk(
      dispatch,
      getListRealEstates({
        sort_by: data.sort_by,
      })
    );

  return (
    <>
      <Loading
        color={COLOR_BLUE_1}
        textContent={t('common.loading')}
        textStyle={styles.loadingText}
        visible={loading}
      />
      <View style={[styles.flex, styles.whiteBackground]}>
        <Header title={t('header.userPosts')} />
        <FlatList
          style={styles.postButtons}
          data={filters}
          horizontal
          renderItem={({ item: { label, value } }) => (
            <Button
              buttonStyle={[styles.marginHorizontal, styles.postButton]}
              onPress={() => setFilter(value)}
              outline={value !== filter}
              title={t(`button.${label}`)}
            />
          )}
          showsHorizontalScrollIndicator={false}
        />
        <Screen noSafeArea>
          <View style={styles.searchFilter}>
            <View style={styles.search}>
              <Input
                control={control}
                inputContainerStyle={styles.searchInput}
                name="search"
                placeholder={t('input.searchByCodeTitle')}
                rightIcon={<Icon name="search" />}
              />
            </View>
            <View style={styles.flex}>
              <Select
                buttonStyle={styles.selectButton}
                control={control}
                data={calendar.map(item => ({
                  ...item,
                  label: t(`select.${item?.label}`),
                }))}
                name="calendar"
                onSelect={handleSubmit(onSubmit)}
                rowStyle={styles.selectButton}
              />
            </View>
            <Button
              buttonStyle={styles.filterButton}
              icon={
                <Icon
                  color={COLOR_WHITE}
                  name="filter-alt"
                  size={16}
                />
              }
              title={t('button.filter')}
            />
          </View>
          <View style={styles.sort}>
            <Select
              buttonStyle={styles.selectButton}
              control={control}
              data={sortBy.map(item => ({
                ...item,
                label: t(`select.${item?.label}`),
              }))}
              defaultButtonText={t('select.newest')}
              name="sort_by"
              onSelect={handleSubmit(onSubmit)}
              rowStyle={styles.selectButton}
            />
          </View>
          <FlatList
            style={[styles.list, styles.marginHorizontal]}
            data={realEstates}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <UserPost item={item} />}
            ListEmptyComponent={!loading && <NoResults />}
          />
        </Screen>
      </View>
    </>
  );
};

export default UserPostsScreen;
