import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { Icon, Image } from '@rneui/themed';
import React, { useEffect, ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Alert, Linking, Platform, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';

import { Acreage, Bathroom, Bedroom, Compass } from '../../../../assets';
import { Button, Input, Text } from '../../../../components';
import { COLORS, SCREENS } from '../../../../constants';
import { selectUserRealEstates } from '../../../../features';
import { yup } from '../../../../utils';
import styles from './styles';

const STATUS_NAME = {
  PUBLIC_POSTS: 'Công khai',
  PUBLIC: 'Công khai',
  HIDDEN: 'Đã hạ',
  REJECTED: 'Không duyệt',
  EXPIRED: 'Hết hạn',
  PRIVATE_POSTS: 'Riêng tư',
  DRAFF_POSTS: 'Tin nháp',
  PENDING_REVIEW: 'Chờ duyệt',
};

const Info = ({ value, icon }: { value?: string; icon?: ReactNode }) => (
  <View style={[styles.info, styles.row]}>
    {icon}
    <Text style={styles.value}>{value}</Text>
  </View>
);

const schema = yup.object({
  code: yup.string(),
  validity: yup.string(),
  start_date: yup.string(),
  end_date: yup.string(),
});

interface UserPostProps {
  item?: any;
  type?: 'DRAFT' | 'PRIVATE' | 'PUBLIC';
  deletePost?: Function;
}

const UserPost = ({ item, type, deletePost }: UserPostProps) => {
  const { navigate } = useNavigation();
  const { t } = useTranslation();
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

  const tagBackground = () => {
    switch (item?.status_name) {
      case STATUS_NAME.PUBLIC:
        return COLORS.GREEN_1;
      case STATUS_NAME.PENDING_REVIEW:
        return COLORS.YELLOW_8;
      case STATUS_NAME.REJECTED:
      case STATUS_NAME.EXPIRED:
      case STATUS_NAME.HIDDEN:
        return COLORS.RED_2;
      case STATUS_NAME.DRAFF_POSTS:
      case STATUS_NAME.PRIVATE_POSTS:
        return COLORS.PURPLE_2;
      default:
        return COLORS.RED_1;
    }
  };

  const rankNameColor = () => {
    switch (item?.status_name) {
      case STATUS_NAME.PUBLIC:
      case STATUS_NAME.PENDING_REVIEW:
      case STATUS_NAME.REJECTED:
      case STATUS_NAME.EXPIRED:
      case STATUS_NAME.HIDDEN:
        return COLORS.WHITE_1;
      case STATUS_NAME.DRAFF_POSTS:
      case STATUS_NAME.PRIVATE_POSTS:
        return COLORS.BLACK_1;
      default:
        return COLORS.BLACK_1;
    }
  };

  const rankName = () => {
    switch (item?.status_name) {
      case STATUS_NAME.PUBLIC:
        return t('common.active');
      default:
        return item?.status_name;
    }
  };
  const onDeletePost = () => {
    deletePost && deletePost(item.id);
  };

  const navigateToEdit = () => {
    navigate(SCREENS.CREATE_POST, { edit: true, id: item.id, type });
  };

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={navigateToEdit}
    >
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
          {item?.status_name && (
            <View style={styles.tag(tagBackground())}>
              <Text style={styles.rankName(rankNameColor())}>{rankName()}</Text>
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
      <View style={styles.boxEstateTypeName}>
        <View style={styles.typeContainer}>
          <Text style={styles.type}>{item?.real_estate_type_name}</Text>
        </View>
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
      <Text style={styles.title}>
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
      <View style={[styles.buttons, styles.row, { flex: 1 }]}>
        <View style={[styles.buttonLeft, { flex: type === 'DRAFT' ? 1 : 0.5 }]}>
          <Button
            color={COLORS.GREEN_1}
            title={t('button.editPost')}
            onPress={navigateToEdit}
          />
        </View>
        {type === 'DRAFT' ? (
          <View style={[styles.buttonLeft, { flex: 1 }]}>
            <Button
              color={COLORS.RED_2}
              title={t('button.delete')}
              onPress={onDeletePost}
              loading={loadingDelete}
            />
          </View>
        ) : (
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <View style={[styles.buttonMiddle, { flex: 1 }]}>
              {/* Todo xoa tin, sau thay UI item khac */}
              <Button
                color={COLORS.RED_2}
                title={t('button.delete')}
                onPress={onDeletePost}
                loading={loadingDelete}
              />
            </View>
            <View style={[styles.buttonRight, { flex: 1 }]}>
              <Button title={t('button.actions')} />
            </View>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default UserPost;
