import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import styles from './styles';
import {
  Acreage,
  Icon360,
  IconCalculator,
  IconYoutube,
} from '../../../../../assets';
import { COLOR_BLUE_2 } from '../../../../../constants';
import { Button, Text } from '../../../../../components';
import IconMapWhite from '../../../../../assets/icons/mapWhite';
import IconLocation from '../../../../../assets/icons/IconLocation';
import { IconSvg } from '../../../../../assets/icons/IconSvg';

interface Iprops {}

const AboutPost: FC<Iprops> = props => {
  const { t } = useTranslation();

  const listInfoItem = [
    {
      label: t('common.acreage'),
      icon: <Acreage />,
      value: '1.433 m²',
    },
    {
      label: t('input.length'),
      icon: (
        <IconSvg
          name="length"
          width={12}
          height={21}
        />
      ),
      value: '30m',
    },
    {
      label: t('input.width'),
      icon: (
        <IconSvg
          name="width"
          width={21}
          height={12}
        />
      ),
      value: '20m',
    },
    {
      label: t('common.compass'),
      icon: (
        <IconSvg
          name="compass"
          width={24}
          height={24}
        />
      ),
      value: 'Tây',
    },
    {
      label: t('common.bedroom'),
      icon: (
        <IconSvg
          name="bedroom"
          width={24}
          height={24}
        />
      ),
      value: '3',
    },
    {
      label: t('common.bathroom'),
      icon: (
        <IconSvg
          name="bathroom"
          width={24}
          height={24}
        />
      ),
      value: '3',
    },
  ];

  return (
    <View style={styles.aboutPost}>
      <View style={styles.seeMore}>
        <IconMapWhite color={COLOR_BLUE_2} />
        <Text style={styles.textViewMap}>{t('detailPost.seeMap') || ''}</Text>
        <View style={styles.icon}>
          <Icon360 />
        </View>
        <View style={styles.icon}>
          <IconYoutube />
        </View>
      </View>
      <Text style={styles.aboutPostTitle}>
        Bán nhà 219 Trung Kính, 3 tầng 200m2. Mặt đường, ô tô đi lại dễ dàng
      </Text>
      <View style={styles.boxBuy}>
        <View style={styles.buy}>
          <Text style={styles.buyText}>{t('button.buy')}</Text>
        </View>
        <Text style={styles.buyTime}>2 phút trước</Text>
      </View>
      <View style={styles.Boxlocation}>
        <IconLocation
          width={12}
          height={17}
        />
        <Text style={styles.textAddress}>
          Số 04 Đào Trí, Phường Phú Mỹ, Quận 7, Hồ Chí Minh
        </Text>
      </View>
      <View style={styles.BoxPrice}>
        <Text style={styles.BoxPriceRed}>1.36 tỷ</Text>
        <Text style={styles.BoxPriceGray}>20.92 triệu/m²</Text>
        <View style={styles.calculator}>
          <IconCalculator />
          <Text style={styles.calculatorText}>
            {t('detailPost.installment')}
          </Text>
        </View>
      </View>
      <View style={styles.BoxListInfo}>
        {listInfoItem?.map((info, index) => {
          return (
            <View
              style={
                index === 2 || index === 5
                  ? styles.itemInfoLast
                  : styles.itemInfo
              }
              key={info.label}
            >
              <View style={styles.itemIcon}>
                {info.icon}
                <Text style={styles.infoValue}>{info.value}</Text>
              </View>
              <Text style={styles.infoTitle}>{info.label}</Text>
            </View>
          );
        })}
      </View>
      <View style={styles.BoxAbout}>
        <Text style={styles.aboutTitle}>{t('common.about')}</Text>
        <Text style={styles.aboutText}>
          SIÊU PHẨM TẠI HUYỆN KIM BÔI. BÁM SÔNG - BÁM ĐƯỜNG . NGHỈ DƯỠNG TUYỆT
          VỜI Vị trí tại: xã Kim Lập - Huyện Kim Bôi- tỉnh Hòa Bình
        </Text>
        <Button
          buttonStyle={styles.aboutButton}
          title={t('button.seeAll')}
          outline
        />
      </View>
    </View>
  );
};

export default AboutPost;
