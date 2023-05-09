import { Icon } from '@rneui/base';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FlatList, TouchableOpacity, View } from 'react-native';
import Loading from 'react-native-loading-spinner-overlay';
import { useDispatch, useSelector } from 'react-redux';

import { Select } from '../../../components';
import { COLOR_BLUE_1 } from '../../../constants';
import {
  getListRealEstates,
  selectRealEstates,
} from '../../../features/realEstates';
import { dispatchThunk } from '../../../utils';
import HeaderListPosts from '../components/HeaderListPosts';
import ItemPosts from '../components/ItemPosts';
import styles from './styles';

const ListPostsScreen = () => {
  const { control } = useForm({
    defaultValues: {
      password: '',
      password_confirmation: '',
    },
    mode: 'onChange',
  });
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { data: listPosts, loading: loadingListPost } =
    useSelector(selectRealEstates);

  useEffect(() => {
    dispatchThunk(dispatch, getListRealEstates());
  }, [dispatch]);

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
          ListHeaderComponent={
            <View style={styles.filter}>
              <TouchableOpacity style={styles.btnFilter}>
                <Icon name="filter-list" />
              </TouchableOpacity>

              <Select
                control={control}
                name="type_transaction"
                data={[{ label: 'test', value: 'test' }]}
              />
              <Select
                control={control}
                name="test"
                data={[{ label: 'test', value: 'test' }]}
              />
              <Select
                control={control}
                name="category"
                data={[{ label: 'test', value: 'test' }]}
              />
            </View>
          }
        />
      </View>
    </>
  );
};

export default ListPostsScreen;
