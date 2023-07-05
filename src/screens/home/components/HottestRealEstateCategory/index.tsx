import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';

import { Button } from '../../../../components';
import { COLORS, SCREENS } from '../../../../constants';
import REAL_ESTATE from '../../../../constants/realEstate';
import { selectHome } from '../../../../features';
import { IDemandId } from '../../../../utils/interface/home';
import ItemHottestRealEstate from '../ItemRealEstateCarosel';
import styles from './styles';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { KIND_REALTY } from '../../../../utils/maps';

const HottestRealEstateCategory = ({ isBuy, setIsBuy }: any) => {
  const { t } = useTranslation();
  const { navigate }: NavigationProp<any, any> = useNavigation();
  const { listRealEstatesHots } = useSelector(selectHome);

  const handleSelectOptions = (value: boolean) => {
    setIsBuy(value);
  };

  const listHottestRealEstate = useMemo(() => {
    let results = [];

    if (isBuy) {
      results = listRealEstatesHots?.data
        ?.filter((item: any) => item.demand_id === IDemandId.BUY)
        ?.slice(0, 3);
    } else {
      results = listRealEstatesHots?.data
        ?.filter((item: any) => item.demand_id === IDemandId.LEASE)
        ?.slice(0, 3);
    }
    return results;
  }, [isBuy, listRealEstatesHots?.data]);

  const onOpenMap = (value: { id?: number | string; lat_long?: string }) => {
    navigate(SCREENS.MAPS, {
      realtyID: value?.id,
      latLng: value?.lat_long,
      kindRealty: KIND_REALTY.exclusiveRealEstate,
    });
  };

  if (listRealEstatesHots.loading) {
    return (
      <View>
        <ActivityIndicator
          size="small"
          color={COLORS.BLUE_1}
        />
      </View>
    );
  }

  return (
    <View>
      <View style={styles.boxSelect}>
        <Button
          buttonStyle={styles.btnSelect}
          titleStyle={styles.txtSelect}
          onPress={() => handleSelectOptions(true)}
          title={t('button.buySell')}
          outline={!isBuy}
        />
        <Button
          buttonStyle={styles.btnSelect}
          titleStyle={styles.txtSelect}
          onPress={() => handleSelectOptions(false)}
          title={t('button.lease')}
          outline={isBuy}
        />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {listHottestRealEstate.map((item: any, index: number) => (
          <ItemHottestRealEstate
            key={`ItemHottestRealEstate${item?.id}-${index}`}
            item={item}
            type={REAL_ESTATE.REAL_ESTATE_HOSTEST}
            onOpenMap={() => onOpenMap(item)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HottestRealEstateCategory;
