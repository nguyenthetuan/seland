import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, View } from 'react-native';
import Loading from 'react-native-loading-spinner-overlay';
import { useDispatch } from 'react-redux';
import ImagePost from './components/ImagePost';
import styles from './styles';

const DetailPostScreen = () => {
  const dispatch = useDispatch();
  const route: any = useRoute();
  const { goBack, reset }: any = useNavigation();
  const { t } = useTranslation();

  return (
    <View>
      <ImagePost />
    </View>
  );
};

export default DetailPostScreen;
