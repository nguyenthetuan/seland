import { Button } from '@rneui/base';
import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';

import { COLOR_BLUE_1 } from '../../../../constants';
import { selectHome } from '../../../../features';
import ItemHottestRealEstate from '../ItemHottestRealEstate';
import styles from './styles';

const HottestRealEstateCategory = () => {
  const { t } = useTranslation();
  const [isBuy, setIsBuy] = useState(true);
  const { listRealEstatesHots } = useSelector(selectHome);

  const handleSelectOptions = value => {
    setIsBuy(value);
  };

  const listHottestRealEstate = useMemo(() => {
    let results = [];

    if (isBuy) {
      results = listRealEstatesHots?.data;
    } else {
      results = listRealEstatesHots?.data?.slice(0, 3);
    }
    return results;
  }, [isBuy, listRealEstatesHots?.data]);

  if (listRealEstatesHots.loading) {
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
            key={`ItemHottestRealEstate${index}`}
            item={item}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HottestRealEstateCategory;
