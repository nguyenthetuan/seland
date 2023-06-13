import { useNavigation, useRoute } from '@react-navigation/native';
import { Image } from '@rneui/base';
import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, View } from 'react-native';
import Loading from 'react-native-loading-spinner-overlay';
import { useDispatch } from 'react-redux';
import styles from './styles';
import {
  Icon360,
  IconBackWhite,
  IconDotWhite,
  IconHeartWhite,
  IconPhoneWhite,
  IconYoutube,
} from '../../../../../assets';
import { COLOR_BLUE_2 } from '../../../../../constants';
import { Text } from '../../../../../components';
import IconMapWhite from '../../../../../assets/icons/mapWhite';

interface Iprops {}

const AboutPost: FC<Iprops> = props => {
  const { t } = useTranslation();

  return (
    <View style={styles.aboutPost}>
      <View style={styles.seeMore}>
        <IconMapWhite color={COLOR_BLUE_2} />
        <Text style={styles.textViewMap}>{t('detailPost.seeMap') || ''}</Text>
        <View style={styles.icon}>
          <Icon360 />
        </View>
        <View style={styles.icon}>
          <IconYoutube />
        </View>
      </View>
    </View>
  );
};

export default AboutPost;
