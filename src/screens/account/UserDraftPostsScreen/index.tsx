import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, FlatList, View } from 'react-native';
import Loading from 'react-native-loading-spinner-overlay';
import { useDispatch, useSelector } from 'react-redux';
import { Header, NoResults } from '../../../components';
import { COLORS, YOUR_WANT } from '../../../constants';
import {
  getListRealEstatesUser,
  selectUserRealEstates,
  deleteRealEstatesUser,
} from '../../../features';
import { dispatchThunk } from '../../../utils';
import { UserPost } from '../components';
import styles from './styles';
import PopupConfirm from '../../../components/common/PopupConfirm';

const UserDraftPostsScreen = () => {
  const dispatch = useDispatch();
  const route: any = useRoute();
  const { data: userRealEstates, loading } = useSelector(selectUserRealEstates);
  const { t } = useTranslation();
  const confirmCancelPaymentRef = useRef();
  const [idItemDelete, setIdItemDelete] = useState('');
  const [total, setTotal] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [dataUserRealEstates, setDataUserRealEstates] = useState([]);
  const [page, setPage] = useState(1);

  const onGetListRealEstatesUser = () => {
    // setIsLoading(true);

    const callback = (res: any) => {
      // setIsLoading(false);
      // if (dataUserRealEstates.length > 0) {
      //   setDataUserRealEstates([...dataUserRealEstates, ...res]);
      // } else {
      //   setDataUserRealEstates(res);
      // }
    };

    const params = {
      status: YOUR_WANT.SAVE_DRAFTS,
      sort_by: 'createdAt',
      page: page,
      setTotal: setTotal,
    };
    dispatchThunk(dispatch, getListRealEstatesUser(params), callback);
  };

  const onGetReFresh = () => {
    setIsLoading(true);
    const callback = (res: any) => {
      setIsLoading(false);
      setDataUserRealEstates(res);
    };

    dispatchThunk(
      dispatch,
      getListRealEstatesUser({
        status: YOUR_WANT.SAVE_DRAFTS,
        sort_by: 'createdAt',
        page: page,
      }),
      callback
    );
  };

  const onLoadMore = () => {
    if (total === dataUserRealEstates.length) return;
    setPage(page + 1);
  };

  useEffect(() => {
    onGetListRealEstatesUser();
  }, [page]);

  const deleteSuccess = () => {
    onGetReFresh();
  };

  const handleConfirm = () => {
    try {
      if (idItemDelete) {
        dispatchThunk(
          dispatch,
          deleteRealEstatesUser(idItemDelete),
          deleteSuccess
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleCancel = () => {};
  const deletePost = (id: any) => {
    setIdItemDelete(id);
    confirmCancelPaymentRef?.current.openPopup();
  };

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
          data={userRealEstates}
          keyExtractor={item => item?.id}
          renderItem={({ item }) => (
            <UserPost
              type="DRAFT"
              item={item}
              deletePost={deletePost}
            />
          )}
          ListEmptyComponent={(!loading && <NoResults />) || null}
          refreshing={isLoading}
          onRefresh={onGetListRealEstatesUser}
          // onEndReached={dataUserRealEstates.length > 0 ? onLoadMore : null}
          ListFooterComponent={
            isLoading ? <ActivityIndicator size={'small'} /> : null
          }
        />
      </View>
      <PopupConfirm
        ref={confirmCancelPaymentRef}
        onPressButtonRight={handleConfirm}
        onPressButtonLeft={handleCancel}
        titleButtonLeft="Huỷ"
        titleButtonRight="Xác nhận"
        label="Bạn có muốn xoá tin không!"
      />
    </>
  );
};

export default UserDraftPostsScreen;
