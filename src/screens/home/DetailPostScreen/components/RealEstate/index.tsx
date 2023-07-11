import React, { FC, useEffect, useState } from 'react';
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
import SameAreaRealEstate from '../../../components/SameAreaRealEstate';
import { IRealEstateDetails } from '../../../../../utils/interface/realEstateDetails';
import {
  Button,
  ItemRealEstateCarousel,
  Text,
} from '../../../../../components';

interface Iprops {
  infoDetail: IRealEstateDetails;
}

const RealEstate: FC<Iprops> = props => {
  const { t } = useTranslation();
  const { infoDetail } = props;
  const dispatch = useDispatch();
  const [isBuy, setIsBuy] = useState(true);

  const { navigate }: NavigationProp<any, any> = useNavigation();
  const { listRealEstatesIn: listPosts } = useSelector(selectRealEstates);
  const params = {
    province_id: infoDetail?.province_id || null,
    district_id: infoDetail?.district_id || null,
  };

  useEffect(() => {
    if (infoDetail?.province_id) {
      dispatchThunk(
        dispatch,
        getListRealEstatesIn({
          ...params,
          demand_id: 1,
        })
      );
    }
  }, [infoDetail?.province_id]);

  const handleSelectOptions = (value: any) => {
    setIsBuy(value);
    dispatchThunk(
      dispatch,
      getListRealEstatesIn({
        ...params,
        params: isBuy ? 1 : 2,
      })
    );
  };

  const navigateToListPosts = () => navigate(SCREENS.LIST_POSTS, params);

  return (
    <View style={styles.realEstateWrapper}>
      <Category
        label={t('detailPost.realEstateNear')}
        onSeeAll={navigateToListPosts}
        isSeeAll={listPosts?.length > 0 ? true : false}
      >
        {listPosts?.length > 0 && (
          <>
            <View style={styles.boxSelect}>
              <Button
                buttonStyle={styles.btnSelect}
                titleStyle={styles.txtSelect}
                onPress={() => handleSelectOptions(true)}
                title={t('button.buySell')}
                outline={!isBuy}
                radius={5}
              />
              <Button
                buttonStyle={styles.btnSelect}
                titleStyle={styles.txtSelect}
                onPress={() => handleSelectOptions(false)}
                title={t('button.lease')}
                outline={isBuy}
                radius={5}
              />
            </View>
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
          </>
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
          <>
            <View style={styles.boxSelect}>
              <Button
                buttonStyle={styles.btnSelect}
                titleStyle={styles.txtSelect}
                onPress={() => handleSelectOptions(true)}
                title={t('button.buySell')}
                outline={!isBuy}
                radius={5}
              />
              <Button
                buttonStyle={styles.btnSelect}
                titleStyle={styles.txtSelect}
                onPress={() => handleSelectOptions(false)}
                title={t('button.lease')}
                outline={isBuy}
                radius={5}
              />
            </View>
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
          </>
        )}
        {listPosts?.length === 0 && (
          <Text style={styles.textNoValue}>{t('common.noValue')}</Text>
        )}
      </Category>
    </View>
  );
};

export default RealEstate;
