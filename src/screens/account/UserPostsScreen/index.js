import { Icon, Input } from '@rneui/themed';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { Button, Header, Screen, Select } from '../../../components';
import styles from './styles';

const UserPostsScreen = () => {
  const { t } = useTranslation();

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
    <View style={styles.container}>
      <Header title={t('header.userPosts')} />
      <Screen>
        <View style={{ flexDirection: 'row', marginRight: 8 }}>
          <View style={{ flex: 2 }}>
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
            buttonStyle={{ marginLeft: 8 }}
            title={t('button.filter')}
          />
        </View>
        <View style={{ width: '50%', marginLeft: 8 }}>
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
  );
};

export default UserPostsScreen;
