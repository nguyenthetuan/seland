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
import Filter from '../components/FilterModal';
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
            />
          }
        />
      </View>
      <Filter ref={filterRef} />
    </>
  );
};

export default ListPostsScreen;
