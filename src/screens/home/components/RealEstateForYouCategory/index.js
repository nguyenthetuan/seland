import { Button } from '@rneui/themed';
import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';

import { COLOR_BLUE_1 } from '../../../../constants';
import REAL_ESTATE from '../../../../constants/realEstate';
import { selectHome } from '../../../../features';
import ItemHottestRealEstate from '../ItemHottestRealEstate';
import styles from './styles';

const RealEstateForYouCategory = () => {
  const { t } = useTranslation();
  const [isBuy, setIsBuy] = useState(true);
  const { listRealEstatesForYou } = useSelector(selectHome);

  const handleSelectOptions = value => {
    setIsBuy(value);
  };

  const listHottestRealEstate = useMemo(() => {
    let results = [];

    if (isBuy) {
      results = listRealEstatesForYou?.data;
    } else {
      results = listRealEstatesForYou?.data?.slice(0, 3);
    }
    return results;
  }, [isBuy, listRealEstatesForYou?.data]);

  if (listRealEstatesForYou?.loading) {
    return (
      <View>
        <ActivityIndicator
          size="small"
          color={COLOR_BLUE_1}
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
          type={isBuy ? 'solid' : 'outline'}
        />
        <Button
          buttonStyle={styles.btnSelect}
          titleStyle={styles.txtSelect}
          onPress={() => handleSelectOptions(false)}
          title={t('button.lease')}
          type={isBuy ? 'outline' : 'solid'}
        />
      </View>
      <ScrollView
        style={styles.carousel}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {listHottestRealEstate.map((item, index) => (
          <ItemHottestRealEstate
            key={`RealEstateForYouCategory${index}`}
            item={item}
            type={REAL_ESTATE.REAL_ESTATE_FOR_YOU}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default RealEstateForYouCategory;
