import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadRealEstateWarehouses,
  selectWareHouses,
} from '../../../../../features';
import { dispatchThunk } from '../../../../../utils';
import styles from './styles';
import Category from '../../../components/Category';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../../../../constants';
import SameAreaRealEstate from '../../../components/SameAreaRealEstate';

interface Iprops {}

const RealEstate: FC<Iprops> = props => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const { listRealEstateWarehouses, loadingRealEstateWarehouses } =
    useSelector(selectWareHouses);

  const navigateToListPosts = () => navigate(SCREENS.LIST_POST);
  useEffect(() => {
    dispatchThunk(dispatch, loadRealEstateWarehouses());
  }, [dispatch]);

  return (
    <View style={styles.realEstateWrapper}>
      {listRealEstateWarehouses?.length ? (
        <Category
          label={t('detailPost.realEstateNear')}
          onSeeAll={navigateToListPosts}
        >
          <SameAreaRealEstate />
        </Category>
      ) : null}

      {listRealEstateWarehouses?.length ? (
        <Category
          label={t('detailPost.realEstateSeen')}
          onSeeAll={navigateToListPosts}
        >
          <SameAreaRealEstate />
        </Category>
      ) : null}
    </View>
  );
};

export default RealEstate;
