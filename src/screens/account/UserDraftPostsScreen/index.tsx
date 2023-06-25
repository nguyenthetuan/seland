import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, FlatList, View } from 'react-native';
import Loading from 'react-native-loading-spinner-overlay';
import { useDispatch, useSelector } from 'react-redux';

import { Header, NoResults } from '../../../components';
import { COLORS, YOUR_WANT } from '../../../constants';
import {
  getListRealEstatesUser,
  selectUserRealEstates,
} from '../../../features';
import { dispatchThunk } from '../../../utils';
import { UserPost } from '../components';
import styles from './styles';

const UserDraftPostsScreen = () => {
  const dispatch = useDispatch();
  const route: any = useRoute();
  const { data: userRealEstates, loading } = useSelector(selectUserRealEstates);
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(false);
  const [dataUserRealEstates, setDataUserRealEstates] = useState([]);
  const [page, setPage] = useState(1);

  const onGetListRealEstatesUser = () => {
    setIsLoading(true);

    const callback = (res: any) => {
      setIsLoading(false);
      if (dataUserRealEstates.length > 0) {
        setDataUserRealEstates([...dataUserRealEstates, ...res]);
      } else {
        setDataUserRealEstates(res);
      }
    };

    const params = {
      status: YOUR_WANT.SAVE_DRAFTS,
      sort_by: 'createdAt',
      page: page,
    };
    dispatchThunk(dispatch, getListRealEstatesUser(params), callback);
  };

  const onLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    onGetListRealEstatesUser();
  }, [page]);

  return (
    <>
      <Loading
        color={COLORS.BLUE_1}
        textContent={`${t('common.loading')}`}
        textStyle={styles.loadingText}
        visible={loading}
      />

      <View style={[styles.flex, styles.whiteBackground]}>
        <Header title={t('header.listDraft')} />

        <FlatList
          style={[styles.list, styles.marginHorizontal]}
          data={dataUserRealEstates}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <UserPost
              item={item}
              refreshData={onGetListRealEstatesUser}
            />
          )}
          ListEmptyComponent={(!loading && <NoResults />) || null}
          refreshing={isLoading}
          onRefresh={onGetListRealEstatesUser}
          onMomentumScrollEnd={onLoadMore}
          ListFooterComponent={
            isLoading ? <ActivityIndicator size={'small'} /> : null
          }
        />
      </View>
    </>
  );
};

export default UserDraftPostsScreen;
