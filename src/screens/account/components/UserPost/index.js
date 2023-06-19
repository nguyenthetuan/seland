import { yupResolver } from '@hookform/resolvers/yup';
import { Icon, Image } from '@rneui/themed';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Alert, Linking, Platform, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Acreage, Bathroom, Bedroom, Compass } from '../../../../assets';
import { Button, Input, Text } from '../../../../components';
import { COLORS } from '../../../../constants';
import {
  deleteRealEstatesUser,
  selectUserRealEstates,
} from '../../../../features';
import { dispatchThunk, yup } from '../../../../utils';
import styles from './styles';

const Info = ({ value, icon }) => (
  <View style={[styles.info, styles.row]}>
    {icon}
    <Text style={styles.value}>{value}</Text>
  </View>
);

Info.defaultProps = {
  value: '',
};

Info.propTypes = {
  icon: PropTypes.node.isRequired,
  value: PropTypes.string,
};

const schema = yup.object({
  code: yup.string(),
  validity: yup.string(),
  start_date: yup.string(),
  end_date: yup.string(),
});

const UserPost = ({ item }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { loadingDelete } = useSelector(selectUserRealEstates);

  const { control, getValues, setValue } = useForm({
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
    const callUrl = `tel${Platform.OS === 'android' ? '' : 'prompt'}:${
      item?.phone_number
    }`;
    Linking.canOpenURL(callUrl).then(supported => {
      if (!supported) {
        Alert.alert(t('common.unsupportedPhoneNumber'));
      } else {
        Linking.openURL(callUrl);
      }
    });
  };

  const rankBackground = () => {
    switch (item?.rank_id) {
      case 1:
        return COLORS.BLACK_1;
      case 2:
        return COLORS.GREEN_3;
      case 3:
        return COLORS.ORANGE_5;
      default:
        return COLORS.RED_1;
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
  const onDeletePost = async () => {
    try {
      if (item?.id) {
        await dispatchThunk(dispatch, deleteRealEstatesUser(item?.id));
        Alert.alert(t('common.deleteSuccess'));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableOpacity style={styles.item}>
      <Image
        style={styles.image}
        source={{
          uri:
            item?.images?.thumbnail?.path_url ||
            'https://media.istockphoto.com/id/1188452511/vi/anh/ph%C3%B2ng-kh%C3%A1ch-scandinavian-%C4%91%E1%BA%A7y-phong-c%C3%A1ch-v%E1%BB%9Bi-thi%E1%BA%BFt-k%E1%BA%BF-gh%E1%BA%BF-sofa-b%E1%BA%A1c-h%C3%A0-%C4%91%E1%BB%93-n%E1%BB%99i-th%E1%BA%A5t-b%E1%BA%A3n-%C4%91%E1%BB%93-%C3%A1p.jpg?s=612x612&w=0&k=20&c=bq42yoAt_R3UG1xNJrNs0EO0Rbxd71TMf_ueRgK-2-g=',
        }}
      />
      <View style={[styles.rankContainer, styles.row]}>
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
            color={COLORS.WHITE}
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.priceContainer, styles.row]}>
        <Text style={styles.price}>
          {`${item?.price} ${item?.price_unit_name}`}{' '}
          <Text style={styles.acreage}>{item?.price_per_m}</Text>
        </Text>
      </View>
      <View style={styles.typeContainer}>
        <Text style={styles.type}>{item?.real_estate_type_name}</Text>
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
      <View style={[styles.locationContainer, styles.row]}>
        <Icon
          name="location-on"
          color={COLORS.GRAY_7}
        />
        <Text style={styles.location}>{item?.location}</Text>
      </View>
      <View style={styles.inputs}>
        <Input
          control={control}
          disabled
          label={t('input.code')}
          name="code"
          inputContainerStyle={styles.inputContainerStyle}
          renderErrorMessage={false}
        />
        <Input
          control={control}
          disabled
          label={t('input.validity')}
          name="validity"
          inputContainerStyle={styles.inputContainerStyle}
          renderErrorMessage={false}
          rightIcon={<Text>{t('input.days')}</Text>}
        />
      </View>
      <View style={styles.inputs}>
        <Input
          control={control}
          disabled
          inputContainerStyle={styles.inputContainerStyle}
          label={t('input.start_date')}
          name="start_date"
          renderErrorMessage={false}
        />
        <Input
          control={control}
          disabled
          inputContainerStyle={styles.inputContainerStyle}
          label={t('input.end_date')}
          name="end_date"
          renderErrorMessage={false}
        />
      </View>
      <View style={[styles.buttons, styles.row]}>
        <View style={[styles.buttonLeft, styles.flex]}>
          <Button
            color={COLORS.GREEN_1}
            title={t('button.editPost')}
          />
        </View>
        <View style={[styles.flex, styles.buttonMiddle]}>
          <Button
            color={COLORS.RED_2}
            title={t('button.hidePost')}
            onPress={onDeletePost}
            loading={loadingDelete}
          />
        </View>
        <View style={[styles.flex, styles.buttonRight]}>
          <Button title={t('button.actions')} />
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
