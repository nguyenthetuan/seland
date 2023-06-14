import { Tooltip } from '@rneui/themed';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View } from 'react-native';
import { IconNote } from '../../../../../assets';
import { Text } from '../../../../../components';
import { COLORS } from '../../../../../constants';
import styles from './styles';

const DisplayPositionPost = () => {
  const { t } = useTranslation();

  const listPositionColor = [
    COLORS.GREEN_6,
    COLORS.GREEN_7,
    COLORS.GREEN_8,
    COLORS.GREEN_9,
    COLORS.YELLOW_1,
    COLORS.YELLOW_3,
    COLORS.YELLOW_4,
    COLORS.YELLOW_5,
    COLORS.YELLOW_6,
    COLORS.YELLOW_7,
  ];
  const infoViewPost = [
    {
      label: t('common.display'),
      value: '852',
    },
    {
      label: t('common.seePost'),
      value: '21',
    },
    {
      label: t('common.care'),
      value: '1',
    },
  ];

  return (
    <View>
      <View style={styles.posotionInfoPost}>
        {infoViewPost.map((info, index) => {
          return (
            <View
              key={info.label}
              style={index === 2 ? styles.infoPostLast : styles.infoPost}
            >
              <View style={styles.title}>
                <Text style={styles.titleText}>{info.label}</Text>
                <IconNote />
              </View>
              <Text style={styles.text}>{info?.value}</Text>
            </View>
          );
        })}
      </View>
      <View style={styles.posotionPostWrapper}>
        <View style={styles.positionFlex}>
          <View style={[styles.tooltip, { left: 0 }]}>
            <View>
              <Text style={styles.popupPage}>Trang 1</Text>
              <Text style={styles.popupPosition}>Đứng thứ 9</Text>
            </View>
            <View style={styles.arrow} />
          </View>
          <View style={styles.posotionPost}>
            {listPositionColor?.map((color, index) => {
              return (
                <View
                  key={color}
                  style={[
                    { backgroundColor: color },
                    index === 0
                      ? styles.positionFirst
                      : index === listPositionColor?.length - 1
                      ? styles.positionLast
                      : styles.position,
                  ]}
                ></View>
              );
            })}
          </View>
        </View>
        <View style={styles.addressPost}>
          <Text style={styles.addressText}>
            {t('common.positionPost')}:{' '}
            <Text style={styles.addressTextActive}>
              Bán căn hộ chung cư BV Diamond Hill
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DisplayPositionPost;
