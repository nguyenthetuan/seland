import { Icon } from '@rneui/base';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Image, TouchableOpacity, View } from 'react-native';

import {
  AcreageSmall,
  Bathroom,
  Bedroom,
  Compass,
  LocationMapsSmall,
  LoveSmall,
} from '../../../../assets';
import { Text } from '../../../../components';
import { COLOR_GRAY_7, COLOR_WHITE } from '../../../../constants';
import REAL_ESTATE from '../../../../constants/realEstate';
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

const ItemHottestRealEstate = ({ item, type }) => {
  const { t } = useTranslation();

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
          <View>
            {[REAL_ESTATE.PROJECT, REAL_ESTATE.REAL_ESTATE_FOR_YOU].includes(
              type
            ) && (
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
                color={COLOR_WHITE}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.boxContent}>
        {type === REAL_ESTATE.PROJECT ? (
          <>
            <View style={styles.boxTitle}>
              <Text>Urban Hill</Text>
              <View style={styles.boxTypeHouse}>
                <Text style={styles.typeHouse}>
                  {item?.real_estate_type_name}
                </Text>
              </View>
            </View>
            <Text style={styles.price}>
              {`${item?.price} ${item?.price_unit_name}`}
            </Text>
            <Text style={styles.acreage}>
              {`39.13 - 44.44 ${t('common.millionPerM2')}`}
            </Text>
            <View style={styles.boxScale}>
              <Icon
                name="domain"
                size={14}
              />
              <Text style={styles.scale}>Quy mô: 2 block, 164 căn hộ</Text>
            </View>
          </>
        ) : (
          <>
            <View style={styles.boxPrice}>
              <Text style={styles.price}>
                {`${item?.price} ${item?.price_unit_name}`}{' '}
                <Text style={styles.acreage}>
                  {`${item?.price_per_m} ${t('common.millionPerM2')}`}
                </Text>
              </Text>
            </View>
            <View style={styles.boxTypeHouse}>
              <Text style={styles.typeHouse}>
                {item?.real_estate_type_name}
              </Text>
            </View>
            <View style={styles.row}>
              <ItemInfo
                value={`${item?.area}${t('m2')}`}
                icon={<AcreageSmall />}
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
          </>
        )}
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
                <Text style={styles.time}>2 phút trước</Text>
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

ItemHottestRealEstate.defaultProps = {
  item: {},
  type: '',
};

ItemHottestRealEstate.propTypes = {
  type: PropTypes.string,
  item: PropTypes.object,
};

export default ItemHottestRealEstate;