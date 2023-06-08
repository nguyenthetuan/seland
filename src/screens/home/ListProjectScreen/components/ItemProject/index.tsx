import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles';
import { TouchableOpacity, View } from 'react-native';
import { Image } from '@rneui/base';
import { Text } from '../../../../../components';
import { LocationMaps, Love, Building, Location } from '../../../../../assets';

interface Iprops {
  item: any;
}

const ItemProject: FC<Iprops> = props => {
  const { t } = useTranslation();
  const { item } = props;
  const onToLocation = () => {};

  return (
    <TouchableOpacity style={styles.boxItem}>
      <View style={styles.boxImage}>
        <Image
          style={styles.image}
          source={{
            uri:
              item?.images?.thumbnail?.path_url ||
              'https://media.istockphoto.com/id/1188452511/vi/anh/ph%C3%B2ng-kh%C3%A1ch-scandinavian-%C4%91%E1%BA%A7y-phong-c%C3%A1ch-v%E1%BB%9Bi-thi%E1%BA%BFt-k%E1%BA%BF-gh%E1%BA%BF-sofa-b%E1%BA%A1c-h%C3%A0-%C4%91%E1%BB%93-n%E1%BB%99i-th%E1%BA%A5t-b%E1%BA%A3n-%C4%91%E1%BB%93-%C3%A1p.jpg?s=612x612&w=0&k=20&c=bq42yoAt_R3UG1xNJrNs0EO0Rbxd71TMf_ueRgK-2-g=',
          }}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.boxName}>
          <Text style={styles.name}>{item?.project_name}</Text>
          <View style={styles.boxMonopoly}>
            <Text style={styles.monopoly}> {t('common.monopoly')}</Text>
          </View>
        </View>
        <View style={styles.boxTypeHouse}>
          <Text style={styles.typeHouse}>{item?.real_estate_type_name}</Text>
        </View>
        <View style={styles.boxPrice}>
          <Text style={styles.price}>
            {`${item?.price_range}`} {''}
            <Text style={styles.acreage}>{item?.price_range_per_m}</Text>
          </Text>
        </View>
        <View style={styles.boxScale}>
          <Building />

          <Text style={styles.scale}>{t('common.scale')}:</Text>
          <Text style={styles.scale}>
            {`${item?.blocks} block`},{' '}
            {`${item?.apartment} ${t('common.apartment')}`}
          </Text>
        </View>
        <View style={styles.boxLocation}>
          <Location />
          <Text
            style={styles.location}
            numberOfLines={1}
          >
            {item?.location}
          </Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.status}>
            {item?.status === 1 && (
              <Text style={styles.textStatus}>{t('common.onSale')}</Text>
            )}
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              onPress={onToLocation}
              style={styles.map}
            >
              <LocationMaps />
              <Text style={styles.textMap}>{t('common.map')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.love}>
              <Love />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemProject;
