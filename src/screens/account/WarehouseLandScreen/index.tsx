import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, FlatList, View } from 'react-native';
import Loading from 'react-native-loading-spinner-overlay';
import { useDispatch, useSelector } from 'react-redux';
import { NoResults } from '../../../components';
import { COLORS } from '../../../constants';
import { loadRealEstateWarehouses, selectWareHouses } from '../../../features';
import { dispatchThunk } from '../../../utils';
import { IModalFilterWarehouse } from '../../../utils/interface/common';
import HeaderListPosts from '../../home/components/HeaderListPosts';
import FilterWarehouse from './components/Filter';
import ItemWarehouseLand from '../components/ItemWarehouseLand';
import styles from './styles';

const WarehouseLandScreen = () => {
  const { control, handleSubmit, getValues, setValue } = useForm({
    defaultValues: {
      real_estate_warehouse_id: null,
      area_range_id: null,
      sort_by: 'createdAt',
      real_estate_type_id: null,
      province_id: null,
      district_id: null,
      demand_id: null,
      title: null,
      status: -1,
    },
  });
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const { listRealEstateWarehouses, loadingRealEstateWarehouses } =
    useSelector(selectWareHouses);

  const onSelect = () => {
    const obj = getValues();
    if (obj.status === -1) {
      delete obj?.status;
    }
    dispatchThunk(dispatch, loadRealEstateWarehouses({ ...obj }));
  };

  const onFilterModal = (value: IModalFilterWarehouse) => {
    const obj = getValues();
    if (obj.status === -1) {
      delete obj?.status;
    }
    dispatchThunk(dispatch, loadRealEstateWarehouses({ ...obj }));
  };
  const onSearch = (value: string) => {
    const obj = getValues();
    if (obj.status === -1) {
      delete obj?.status;
    }
    dispatchThunk(dispatch, loadRealEstateWarehouses({ ...obj }));
  };

  const onLoadRealEstateWarehouses = () => {
    dispatchThunk(dispatch, loadRealEstateWarehouses());
  };

  useEffect(() => {
    onLoadRealEstateWarehouses();
  }, [dispatch]);

  return (
    <>
      <View style={styles.itemWarehouseLand}>
        <HeaderListPosts
          control={control}
          handleSubmit={onSearch}
          getValues={getValues}
          isShowIconLocation={false}
          isShowZone={false}
        />
        <Loading
          visible={loadingRealEstateWarehouses}
          textContent={`${t('common.loading')}`}
          color={COLORS.BLUE_1}
          textStyle={styles.spinnerTextStyle}
        />
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
              setValue={setValue}
              getValues={getValues}
            />
          }
          refreshing={isLoading}
          onRefresh={onLoadRealEstateWarehouses}
        />
      </View>
    </>
  );
};

export default WarehouseLandScreen;
