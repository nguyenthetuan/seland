import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Icon, Image } from '@rneui/themed';
import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View } from 'react-native';

import { Acreage, Bathroom, Bedroom, Compass } from '../../../../../assets';
import { Text } from '../../../../../components';
import { COLORS, SCREENS } from '../../../../../constants';
import styles from './styles';

const ItemInfo = ({ value, icon }: { value?: string; icon?: ReactNode }) => (
  <View style={styles.itemInfo}>
    {icon}
    <Text style={styles.valueInfo}>{value}</Text>
  </View>
);

const ItemRealEstatesAccount = ({ item }: any) => {
  const { t } = useTranslation();
  const { navigate }: NavigationProp<any, any> = useNavigation();

  const onGoDetail = () => {
    navigate(SCREENS.DETAIL_POST, {
      id: item?.id,
    });
  };

  return (
    <TouchableOpacity
      style={styles.boxItem}
      onPress={onGoDetail}
    >
      <View style={styles.leftContent}>
        <View style={styles.boxImage}>
          <Image
            style={styles.image as any}
            source={{
              uri:
                item?.images?.thumbnail?.path_url ||
                'https://media.istockphoto.com/id/1188452511/vi/anh/ph%C3%B2ng-kh%C3%A1ch-scandinavian-%C4%91%E1%BA%A7y-phong-c%C3%A1ch-v%E1%BB%9Bi-thi%E1%BA%BFt-k%E1%BA%BF-gh%E1%BA%BF-sofa-b%E1%BA%A1c-h%C3%A0-%C4%91%E1%BB%93-n%E1%BB%99i-th%E1%BA%A5t-b%E1%BA%A3n-%C4%91%E1%BB%93-%C3%A1p.jpg?s=612x612&w=0&k=20&c=bq42yoAt_R3UG1xNJrNs0EO0Rbxd71TMf_ueRgK-2-g=',
            }}
          />
        </View>
      </View>

      <View style={styles.rightContent}>
        <Text style={styles.title}>
          {`${
            item?.title?.length > 30
              ? item?.title?.slice(0, 26) + '...'
              : item?.title
          }`}
        </Text>

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

        <View style={styles.boxLocation}>
          <Icon
            name="location-on"
            color={COLORS.GRAY_7}
          />
          <Text style={styles.location}>{item?.location}</Text>
        </View>

        <View style={styles.boxPrice}>
          <Text style={styles.price}>
            {`${item?.price} ${item?.price_unit_name}`}{' '}
            <Text style={styles.acreage}>{item?.price_per_m}</Text>
          </Text>
          <Text style={styles.time}>2 phút trước</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemRealEstatesAccount;
