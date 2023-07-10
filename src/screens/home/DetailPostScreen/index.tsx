import React, { useEffect, useState } from 'react';
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
import {
  useNavigation,
  useRoute,
  NavigationProp,
} from '@react-navigation/native';
import Loading from 'react-native-loading-spinner-overlay';
import { useTranslation } from 'react-i18next';
import { COLORS, SCREENS } from '../../../constants';
import { KIND_REALTY, kindRealty } from '../../../utils/maps';
import { requestGetDetailRealEstates } from '../../../api';

const DetailPostScreen = () => {
  const dispatch = useDispatch();
  const { navigate }: NavigationProp<any, any> = useNavigation();
  const [loading, setLoading] = useState<boolean>(true);
  const { t } = useTranslation();
  const [data, setData] = useState<any>();
  const route: any = useRoute();
  const id = route?.params?.id;
  const getDetailReal = async () => {
    const response = await requestGetDetailRealEstates(id);

    if (response?.data) {
      setData(response?.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (id) {
      setLoading(true);
      getDetailReal();
    }
  }, []);

  const goToMapScreen = () => {
    navigate(SCREENS.MAPS, {
      realtyID: data?.id,
      latLng: data?.lat_long,
      kindRealty: kindRealty({
        demand_id: data?.demand_id,
        is_hot: route?.params?.is_hot,
      }),
    });
  };

  return (
    <View>
      <Loading
        visible={loading}
        textContent={t('common.loading') || ''}
        color={COLORS.BLUE_1}
        textStyle={styles.spinnerTextStyle}
      />
      <View style={styles.detailPostWrapper}>
        <ScrollView>
          <View style={styles.detailPost}>
            <ImagePost
              infoDetail={data}
              onOpenMap={goToMapScreen}
            />
            <AboutPost
              infoDetail={{ ...data, id: id }}
              onOpenMap={goToMapScreen}
            />
            <DetailPost infoDetail={data} />
            <Contact
              infoDetail={data}
              id={route?.params?.id}
            />
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
