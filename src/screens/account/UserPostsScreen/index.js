import { Icon, Input } from '@rneui/themed';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import Loading from 'react-native-loading-spinner-overlay';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Header, Screen, Select } from '../../../components';
import { COLOR_BLUE_1 } from '../../../constants';
import {
  getListRealEstatesUser,
  selectUserRealEstates,
} from '../../../features';
import { dispatchThunk } from '../../../utils';
import styles from './styles';

const UserPostsScreen = () => {
  const dispatch = useDispatch();
  const { data: userRealEstates, loading } = useSelector(selectUserRealEstates);
  const { t } = useTranslation();

  useEffect(() => {
    dispatchThunk(dispatch, getListRealEstatesUser());
  }, [dispatch]);

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
      value: 'createdAt_desc',
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
      sort_by: 'createdAt_desc',
    },
  });

  const onSubmit = data => console.log(data);

  return (
    <>
      <Loading
        color={COLOR_BLUE_1}
        textContent={t('common.loading')}
        textStyle={styles.loadingText}
        visible={loading}
      />
      <View style={styles.container}>
        <Header title={t('header.userPosts')} />
        <Screen>
          <View style={styles.searchFilter}>
            <View style={styles.search}>
              <Input
                inputContainerStyle={styles.searchInput}
                placeholder={t('input.searchByCodeTitle')}
                rightIcon={<Icon name="search" />}
              />
            </View>
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
            <Button
              buttonStyle={styles.filterButton}
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
        </Screen>
      </View>
    </>
  );
};

export default UserPostsScreen;
