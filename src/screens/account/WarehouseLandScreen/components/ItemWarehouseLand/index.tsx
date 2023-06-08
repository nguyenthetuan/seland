import { Icon, Image } from '@rneui/themed';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View } from 'react-native';
import { IconEyes, IconUploadWhite, Location } from '../../../../../assets';
import { Button, Text } from '../../../../../components';
import ActionWarehouseLand from '../ActionWarehouseLand';
import DisplayPositionPost from '../DisplayPositionPost';
import styles from './styles';

interface Iprops {
  item: any;
}
const ItemWarehouseLand: FC<Iprops> = ({ item }) => {
  const { t } = useTranslation();

  return (
    <TouchableOpacity style={styles.boxItem}>
      <View style={styles.boxImage}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://media.istockphoto.com/id/1188452511/vi/anh/ph%C3%B2ng-kh%C3%A1ch-scandinavian-%C4%91%E1%BA%A7y-phong-c%C3%A1ch-v%E1%BB%9Bi-thi%E1%BA%BFt-k%E1%BA%BF-gh%E1%BA%BF-sofa-b%E1%BA%A1c-h%C3%A0-%C4%91%E1%BB%93-n%E1%BB%99i-th%E1%BA%A5t-b%E1%BA%A3n-%C4%91%E1%BB%93-%C3%A1p.jpg?s=612x612&w=0&k=20&c=bq42yoAt_R3UG1xNJrNs0EO0Rbxd71TMf_ueRgK-2-g=',
          }}
        />
        <View style={styles.headerImage}>
          <View style={styles.boxStatus}>
            <IconEyes />
            <Text style={styles.boxStatusText}>{t('common.active')}</Text>
          </View>
          <View style={styles.boxVirtualNews}>
            <Text style={styles.boxVirtualText}>{t('common.virtualNews')}</Text>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.boxBreadcrumb}>
          <Text style={styles.boxBreadcrumbText}>Bán căn hộ chung cư </Text>
          <Text style={styles.boxBreadcrumbIcon}>{'>'}</Text>
          <Text style={styles.boxBreadcrumbText}>Quận Cầu Giấy</Text>
        </View>
        <View style={styles.boxPrice}>
          <Text style={styles.price}>
            {item?.price_range} {''}
            <Text style={styles.acreage}>{item?.price_range_per_m}</Text>
          </Text>
          <View style={styles.freeNews}>
            <Text style={styles.freeNewsText}>{t('common.freeNews')}</Text>
          </View>
        </View>
        <Text style={styles.title}>
          Bán cắt giảm sâu lô kề góc hướng đông MegaCity konTum giá 575tr
        </Text>
        <View style={styles.infoWarehouse}>
          <View style={styles.nameWarehouse}>
            <Text style={styles.nameWarehouseText}>Kho Tân Bình</Text>
          </View>
          <Text style={styles.codeTitle}>
            {t('input.code')}:{''}
            <Text style={styles.codeText}>632493</Text>
          </Text>
        </View>

        <View style={styles.boxLocation}>
          <Location />
          <Text style={styles.location}>{item?.location}</Text>
        </View>
        <View style={styles.infoWarehouse}>
          <View style={styles.time}>
            <Text style={styles.dateTime}>
              {t('common.dateStart')}: 06/06/2023
            </Text>
            <Text style={styles.dateTime}>
              {t('common.expirationDate')}: 10/06/2023
            </Text>
          </View>
          <ActionWarehouseLand />
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
