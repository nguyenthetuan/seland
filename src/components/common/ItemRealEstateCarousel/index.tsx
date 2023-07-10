import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import React, { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Alert,
  Image,
  Linking,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  AcreageSmall,
  Bathroom,
  Bedroom,
  Compass,
  IconPreImage,
  LocationMapsSmall,
  LoveSmall,
} from '../../../assets';
import { IconSvg } from '../../../assets/icons/IconSvg';
import { Text } from '../..';
import { COLORS, SCREENS } from '../../../constants';
import REAL_ESTATE from '../../../constants/realEstate';
import styles from './styles';

const ItemInfo = ({ value, icon }: { value?: string; icon?: ReactNode }) => (
  <View style={styles.itemInfo}>
    {icon}
    <Text style={styles.valueInfo}>{value}</Text>
  </View>
);

interface ItemRealEstateCarouselProps {
  item: {
    id: never;
    images: any;
    project_name: ReactNode;
    real_estate_type_name: ReactNode;
    price_range: any;
    price_range_per_m: ReactNode;
    blocks: any;
    apartment: any;
    price: any;
    price_unit_name: any;
    price_per_m: any;
    area: any;
    bedroom: string;
    bathroom: string;
    main_direction_name: string;
    title: ReactNode;
    location: ReactNode;
    demand_id: number;
    phone_number: string;
  };
  type?: string;
  onOpenMap?: Function;
}
const ItemRealEstateCarousel: FC<ItemRealEstateCarouselProps> = ({
  item,
  type,
  onOpenMap,
}) => {
  const { t } = useTranslation();
  const { push }: NavigationProp<any, any> = useNavigation();

  const onPressCall = () => {
    let phoneNumber: string = item?.phone_number;
    if (Platform.OS !== 'android') {
      phoneNumber = `telprompt:${item?.phone_number}`;
    } else {
      phoneNumber = `tel:${item?.phone_number}`;
    }

    Linking.canOpenURL(phoneNumber).then(supported => {
      if (!supported) {
        Alert.alert(t('common.unsupportedPhoneNumber'));
      } else {
        Linking.openURL(phoneNumber);
      }
    });
  };

  const onToLocation = () => {
    onOpenMap && onOpenMap();
  };

  const onGoDetail = () => {
    push(SCREENS.DETAIL_POST, {
      id: item?.id,
    });
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onGoDetail}
    >
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
          <View>
            {[REAL_ESTATE.REAL_ESTATE_HOSTEST].includes(type) && (
              <View style={styles.boxMonopoly}>
                <Text
                  style={styles.monopoly}
                  onPress={() => Alert.alert('ok')}
                >
                  {t('common.monopoly')}
                </Text>
              </View>
            )}
          </View>
          {type === REAL_ESTATE.PROJECT ? (
            <View />
          ) : (
            <TouchableOpacity
              style={styles.call}
              activeOpacity={0.8}
              onPress={onPressCall}
            >
              <Icon
                name="phone"
                size={23}
                color={COLORS.WHITE}
              />
            </TouchableOpacity>
          )}
        </View>
        {item?.images?.total > 0 && (
          <View style={styles.boxTotalImage}>
            <View style={styles.boxTotalIcon}>
              <IconPreImage />
            </View>
            <Text style={styles.boxTotalText}>{item?.images?.total}</Text>
          </View>
        )}
      </View>
      <View style={styles.boxContent}>
        {type === REAL_ESTATE.PROJECT ? (
          <>
            <View style={styles.boxTitle}>
              <Text
                numberOfLines={1}
                style={styles.projectName}
              >
                {item?.project_name}
              </Text>
              <View style={styles.boxTypeHouse}>
                <Text style={styles.typeHouse}>
                  {item?.real_estate_type_name}
                </Text>
              </View>
            </View>
            <Text style={styles.price}>{`${item?.price_range}`}</Text>
            <Text style={styles.acreage}>{item?.price_range_per_m}</Text>
            <View style={styles.boxScale}>
              <Icon
                name="domain"
                size={14}
              />
              <Text style={styles.scale}>
                {` ${t('common.scale')}: ${item?.blocks} block, ${
                  item?.apartment
                } ${t('common.apartment')}`}
              </Text>
            </View>
          </>
        ) : (
          <>
            <View style={styles.boxPrice}>
              <Text style={styles.price}>
                {`${item?.price} ${item?.price_unit_name}`}{' '}
                <Text style={styles.acreage}>{`${item?.price_per_m}`}</Text>
              </Text>
            </View>
            <View style={styles.boxEstateTypeName}>
              <View style={styles.boxTypeHouse}>
                <Text style={styles.typeHouse}>
                  {item?.real_estate_type_name}
                </Text>
              </View>
            </View>
            <View style={styles.row}>
              <ItemInfo
                value={`${item?.area}${t('m2')}`}
                icon={<AcreageSmall />}
              />
              <ItemInfo
                value={item?.bedroom || '--'}
                icon={<Bedroom />}
              />
              <ItemInfo
                value={item?.bathroom || '--'}
                icon={<Bathroom />}
              />
              <ItemInfo
                value={item?.main_direction_name || '--'}
                icon={<Compass />}
              />
            </View>
            <Text
              style={styles.content}
              numberOfLines={2}
            >
              {item?.title}
            </Text>
          </>
        )}
        <View style={styles.boxLocation}>
          <IconSvg name="location" />
          <Text
            style={styles.location}
            numberOfLines={1}
          >
            {item?.location}
          </Text>
        </View>
        <View style={styles.footer}>
          {type === REAL_ESTATE.PROJECT ? (
            <View style={styles.boxFooterProject}>
              <View style={styles.boxSale}>
                <Text style={styles.sale}>{t('common.onSale')}</Text>
              </View>
              <View style={styles.row}>
                <TouchableOpacity
                  style={styles.row}
                  onPress={onToLocation}
                >
                  <LocationMapsSmall />
                  <Text style={styles.map}>{t('common.map')}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.love}>
                  <LoveSmall />
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <>
              <View style={styles.row}>
                <View style={styles.boxType}>
                  <Text style={styles.type}>
                    {t(item?.demand_id === 1 ? 'common.buy' : 'common.lease')}
                  </Text>
                </View>
                <Text
                  style={[
                    styles.time,
                    item?.demand_id === 1 ? {} : { width: '40%' },
                  ]}
                  numberOfLines={1}
                >
                  2 phút trước
                </Text>
              </View>
              <View style={styles.row}>
                <TouchableOpacity onPress={onToLocation}>
                  <LocationMapsSmall />
                </TouchableOpacity>
                <TouchableOpacity style={styles.love}>
                  <LoveSmall />
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemRealEstateCarousel;
