import React, { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import AboutPost from './components/AboutPost';
import Contact from './components/Contact';
import DetailPost from './components/DetailPost';
import ImagePost from './components/ImagePost';
import RealEstate from './components/RealEstate';
import styles from './styles';
import CallAndChat from './components/CallAndChat';
import { useDispatch, useSelector } from 'react-redux';
import { dispatchThunk } from '../../../utils';
import {
  getDetailRealEstates,
  selectDetailRealEstates,
} from '../../../features';
import { useRoute } from '@react-navigation/native';
import Loading from 'react-native-loading-spinner-overlay';
import { COLOR_BLUE_1 } from '../../../constants';
import { useTranslation } from 'react-i18next';

const DetailPostScreen = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const route: any = useRoute();
  const id = route?.params?.id;
  const { data, loading } = useSelector(selectDetailRealEstates);

  useEffect(() => {
    if (id) {
      dispatchThunk(dispatch, getDetailRealEstates(id));
    }
  }, [dispatch]);
  return (
    <View>
      <Loading
        visible={loading}
        textContent={t('common.loading') || ''}
        color={COLOR_BLUE_1}
        textStyle={styles.spinnerTextStyle}
      />
      <View style={styles.detailPostWrapper}>
        <ScrollView>
          <View style={styles.detailPost}>
            <ImagePost infoDetail={data} />
            <AboutPost infoDetail={data} />
            <DetailPost infoDetail={data} />
            <Contact infoDetail={data} />
            <RealEstate infoDetail={data} />
          </View>
        </ScrollView>
        <View style={styles.callAndChat}>
          <CallAndChat />
        </View>
      </View>
    </View>
  );
};

export default DetailPostScreen;
