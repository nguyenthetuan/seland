import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';

import { Button } from '../../../../components';
import { COLORS } from '../../../../constants';
import { selectHome, selectWareHouses } from '../../../../features';
import ItemHottestRealEstate from '../ItemRealEstateCarosel';
import styles from './styles';

const SameAreaRealEstate = () => {
  const { t } = useTranslation();
  const [isBuy, setIsBuy] = useState(true);
  const { listRealEstateWarehouses, loadingRealEstateWarehouses } =
    useSelector(selectWareHouses);
  const handleSelectOptions = (value: any) => {
    setIsBuy(value);
  };

  const data = useMemo(() => {
    let results = [];

    if (isBuy) {
      results = listRealEstateWarehouses;
    } else {
      results = listRealEstateWarehouses?.slice(0, 3);
    }
    return results;
  }, [isBuy, listRealEstateWarehouses]);

  if (loadingRealEstateWarehouses) {
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
        {data.map((item: any, index: number) => (
          <ItemHottestRealEstate
            key={`ItemHottestRealEstate${index}`}
            item={item}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default SameAreaRealEstate;
