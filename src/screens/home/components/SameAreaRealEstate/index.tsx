import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';

import { Button, ItemRealEstateCarousel } from '../../../../components';
import { COLORS } from '../../../../constants';
import { selectRealEstates } from '../../../../features';
import styles from './styles';

const SameAreaRealEstate = () => {
  const { t } = useTranslation();
  const [isBuy, setIsBuy] = useState(true);
  const { data: listPosts, loading } = useSelector(selectRealEstates);
  console.log('🚀 ~ file: index.tsx:15 ~ listPosts:', listPosts);

  const handleSelectOptions = (value: any) => {
    setIsBuy(value);
  };

  const data = useMemo(() => {
    let results = [];

    if (isBuy) {
      results = listPosts;
    } else {
      results = listPosts?.slice(0, 3);
    }
    return results;
  }, [isBuy, listPosts]);

  if (loading) {
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
        {data.map((item: any, index: number) => {
          console.log('🚀 ~ file: index.tsx:67 ~ {data.map ~ item:', item);
          return (
            <ItemRealEstateCarousel
              key={`ItemHottestRealEstate${index}`}
              item={item}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default SameAreaRealEstate;
