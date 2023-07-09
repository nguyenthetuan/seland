import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';

import { Button, ItemRealEstateCarousel } from '../../../../components';
import { COLORS, SCREENS } from '../../../../constants';
import REAL_ESTATE from '../../../../constants/realEstate';
import { selectHome } from '../../../../features';
import { IDemandId } from '../../../../utils/interface/home';
import styles from './styles';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { KIND_REALTY } from '../../../../utils/maps';
interface Iprops {
  isBuy: boolean;
  setIsBuy: any;
}

const RealEstateForYouCategory = ({ isBuy, setIsBuy }: Iprops) => {
  const { t } = useTranslation();
  const { navigate }: NavigationProp<any, any> = useNavigation();
  const { listRealEstatesForYou } = useSelector(selectHome);

  const handleSelectOptions = (value: boolean) => {
    setIsBuy(value);
  };
  const listHottestRealEstate = useMemo(() => {
    let results = [];

    if (isBuy) {
      results = listRealEstatesForYou?.data
        ?.filter((item: any) => item.demand_id === IDemandId.BUY)
        ?.slice(0, 3);
    } else {
      results = listRealEstatesForYou?.data
        ?.filter((item: any) => item.demand_id === IDemandId.LEASE)
        ?.slice(0, 3);
    }
    return results;
  }, [isBuy, listRealEstatesForYou?.data]);

  const onOpenMap = (value: { id?: number | string; lat_long?: string }) => {
    navigate(SCREENS.MAPS, {
      realtyID: value?.id,
      latLng: value?.lat_long,
      kindRealty: KIND_REALTY.buySellRealEstate,
    });
  };

  if (listRealEstatesForYou?.loading) {
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
          <ItemRealEstateCarousel
            key={`RealEstateForYouCategory${item?.id}-${index}`}
            item={item}
            type={REAL_ESTATE.REAL_ESTATE_FOR_YOU}
            onOpenMap={() => onOpenMap(item)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default RealEstateForYouCategory;
