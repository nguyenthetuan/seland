import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';

import { Text } from '../../../../components';
import { COLORS } from '../../../../constants';
import { selectHome } from '../../../../features';
import styles from './styles';

const RealEstateByLocation = () => {
  const { t } = useTranslation();
  const { listRealEstateByLocation } = useSelector(selectHome);

  if (listRealEstateByLocation.loading) {
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
    <View style={styles.realEstateByLocation}>
      {listRealEstateByLocation?.data?.map((item, index) => {
        if (index === 0) {
          return (
            <ImageBackground
              key={`realEstateByLocation${item?.province_id}`}
              source={{
                uri:
                  item?.image ||
                  'https://tphcm.dangcongsan.vn/DATA/72/IMAGES/2021/04/ttxxvnktvn.jpg',
              }}
              style={StyleSheet.flatten([styles.boxItem, styles.boxItem2])}
              imageStyle={styles.image}
            >
              <Text
                style={styles.name}
                numberOfLines={1}
              >
                {item?.province_name}
              </Text>
              <Text style={styles.numberPost}>{`${item?.count} ${t(
                'common.posts'
              )}`}</Text>
            </ImageBackground>
          );
        }
        return (
          <View
            key={`realEstateByLocation${item?.province_id}`}
            style={StyleSheet.flatten([styles.boxItem, styles.boxItem3])}
          >
            <ImageBackground
              source={{
                uri:
                  item?.image ||
                  'https://tphcm.dangcongsan.vn/DATA/72/IMAGES/2021/04/ttxxvnktvn.jpg',
              }}
              style={styles.boxImage}
              imageStyle={styles.image}
            >
              <Text
                style={styles.name}
                numberOfLines={1}
              >
                {item?.province_name}
              </Text>
              <Text style={styles.numberPost}>{`${item?.count} ${t(
                'common.posts'
              )}`}</Text>
            </ImageBackground>
          </View>
        );
      })}
    </View>
  );
};

export default RealEstateByLocation;
