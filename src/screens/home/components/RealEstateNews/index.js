import { Button } from '@rneui/base';
import dayjs from 'dayjs';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, View } from 'react-native';

import { Text } from '../../../../components';
import styles from './styles';

const data = [...Array(6)].map(_ => ({
  description:
    'Sau cuộc họp “giải cứu” ngành Bất động sản của Bộ Xây dựng và Ngân hàng Nhà nước, lãi suất vay tại nhiều ngân hàng đã có dấu hiệu đảo chiều, mức giảm lên tới Sau cuộc họp “giải cứu” ngành Bất động sản của Bộ Xây dựng và Ngân hàng...',
  title:
    'Hai gói tín dụng 230.000 tỷ đồng "bơm" vào BĐS: Người thu nhập thấp hưởng lợi kép',
  numberPost: 5999,
  createBy: 'Long',
  date: new Date(),
  image: 'https://tphcm.dangcongsan.vn/DATA/72/IMAGES/2021/04/ttxxvnktvn.jpg',
}));

const RealEstateNews = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      {data?.map((item, index) => {
        if (index === 0) {
          return (
            <View
              key={`RealEstateNews${index}`}
              style={styles.boxItem}
            >
              <Image
                source={{ uri: item?.image }}
                style={styles.image}
              />
              <Text style={styles.time}>
                {t('common.by')}{' '}
                <Text style={styles.name}>{item?.createBy}</Text>
                {` | ${dayjs(item?.date).format('DD/MM/YYYY')}`}
              </Text>
              <Text style={styles.title}>{item?.title}</Text>
              <Text
                style={styles.description}
                numberOfLines={5}
              >
                {item?.description}
              </Text>
            </View>
          );
        }
        return (
          <View
            key={`RealEstateNews${index}`}
            style={styles.boxItem1}
          >
            <Image
              source={{ uri: item?.image }}
              style={styles.image1}
            />
            <View style={styles.boxContent}>
              <Text style={styles.time}>
                {t('common.by')}{' '}
                <Text style={styles.name}>{item?.createBy}</Text>
                {` | ${dayjs(item?.date).format('DD/MM/YYYY')}`}
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
