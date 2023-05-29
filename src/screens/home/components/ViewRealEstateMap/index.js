import { Icon } from '@rneui/themed';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Dimensions, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';

import { Text } from '../../../../components';
import { COLOR_BLUE_2 } from '../../../../constants';
import ItemRealEstatesMaps from '../ItemRealEstatesMaps';
import styles from './styles';

const { height } = Dimensions.get('screen');

const item = {
  title: 'Bán cắt giảm sâu lô kề góc hướng đông MegaCity konTum giá 575 tỷ',
  province_id: '245',
  province_name: 'Hà Nội',
  district_id: '2019',
  district_name: 'Quận Long Biên',
  ward_id: '28590',
  ward_name: 'Phường Việt Hưng',
  location: 'Phường Việt Hưng, Quận Long Biên, Hà Nội',
  real_estate_type_id: '1',
  real_estate_type_name: 'Chung cư',
  price: 6.789,
  price_unit_id: '1',
  price_unit_name: 'Tỷ',
  price_per_m: 20.92,
  area: 200,
  bedroom: 4,
  bathroom: 5,
  'main_direction_id ': 3,
  main_direction_name: 'Nam',
  wish_list: 1,
  demand_id: 1,
  demand_name: 'Bán',
  description:
    'Bán cắt giảm sâu lô kề góc hướng đông MegaCity konTum giá 575. Bán cắt giảm sâu lô kề góc hướng đông MegaCity konTum giá 575. Bán cắt giảm sâu lô kề góc hướng đông MegaCity konTum giá 575. Bán cắt giảm sâu lô kề góc hướng đông MegaCity konTum giá 575.',
  phone_number: '0936986866',
  time: 4,
  rank_id: 4,
  rank_name: 'Vip Kim Cương',
  monopoly: 1,
  warehouse_id: 1,
  warehouse_name: 'Kho Thanh Xuân',
  show_detail_view: {
    show_list: 800,
    watched: 111,
    interested: 200,
  },
  contact_info: {
    user: {
      name_user: 'Mr.Abc',
      phone_number: '0973xxx888',
    },
    brokers: [],
  },
  images: {
    thumbnail: {
      path_url:
        'https://file4.batdongsan.com.vn/crop/393x222/2023/05/10/20230510125601-ea60_wm.jpg',
    },
    images: {
      path_url:
        'https://file4.batdongsan.com.vn/2023/05/10/20230510125601-653f_wm.jpg',
    },
  },
};

const ViewRealEstateMap = forwardRef((props, ref) => {
  const { t } = useTranslation();

  const modalizeRef = useRef();

  const openViewRealEstateMap = () => modalizeRef?.current?.open();

  const closeViewRealEstateMap = () => modalizeRef?.current?.close();

  useImperativeHandle(ref, () => ({ openViewRealEstateMap }));

  return (
    <GestureHandlerRootView>
      <Modalize
        ref={modalizeRef}
        overlayStyle={styles.modalContainer}
        childrenStyle={styles.children}
        modalHeight={height / 1.7}
        snapPoint={height / 1.7}
        handleStyle={styles.handle}
        tapGestureEnabled={false}
        handlePosition="outside"
      >
        <View style={styles.container}>
          <ItemRealEstatesMaps item={item} />
          <View style={styles.line} />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon
              name="chevron-right"
              size={20}
              color={COLOR_BLUE_2}
            />
            <Text style={styles.seeAll}>
              Xem thêm 828 Đất nông nghiệp Thánh phố Phú Quốc
            </Text>
          </View>
        </View>
      </Modalize>
    </GestureHandlerRootView>
  );
});

ViewRealEstateMap.displayName = 'ViewRealEstateMap';

export default ViewRealEstateMap;
