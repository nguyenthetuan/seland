import { Button } from '@rneui/base';
import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, View } from 'react-native';

import REAL_ESTATE from '../../../../constants/realEstate';
import ItemHottestRealEstate from '../ItemHottestRealEstate';
import styles from './styles';

const mockData = [...Array(5)].map(() => ({
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
}));

const ProjectCategory = () => {
  const { t } = useTranslation();
  const [isBuy, setIsBuy] = useState(true);

  const handleSelectOptions = value => {
    setIsBuy(value);
  };

  const listHottestRealEstate = useMemo(() => {
    let results = [];

    if (isBuy) {
      results = mockData;
    } else {
      results = mockData.slice(0, 3);
    }
    return results;
  }, [isBuy]);

  return (
    <View>
      <View style={styles.boxSelect}>
        <Button
          buttonStyle={styles.btnSelect}
          titleStyle={styles.txtSelect}
          onPress={() => handleSelectOptions(true)}
          title={t('button.all')}
          type={isBuy ? 'solid' : 'outline'}
        />
        <Button
          buttonStyle={styles.btnSelect}
          titleStyle={styles.txtSelect}
          onPress={() => handleSelectOptions(false)}
          title={t('button.monopoly')}
          type={isBuy ? 'outline' : 'solid'}
        />
      </View>
      <ScrollView
        style={styles.carousel}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {listHottestRealEstate.map((item, index) => (
          <ItemHottestRealEstate
            key={`ProjectCategory${index}`}
            item={item}
            type={REAL_ESTATE.PROJECT}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default ProjectCategory;
