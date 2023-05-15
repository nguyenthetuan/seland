import { Button } from '@rneui/base';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, Image, View } from 'react-native';
import { useSelector } from 'react-redux';

import { Text } from '../../../../components';
import { COLOR_BLUE_1 } from '../../../../constants';
import { selectHome } from '../../../../features';
import styles from './styles';

const RealEstateNews = () => {
  const { t } = useTranslation();
  const { listNews } = useSelector(selectHome);

  if (listNews?.loading) {
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
    <View style={styles.container}>
      {listNews?.data?.map((item, index) => {
        if (index === 0) {
          return (
            <View
              key={`RealEstateNews${item?.id}`}
              style={styles.boxItem}
            >
              <Image
                source={{
                  uri:
                    item?.image ||
                    'https://tphcm.dangcongsan.vn/DATA/72/IMAGES/2021/04/ttxxvnktvn.jpg',
                }}
                style={styles.image}
              />
              <Text style={styles.time}>
                {t('common.by')}{' '}
                <Text style={styles.name}>{item?.created_by}</Text>
                {` | ${item?.created_date}`}
              </Text>
              <Text style={styles.title}>{item?.title}</Text>
              <Text
                style={styles.description}
                numberOfLines={5}
              >
                {item?.sapo}
              </Text>
            </View>
          );
        }
        return (
          <View
            key={`RealEstateNews${item?.id}`}
            style={styles.boxItem1}
          >
            <Image
              source={{
                uri:
                  item?.image ||
                  'https://tphcm.dangcongsan.vn/DATA/72/IMAGES/2021/04/ttxxvnktvn.jpg',
              }}
              style={styles.image1}
            />
            <View style={styles.boxContent}>
              <Text style={styles.time}>
                {t('common.by')}{' '}
                <Text style={styles.name}>{item?.created_by}</Text>
                {` | ${item?.created_date}`}
              </Text>
              <Text
                style={styles.title1}
                numberOfLines={3}
              >
                {item?.title}
              </Text>
            </View>
          </View>
        );
      })}
      <Button
        buttonStyle={styles.btnSeeAll}
        titleStyle={styles.txtSeeAll}
        title={t('button.seeAll')}
        type="outline"
      />
    </View>
  );
};

export default RealEstateNews;
