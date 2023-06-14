import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FlatList, View } from 'react-native';
import Loading from 'react-native-loading-spinner-overlay';
import { useDispatch, useSelector } from 'react-redux';
import { NoResults } from '../../../components';
import { COLORS } from '../../../constants';
import { loadRealEstateWarehouses, selectWareHouses } from '../../../features';
import { dispatchThunk } from '../../../utils';
import { IModalFilterWarehouse } from '../../../utils/interface/common';
import HeaderListPosts from '../../home/components/HeaderListPosts';
import FilterWarehouse from './components/Filter';
import ItemWarehouseLand from './components/ItemWarehouseLand';
import styles from './styles';

const WarehouseLandScreen = () => {
  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      real_estate_warehouse_id: null,
      area_range_id: null,
      sort_order: 'createdAt',
    },
  });
  const { t } = useTranslation();
  const [filter, setFilter]: any = useState();
  const dispatch = useDispatch();
  const onSelect = (value: any) => {
    setFilter(getValues());
  };
  const { listRealEstateWarehouses, loadingRealEstateWarehouses } =
    useSelector(selectWareHouses);

  useEffect(() => {
    dispatchThunk(dispatch, loadRealEstateWarehouses(filter));
  }, [dispatch, filter]);
  const onFilterModal = (value: IModalFilterWarehouse) => {
    console.log('value', value);
  };

  return (
    <>
      <Loading
        visible={loadingRealEstateWarehouses}
        textContent={`${t('common.loading')}`}
        color={COLORS.BLUE_1}
        textStyle={styles.spinnerTextStyle}
      />
      <View>
        <HeaderListPosts />
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.contentContainer}
          data={listRealEstateWarehouses}
          renderItem={({ item }) => <ItemWarehouseLand item={item} />}
          keyExtractor={(_, index) => `itemWarehouseLand${index}`}
          ListEmptyComponent={
            loadingRealEstateWarehouses ? null : <NoResults />
          }
          ListHeaderComponent={
            <FilterWarehouse
              control={control}
              handleSubmit={handleSubmit}
              onSelect={onSelect}
              onFilter={onFilterModal}
            />
          }
        />
      </View>
    </>
  );
};

export default WarehouseLandScreen;
