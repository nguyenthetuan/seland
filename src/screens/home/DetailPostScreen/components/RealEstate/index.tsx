import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  getListRealEstatesIn,
  selectRealEstates,
} from '../../../../../features';
import { dispatchThunk } from '../../../../../utils';
import styles from './styles';
import Category from '../../../components/Category';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { SCREENS } from '../../../../../constants';
import { IRealEstateDetails } from '../../../../../utils/interface/realEstateDetails';
import { ItemRealEstateCarousel, Text } from '../../../../../components';

interface Iprops {
  infoDetail: IRealEstateDetails;
}

const RealEstate: FC<Iprops> = props => {
  const { t } = useTranslation();
  const { infoDetail } = props;
  const dispatch = useDispatch();

  const { navigate }: NavigationProp<any, any> = useNavigation();
  const { listRealEstatesIn: listPosts } = useSelector(selectRealEstates);
  const params = {
    demand_id: infoDetail?.demand_id,
    province_id: infoDetail?.province_id,
    district_id: infoDetail?.district_id,
    dataFilters: {
      demand_id: infoDetail?.demand_id,
      province_id: infoDetail?.province_id || null,
      district_id: infoDetail?.district_id || null,
    },
  };

  useEffect(() => {
    if (infoDetail?.province_id) {
      dispatchThunk(
        dispatch,
        getListRealEstatesIn({
          ...params,
        })
      );
    }
  }, [infoDetail?.province_id]);

  const navigateToListPosts = () => navigate(SCREENS.LIST_POSTS, params);

  return (
    <View style={styles.realEstateWrapper}>
      <Category
        label={t('detailPost.realEstateNear')}
        onSeeAll={navigateToListPosts}
        isSeeAll={listPosts?.length > 0 ? true : false}
      >
        {listPosts?.length > 0 && (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {listPosts.map((item: any, index: number) => (
              <ItemRealEstateCarousel
                key={`ItemHottestRealEstate${index}`}
                item={item}
              />
            ))}
          </ScrollView>
        )}
        {listPosts?.length === 0 && (
          <Text style={styles.textNoValue}>{t('common.noValue')}</Text>
        )}
      </Category>

      <Category
        label={t('detailPost.realEstateSeen')}
        onSeeAll={navigateToListPosts}
        isSeeAll={listPosts?.length > 0 ? true : false}
      >
        {listPosts?.length > 0 && (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {listPosts.map((item: any, index: number) => (
              <ItemRealEstateCarousel
                key={`ItemHottestRealEstate${index}`}
                item={item}
              />
            ))}
          </ScrollView>
        )}
        {listPosts?.length === 0 && (
          <Text style={styles.textNoValue}>{t('common.noValue')}</Text>
        )}
      </Category>
    </View>
  );
};

export default RealEstate;
