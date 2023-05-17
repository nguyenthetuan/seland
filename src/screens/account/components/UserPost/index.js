import { yupResolver } from '@hookform/resolvers/yup';
import { Icon, Image } from '@rneui/base';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Alert, Linking, Platform, TouchableOpacity, View } from 'react-native';

import { Acreage, Bathroom, Bedroom, Compass } from '../../../../assets';
import { Button, DateTimePicker, Input, Text } from '../../../../components';
import {
  COLOR_BLACK_1,
  COLOR_GRAY_7,
  COLOR_GREEN_1,
  COLOR_GREEN_3,
  COLOR_ORANGE_5,
  COLOR_RED_1,
  COLOR_RED_2,
  COLOR_WHITE,
} from '../../../../constants';
import { yup } from '../../../../utils';
import styles from './styles';

const Info = ({ value, icon }) => (
  <View style={styles.info}>
    {icon}
    <Text style={styles.value}>{value}</Text>
  </View>
);

Info.defaultProps = {
  value: '',
};

Info.propTypes = {
  value: PropTypes.string,
  icon: PropTypes.node.isRequired,
};

const schema = yup.object({
  code: yup.string(),
  validity: yup.string(),
  start_date: yup.string(),
  end_date: yup.string(),
});

const UserPost = ({ item }) => {
  const { t } = useTranslation();
  const {
    clearErrors,
    control,
    getValues,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    defaultValues: {
      code: '',
      validity: '',
      start_date: '',
      end_date: '',
    },
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    Object.keys(getValues()).forEach(
      key => item[key] && setValue(key, item[key])
    );
  });

  const handleCall = () => {
    let phoneNumber;
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

  const rankBackground = () => {
    switch (item?.rank_id) {
      case 1:
        return COLOR_BLACK_1;
      case 2:
        return COLOR_GREEN_3;
      case 3:
        return COLOR_ORANGE_5;
      default:
        return COLOR_RED_1;
    }
  };

  const rankName = () => {
    switch (item?.rank_id) {
      case 2:
        return 'common.vipSilver';
      case 3:
        return 'common.vipGold';
      default:
        return 'common.vipDiamond';
    }
  };

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
        <View style={styles.boxRank}>
          <View>
            {[2, 3, 4].includes(item?.rank_id) && (
              <View style={styles.rank(rankBackground())}>
                <Text style={styles.rankName}>{t(rankName())}</Text>
              </View>
            )}
          </View>
          <TouchableOpacity
            style={styles.call}
            activeOpacity={0.8}
            onPress={handleCall}
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
        <Info
          value={`${item?.area}${t('m2')}`}
          icon={<Acreage />}
        />
        <Info
          value={`${item?.bedroom}`}
          icon={<Bedroom />}
        />
        <Info
          value={`${item?.bathroom}`}
          icon={<Bathroom />}
        />
        <Info
          value={`${item?.main_direction_name}`}
          icon={<Compass />}
        />
      </View>
      <Text style={styles.title(rankBackground())}>
        {`${item?.rank_id === 4 ? '★ ' : ''}${item?.title}`}
      </Text>
      {[2, 3, 4].includes(item?.rank_id) && (
        <Text
          style={styles.content}
          numberOfLines={3}
        >
          {item?.description}
        </Text>
      )}
      <View style={styles.boxLocation}>
        <Icon
          name="location-on"
          color={COLOR_GRAY_7}
        />
        <Text style={styles.location}>{item?.location}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: -40,
          marginTop: 16,
        }}
      >
        <View style={{ flex: 1 }}>
          <Input
            control={control}
            label={t('input.code')}
            name="code"
          />
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Input
            control={control}
            label={t('input.validity')}
            name="validity"
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 16,
        }}
      >
        <View style={{ flex: 1 }}>
          <DateTimePicker
            control={control}
            label={t('input.start_date')}
            name="start_date"
          />
        </View>
        <View style={{ flex: 1 }}>
          <DateTimePicker
            control={control}
            label={t('input.end_date')}
            name="end_date"
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 16,
        }}
      >
        <View style={{ flex: 1, marginLeft: 8, marginRight: 4 }}>
          <Button
            color={COLOR_GREEN_1}
            title="Sửa tin"
          />
        </View>
        <View style={{ flex: 1, marginHorizontal: 4 }}>
          <Button
            color={COLOR_RED_2}
            title="Hạ tin"
          />
        </View>
        <View style={{ flex: 1, marginLeft: 4, marginRight: 8 }}>
          <Button title="Thao tác" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

UserPost.defaultProps = {
  item: {},
};

UserPost.propTypes = {
  item: PropTypes.object,
};

export default UserPost;
