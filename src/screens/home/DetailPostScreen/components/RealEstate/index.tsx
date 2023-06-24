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
  const { listRealEstateWarehouses } = useSelector(selectWareHouses);

  const navigateToListPosts = () => navigate(SCREENS.LIST_POST);
  useEffect(() => {
    const params = {
      province_id: infoDetail?.province_id,
      district_id: infoDetail?.district_id || null,
      ward_id: infoDetail?.ward_id || null,
    };
    if (infoDetail?.province_id) {
      dispatchThunk(dispatch, loadRealEstateWarehouses(params));
    }
  }, [dispatch]);

  return (
    <View style={styles.realEstateWrapper}>
      <Category
        label={t('detailPost.realEstateNear')}
        onSeeAll={navigateToListPosts}
        isSeeAll={listRealEstateWarehouses?.length > 0 ? true : false}
      >
        {listRealEstateWarehouses?.length > 0 && <SameAreaRealEstate />}
        {listRealEstateWarehouses?.length === 0 && (
          <Text style={styles.textNoValue}>{t('common.noValue')}</Text>
        )}
      </Category>

      <Category
        label={t('detailPost.realEstateSeen')}
        onSeeAll={navigateToListPosts}
        isSeeAll={listRealEstateWarehouses?.length > 0 ? true : false}
      >
        {listRealEstateWarehouses?.length > 0 && <SameAreaRealEstate />}
        {listRealEstateWarehouses?.length === 0 && (
          <Text style={styles.textNoValue}>{t('common.noValue')}</Text>
        )}
      </Category>
    </View>
  );
};

export default RealEstate;
