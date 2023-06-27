import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';

import { Button } from '../../../../components';
import { COLORS } from '../../../../constants';
import REAL_ESTATE from '../../../../constants/realEstate';
import { selectHome } from '../../../../features';
import { IDemandId } from '../../../../utils/interface/home';
import ItemHottestRealEstate from '../ItemRealEstateCarosel';
import styles from './styles';

const RealEstateForYouCategory = (props) => {
  const { t } = useTranslation();
  // const [isBuy, setIsBuy] = useState(true);
  const { listRealEstatesForYou } = useSelector(selectHome);

  const handleSelectOptions = props?.handleSelectOptions ? props?.handleSelectOptions : null;
  const isBuy = props?.isBuy;


  const listHottestRealEstate = useMemo(() => {
    let results = [];

    if (isBuy) {
      results = listRealEstatesForYou?.data
        ?.filter(item => item.demand_id === IDemandId.BUY)
        ?.slice(0, 3);
    } else {
      results = listRealEstatesForYou?.data
        ?.filter(item => item.demand_id === IDemandId.LEASE)
        ?.slice(0, 3);
    }
    return results;
  }, [isBuy, listRealEstatesForYou?.data]);

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
        style={styles.carousel}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {listHottestRealEstate.map(item => (
          <ItemHottestRealEstate
            key={`RealEstateForYouCategory${item?.id}`}
            item={item}
            type={REAL_ESTATE.REAL_ESTATE_FOR_YOU}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default RealEstateForYouCategory;
