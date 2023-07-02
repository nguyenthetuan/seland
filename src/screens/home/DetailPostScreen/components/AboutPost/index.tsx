import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Linking,
  useWindowDimensions,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {
  Acreage,
  Icon360,
  IconCalculator,
  IconYoutube,
} from '../../../../../assets';
import { COLORS, SCREENS } from '../../../../../constants';
import { Button, Text } from '../../../../../components';
import IconMapWhite from '../../../../../assets/icons/mapWhite';
import IconLocation from '../../../../../assets/icons/IconLocation';
import { IconSvg } from '../../../../../assets/icons/IconSvg';
import { IRealEstateDetails } from '../../../../../utils/interface/realEstateDetails';
import RenderHtml from 'react-native-render-html';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

interface Iprops {
  infoDetail: IRealEstateDetails;
}

const AboutPost: FC<Iprops> = props => {
  const { t } = useTranslation();
  const { infoDetail } = props;
  const { width } = useWindowDimensions();
  const [showMoreContent, setShowMoreContent] = useState(false);
  const [isShowMore, setIsShowMore] = useState(false);
  const [styleShowMore, setStyleShowMore] = useState({});
  const { navigate } = useNavigation();

  const listInfoItem = [
    {
      label: t('common.acreage'),
      icon: <Acreage />,
      value: infoDetail?.area ? `${infoDetail?.area}m2` : '--',
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
      value: infoDetail?.length ? `${infoDetail?.length}m` : '--',
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
      value: infoDetail?.width ? `${infoDetail?.width}m` : '--',
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
      value: infoDetail?.direction || '--',
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
      value: infoDetail?.bedroom || '--',
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
      value: infoDetail?.bathroom || '--',
    },
  ];
  const source = {
    html: infoDetail?.introduction_content,
  };
  const onLayout = (event: any) => {
    const { height } = event.nativeEvent.layout;
    if (height > 90) {
      setIsShowMore(true);
      setStyleShowMore(styles.showContent);
    }
  };

  const goToYoutube = () => {
    if (infoDetail?.youtube_video_link) {
      Linking.openURL(infoDetail?.youtube_video_link?.[0]);
    } else if (infoDetail?.real_estate_video_link) {
      Linking.openURL(infoDetail?.real_estate_video_link?.[0]);
    }
  };
  const goToMapScreen = () => {
    navigate(SCREENS.MAPS, {
      realtyID: infoDetail?.news_id,
      latLng: infoDetail?.lat_long,
    });
  };

  return (
    <View style={styles.aboutPost}>
      <View style={styles.seeMore}>
        {infoDetail?.news_id && infoDetail?.lat_long && (
          <TouchableOpacity
            onPress={goToMapScreen}
            style={styles.flex}
          >
            <IconMapWhite color={COLORS.BLUE_2} />
            <Text style={styles.textViewMap}>
              {t('detailPost.seeMap') || ''}
            </Text>
          </TouchableOpacity>
        )}

        <View style={styles.icon}>
          <Icon360 />
        </View>
        {(infoDetail?.youtube_video_link ||
          infoDetail?.real_estate_video_link) && (
          <TouchableOpacity
            style={styles.icon}
            onPress={goToYoutube}
          >
            <IconYoutube />
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.aboutPostTitle}>{infoDetail?.title}</Text>
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
        <Text style={styles.textAddress}>{infoDetail.address}</Text>
      </View>
      <View style={styles.BoxPrice}>
        <Text
          style={styles.BoxPriceRed}
        >{`${infoDetail?.price} ${infoDetail?.price_unit}`}</Text>
        <Text style={styles.BoxPriceGray}>
          {`${infoDetail?.price_per_square_meter} ${t('common.millionPerM2')}`}
        </Text>
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
        <View
          style={showMoreContent ? styles.showMoreContent : styleShowMore}
          onLayout={event => onLayout(event)}
        >
          <RenderHtml
            contentWidth={width}
            source={source}
          />
        </View>
        {!showMoreContent && isShowMore && (
          <LinearGradient
            start={{ x: 1, y: 1 }}
            end={{ x: 1, y: 0 }}
            colors={['#ffffff', '#ffffff00']}
            style={styles.viewOpacity}
          />
        )}

        {isShowMore && (
          <Button
            buttonStyle={styles.aboutButton}
            title={showMoreContent ? t('common.compact') : t('button.seeAll')}
            outline
            onPress={() => setShowMoreContent(!showMoreContent)}
          />
        )}
      </View>
    </View>
  );
};

export default AboutPost;
