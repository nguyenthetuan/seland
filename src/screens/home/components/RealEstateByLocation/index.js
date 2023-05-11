import { Button } from '@rneui/base';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, StyleSheet, View } from 'react-native';

import { Text } from '../../../../components';
import styles from './styles';

const data = [
  {
    name: 'TP. HCM',
    numberPost: 5999,
    image: 'https://tphcm.dangcongsan.vn/DATA/72/IMAGES/2021/04/ttxxvnktvn.jpg',
  },
  {
    name: 'TP. Ha Noi',
    numberPost: 3920,
    image: 'https://hanoimoi.com.vn/Uploads/images/anhthu/2019/11/03/hn7.jpg',
  },
  {
    name: 'TP. Da Nang',
    numberPost: 5000,
    image:
      'https://danangprivatecar.com/wp-content/uploads/2023/04/As-a-unique-bridge-in-Vietnam-Dragon-Bridge-has-become-an-icon-of-Da-Nang-city-that-no-tourist-can-miss.-.jpeg',
  },
  {
    name: 'TP. Binh Duong',
    numberPost: 4792,
    image:
      'https://mnphutan.tptdm.edu.vn/uploads/mnphutan/news/2023_04/binhduong1zing_1.jpeg',
  },
  {
    name: 'TP. Dong Nai',
    numberPost: 5000,
    image:
      'https://2.bp.blogspot.com/-et65SbhqjT0/VBOURnkPluI/AAAAAAAAhyQ/05zeoZlT6EM/s1600/Nga%2BNam%2BBien%2BHung.jpg',
  },
];

const RealEstateByLocation = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.realEstateByLocation}>
      {data.map((item, index) => {
        if (index === 0) {
          return (
            <ImageBackground
              key={`realEstateByLocation${item?.name}`}
              source={{ uri: item?.image }}
              style={StyleSheet.flatten([styles.boxItem, styles.boxItem2])}
              imageStyle={styles.image}
            >
              <Text
                style={styles.name}
                numberOfLines={1}
              >
                {item?.name}
              </Text>
              <Text style={styles.numberPost}>{`${item?.numberPost} ${t(
                'common.posts'
              )}`}</Text>
            </ImageBackground>
          );
        }
        return (
          <View
            key={`realEstateByLocation${item?.name}`}
            style={StyleSheet.flatten([styles.boxItem, styles.boxItem3])}
          >
            <ImageBackground
              key={`realEstateByLocation${item?.name}`}
              source={{ uri: item?.image }}
              style={styles.boxImage}
              imageStyle={styles.image}
            >
              <Text
                style={styles.name}
                numberOfLines={1}
              >
                {item?.name}
              </Text>
              <Text style={styles.numberPost}>{`${item?.numberPost} ${t(
                'common.posts'
              )}`}</Text>
            </ImageBackground>
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

export default RealEstateByLocation;
