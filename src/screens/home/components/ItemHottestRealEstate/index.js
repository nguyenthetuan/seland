import { Icon } from '@rneui/base';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Image, TouchableOpacity, View } from 'react-native';

import {
  Acreage,
  Bathroom,
  Bedroom,
  Compass,
  LocationMaps,
  Love,
} from '../../../../assets';
import { Text } from '../../../../components';
import {
  COLOR_BLACK_1,
  COLOR_GRAY_7,
  COLOR_GREEN_3,
  COLOR_ORANGE_5,
  COLOR_RED,
  COLOR_WHITE,
} from '../../../../constants';
import styles from './styles';

const ItemInfo = ({ value, icon }) => (
  <View style={styles.itemInfo}>
    {icon}
    <Text style={styles.valueInfo}>{value}</Text>
  </View>
);

ItemInfo.defaultProps = {
  value: '',
};

ItemInfo.propTypes = {
  value: PropTypes.string,
  icon: PropTypes.node.isRequired,
};

const ItemHottestRealEstate = ({ item }) => {
  const { t } = useTranslation();

  const backgroundRank = () => {
    switch (item?.rank_id) {
      case 1:
        return COLOR_BLACK_1;
      case 2:
        return COLOR_GREEN_3;
      case 3:
        return COLOR_ORANGE_5;
      default:
        return COLOR_RED;
    }
  };

  const onPressCall = () => {};

  const onToLocation = () => {};

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.boxImage}>
        <Image
          style={styles.image}
          source={{
            uri:
              item?.images?.thumbnail?.path_url ||
              'https://media.istockphoto.com/id/1188452511/vi/anh/ph%C3%B2ng-kh%C3%A1ch-scandinavian-%C4%91%E1%BA%A7y-phong-c%C3%A1ch-v%E1%BB%9Bi-thi%E1%BA%BFt-k%E1%BA%BF-gh%E1%BA%BF-sofa-b%E1%BA%A1c-h%C3%A0-%C4%91%E1%BB%93-n%E1%BB%99i-th%E1%BA%A5t-b%E1%BA%A3n-%C4%91%E1%BB%93-%C3%A1p.jpg?s=612x612&w=0&k=20&c=bq42yoAt_R3UG1xNJrNs0EO0Rbxd71TMf_ueRgK-2-g=',
          }}
        />
        <View style={styles.boxRank}>
          <View style={styles.boxMonopoly}>
            <Text
              style={styles.monopoly}
              onPress={() => Alert.alert('ok')}
            >
              {t('common.monopoly')}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.call}
            activeOpacity={0.8}
            onPress={onPressCall}
          >
            <Icon
              name="phone"
              size={23}
              color={COLOR_WHITE}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.boxPrice}>
        <Text style={styles.price}>
          {`${item?.price} ${item?.price_unit_name}`}{' '}
          <Text style={styles.acreage}>
            {`${item?.price_per_m} ${t('common.millionPerM2')}`}
          </Text>
        </Text>
      </View>
      <View style={styles.boxTypeHouse}>
        <Text style={styles.typeHouse}>{item?.real_estate_type_name}</Text>
      </View>
      <View style={styles.row}>
        <ItemInfo
          value={`${item?.area}${t('m2')}`}
          icon={<Acreage />}
        />
        <ItemInfo
          value={`${item?.bedroom}`}
          icon={<Bedroom />}
        />
        <ItemInfo
          value={`${item?.bathroom}`}
          icon={<Bathroom />}
        />
        <ItemInfo
          value={`${item?.main_direction_name}`}
          icon={<Compass />}
        />
      </View>
      <Text
        style={styles.content}
        numberOfLines={2}
      >
        {item?.title}
      </Text>
      <View style={styles.boxLocation}>
        <Icon
          color={COLOR_GRAY_7}
          name="location-on"
          size={18}
        />
        <Text
          style={styles.location}
          numberOfLines={1}
        >
          {item?.location}
        </Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.row}>
          <View style={styles.boxType}>
            <Text style={styles.type}>
              {t(item?.demand_id === 1 ? 'common.buy' : 'common.lease')}
            </Text>
          </View>
          <Text style={styles.time}>2 phút trước</Text>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={onToLocation}>
            <LocationMaps />
          </TouchableOpacity>
          <TouchableOpacity style={styles.love}>
            <Love />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

ItemHottestRealEstate.defaultProps = {
  item: {},
};

ItemHottestRealEstate.propTypes = {
  item: PropTypes.object,
};

export default ItemHottestRealEstate;
