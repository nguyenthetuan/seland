import { Icon, Image } from '@rneui/base';
import PropTypes from 'prop-types';
import React from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';

import {
  Acreage,
  Bathroom,
  Bedroom,
  Compass,
  LocationMaps,
  Love,
} from '../../../../assets';
import { Text } from '../../../../components';
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

const ItemPosts = () => (
  <TouchableOpacity style={styles.boxItem}>
    <View style={styles.boxImage}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://media.istockphoto.com/id/1188452511/vi/anh/ph%C3%B2ng-kh%C3%A1ch-scandinavian-%C4%91%E1%BA%A7y-phong-c%C3%A1ch-v%E1%BB%9Bi-thi%E1%BA%BFt-k%E1%BA%BF-gh%E1%BA%BF-sofa-b%E1%BA%A1c-h%C3%A0-%C4%91%E1%BB%93-n%E1%BB%99i-th%E1%BA%A5t-b%E1%BA%A3n-%C4%91%E1%BB%93-%C3%A1p.jpg?s=612x612&w=0&k=20&c=bq42yoAt_R3UG1xNJrNs0EO0Rbxd71TMf_ueRgK-2-g=',
        }}
      />
    </View>
    <View style={styles.boxPrice}>
      <Text style={styles.price}>
        1.36 tỷ <Text style={styles.acreage}>20.92 triệu/m²</Text>
      </Text>
      <Text
        style={styles.monopoly}
        onPress={() => Alert.alert('ok')}
      >
        Độc quyền
      </Text>
    </View>
    <View>
      <Text style={styles.typeHouse}>Chung cư</Text>
    </View>
    <View style={styles.row}>
      <ItemInfo
        value="65m2"
        icon={<Acreage />}
      />
      <ItemInfo
        value="3"
        icon={<Bedroom />}
      />
      <ItemInfo
        value="3"
        icon={<Bathroom />}
      />
      <ItemInfo
        value="D.N"
        icon={<Compass />}
      />
    </View>
    <Text style={styles.label}>
      Bán cắt giảm sâu lô kề góc hướng đông MegaCity konTUM
    </Text>
    <Text style={styles.content}>
      Bán căn chung cư 36m21PN - 1VS nhà mới full đồ đẹpKhông gian thoáng, nhiều
      tiện ích như : đường dạo bộ ven hồ, bể bơi, công viên,...Nhà mới, giá cắt
      lỗNhận nhà cho thuê được luôn.
    </Text>
    <View style={styles.boxLocation}>
      <Icon
        name="location-on"
        color="#595959"
      />
      <Text style={styles.location}>Phường 15, Quận Tân Bình, TPHCM</Text>
    </View>
    <View style={styles.footer}>
      <View style={styles.row}>
        <Text style={styles.type}>Bán</Text>
        <Text style={styles.time}>2 phút trước</Text>
      </View>
      <View style={styles.row}>
        <LocationMaps />
        <View style={styles.distance} />
        <Love />
      </View>
    </View>
  </TouchableOpacity>
);

export default ItemPosts;
