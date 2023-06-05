import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, View } from 'react-native';
import Loading from 'react-native-loading-spinner-overlay';
import { useDispatch, useSelector } from 'react-redux';

import { Header, NoResults } from '../../../components';
import { COLOR_BLUE_1, YOUR_WANT } from '../../../constants';
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
  const { goBack, reset }: any = useNavigation();
  const { data: userRealEstates, loading } = useSelector(selectUserRealEstates);
  const { t } = useTranslation();
  const handleBack = () => {
    if (route?.params?.type === 'createPost') {
      reset({
        index: 0,
        routes: [{ name: 'AccountNavigator' }],
      });
    } else {
      goBack();
    }
  };
  useEffect(() => {
    const params = {
      status: YOUR_WANT.SAVE_DRAFTS,
    };
    dispatchThunk(dispatch, getListRealEstatesUser(params));
  }, [dispatch]);

  return (
    <>
      <Loading
        color={COLOR_BLUE_1}
        textContent={`${t('common.loading')}`}
        textStyle={styles.loadingText}
        visible={loading}
      />

      <View style={[styles.flex, styles.whiteBackground]}>
        <Header
          title={t('header.userPosts')}
          onPress={handleBack}
        />
        <FlatList
          style={[styles.list, styles.marginHorizontal]}
          data={userRealEstates}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <UserPost item={item} />}
          ListEmptyComponent={(!loading && <NoResults />) || null}
        />
      </View>
    </>
  );
};

export default UserDraftPostsScreen;
