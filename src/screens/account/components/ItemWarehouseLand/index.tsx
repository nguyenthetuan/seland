import { Image } from '@rneui/themed';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View } from 'react-native';
import {
  IconEyes,
  IconUploadWhite,
  Location,
  IconEyesBlack,
} from '../../../../assets';
import { Button, Text } from '../../../../components';
import { IItemWarehouse } from '../../../../utils/interface/warehouse';
import ActionWarehouseLand from '../../WarehouseLandScreen/components/ActionWarehouseLand';
import DisplayPositionPost from '../../WarehouseLandScreen/components/DisplayPositionPost';
import styles from './styles';
import { COLORS } from '../../../../constants';
import { rankPost } from '../../../../utils/realEstates';

interface Iprops {
  item: IItemWarehouse;
  onDelete?: Function;
  onEdit?: Function;
}
const ItemWarehouseLand: FC<Iprops> = ({ item, onDelete, onEdit }) => {
  const { t } = useTranslation();

  const onDeletePost = (id?: number) => {
    onDelete && onDelete(id);
  };

  const onEditPost = (id?: number) => {
    onEdit && onEdit(id);
  };

  const backgroundBoxStatus = () => {
    let background = '';
    switch (item?.status) {
      case 1:
        background = COLORS.GREEN_1;
        break;
      case 2:
        background = COLORS.PURPLE_2;
        break;
      case 3:
        background = COLORS.YELLOW_8;
        break;
      case 5:
      case 6:
      case 0:
        background = COLORS.RED_2;
        break;
      default:
        background = COLORS.GREEN_1;
        break;
    }
    return {
      backgroundColor: background,
    };
  };

  return (
    <TouchableOpacity style={styles.boxItem}>
      <View style={styles.boxImage}>
        <Image
          style={styles.image}
          source={
            item?.images?.thumbnail?.path_url
              ? { uri: item.images.thumbnail.path_url }
              : {
                  uri: 'https://media.istockphoto.com/id/1188452511/vi/anh/ph%C3%B2ng-kh%C3%A1ch-scandinavian-%C4%91%E1%BA%A7y-phong-c%C3%A1ch-v%E1%BB%9Bi-thi%E1%BA%BFt-k%E1%BA%BF-gh%E1%BA%BF-sofa-b%E1%BA%A1c-h%C3%A0-%C4%91%E1%BB%93-n%E1%BB%99i-th%E1%BA%A5t-b%E1%BA%A3n-%C4%91%E1%BB%93-%C3%A1p.jpg?s=612x612&w=0&k=20&c=bq42yoAt_R3UG1xNJrNs0EO0Rbxd71TMf_ueRgK-2-g=',
                }
          }
        />
        <View style={styles.headerImage}>
          <View style={[styles.boxStatus, backgroundBoxStatus()]}>
            {item?.status === 2 ? <IconEyesBlack /> : <IconEyes />}
            <Text
              style={[
                styles.boxStatusText,
                { color: item?.status === 2 ? COLORS.BLACK_1 : COLORS.WHITE },
              ]}
            >
              {item?.status_name}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.boxBreadcrumb}>
          <Text style={styles.boxBreadcrumbText}>{item?.type}</Text>
          <Text style={styles.boxBreadcrumbIcon}>{'>'}</Text>
          <Text style={styles.boxBreadcrumbText}>{item?.district_name}</Text>
        </View>
        <View style={styles.boxPrice}>
          <Text style={styles.price}>
            {item?.price} {item?.price_unit_name}
            <Text style={styles.acreage}>{` ${item?.price_per_m}`}</Text>
          </Text>
          {item?.status === 1 && [1, 2, 3, 4].includes(item?.rank_id) && (
            <View
              style={[
                styles.freeNews,
                { backgroundColor: rankPost(item?.rank_id)?.color },
              ]}
            >
              <Text style={styles.freeNewsText}>{item?.rank_name}</Text>
            </View>
          )}
        </View>
        <Text style={styles.title}>{item?.title}</Text>
        <View style={styles.infoWarehouse}>
          <View style={styles.nameWarehouse}>
            <Text style={styles.nameWarehouseText}>Kho Tân Bình</Text>
          </View>
          <Text
            numberOfLines={1}
            style={styles.txtAcreage}
          >
            {t('common.acreage')}:{' '}
            <Text style={styles.area}>{item?.area}m2</Text>
          </Text>
          {item?.code && (
            <Text
              style={styles.codeTitle}
              numberOfLines={1}
            >
              {t('input.code')}:{' '}
              <Text style={styles.codeText}>{item?.code}</Text>
            </Text>
          )}
        </View>

        <View style={styles.boxLocation}>
          <Location />
          <Text style={styles.location}>{item?.location}</Text>
        </View>
        <View style={styles.infoWarehouse}>
          <View style={styles.time}>
            <Text style={styles.dateTime}>
              {t('common.dateStart')}: {item?.start_date}
            </Text>
            <Text style={styles.dateTime}>
              {t('common.expirationDate')}: {item?.end_date}
            </Text>
          </View>
          <ActionWarehouseLand
            onDelete={() => onDeletePost(item?.id)}
            onEdit={() => onEditPost(item?.id)}
          />
        </View>
        <DisplayPositionPost />
      </View>
      <Button
        title={t('common.pushNews')}
        radius={4}
        buttonStyle={styles.buttonPushNews}
        icon={<IconUploadWhite />}
        titleStyle={styles.titleButton}
      />
    </TouchableOpacity>
  );
};

export default ItemWarehouseLand;
