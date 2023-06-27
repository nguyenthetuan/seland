import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getListRealEstates, selectRealEstates } from '../../../../../features';
import { dispatchThunk } from '../../../../../utils';
import styles from './styles';
import Category from '../../../components/Category';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../../../../constants';
import SameAreaRealEstate from '../../../components/SameAreaRealEstate';
import { IRealEstateDetails } from '../../../../../utils/interface/realEstateDetails';
import { Text } from '../../../../../components';

interface Iprops {
  infoDetail: IRealEstateDetails;
}

const RealEstate: FC<Iprops> = props => {
  const { t } = useTranslation();
  const { infoDetail } = props;
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const { data: listPosts } = useSelector(selectRealEstates);
  const params = {
    province_id: infoDetail?.province_id || null,
    district_id: infoDetail?.district_id || null,
  };

  const navigateToListPosts = () => navigate(SCREENS.LIST_POSTS, params);
  useEffect(() => {
    if (infoDetail?.province_id) {
      dispatchThunk(dispatch, getListRealEstates(params));
    }
  }, [dispatch]);

  return (
    <View style={styles.realEstateWrapper}>
      <Category
        label={t('detailPost.realEstateNear')}
        onSeeAll={navigateToListPosts}
        isSeeAll={listPosts?.length > 0 ? true : false}
      >
        {listPosts?.length > 0 && <SameAreaRealEstate />}
        {listPosts?.length === 0 && (
          <Text style={styles.textNoValue}>{t('common.noValue')}</Text>
        )}
      </Category>

      <Category
        label={t('detailPost.realEstateSeen')}
        onSeeAll={navigateToListPosts}
        isSeeAll={listPosts?.length > 0 ? true : false}
      >
        {listPosts?.length > 0 && <SameAreaRealEstate />}
        {listPosts?.length === 0 && (
          <Text style={styles.textNoValue}>{t('common.noValue')}</Text>
        )}
      </Category>
    </View>
  );
};

export default RealEstate;
