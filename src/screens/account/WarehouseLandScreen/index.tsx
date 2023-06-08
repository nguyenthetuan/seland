import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FlatList, View } from 'react-native';
import Loading from 'react-native-loading-spinner-overlay';
import { useDispatch, useSelector } from 'react-redux';
import { NoResults } from '../../../components';
import { COLOR_BLUE_1 } from '../../../constants';
import { getListProjects, selectHome } from '../../../features';
import { dispatchThunk } from '../../../utils';
import HeaderListPosts from '../../home/components/HeaderListPosts';
import FilterWarehouse from './components/Filter';
import ItemWarehouseLand from './components/ItemWarehouseLand';
import styles from './styles';

const WarehouseLandScreen = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      real_estate_type_id: '',
      area_range_id: '',
      status: '',
      sort_by: '',
    },
  });
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const onSelect = (value: any) => {
    console.log('🚀 ~ file: index.js:51 ~ onSelect ~ value:', value);
  };
  const { listProject } = useSelector(selectHome);
  const { data } = listProject;
  const { loading } = listProject;

  useEffect(() => {
    dispatchThunk(dispatch, getListProjects());
  }, [dispatch]);

  return (
    <>
      <Loading
        visible={loading}
        textContent={`${t('common.loading')}`}
        color={COLOR_BLUE_1}
        textStyle={styles.spinnerTextStyle}
      />
      <View>
        <HeaderListPosts />
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.contentContainer}
          data={data}
          renderItem={({ item }) => <ItemWarehouseLand item={item} />}
          keyExtractor={(_, index) => `itemWarehouseLand${index}`}
          ListEmptyComponent={loading ? null : <NoResults />}
          ListHeaderComponent={
            <FilterWarehouse
              control={control}
              handleSubmit={handleSubmit}
              onSelect={onSelect}
            />
          }
        />
      </View>
    </>
  );
};

export default WarehouseLandScreen;
