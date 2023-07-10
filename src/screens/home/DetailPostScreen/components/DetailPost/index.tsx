import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { Acreage, IconHistory, IconNote } from '../../../../../assets';
import IconFloor from '../../../../../assets/icons/floor';
import { IconSvg } from '../../../../../assets/icons/IconSvg';
import IconInterior from '../../../../../assets/icons/interior';
import IconRoad from '../../../../../assets/icons/road';
import IconStructure from '../../../../../assets/icons/structure';
import { Text } from '../../../../../components';
import { IRealEstateDetails } from '../../../../../utils/interface/realEstateDetails';
import styles from './styles';

interface Iprops {
  infoDetail: IRealEstateDetails;
}

const DetailPost: FC<Iprops> = props => {
  const { t } = useTranslation();
  const { infoDetail } = props;
  const listInfo = [
    [
      {
        label: t('common.acreage'),
        icon: <Acreage />,
        value: infoDetail?.area ? `${infoDetail?.area}m2` : '--',
      },
      {
        label: t('input.length'),
        icon: <IconSvg name="length" />,
        value: infoDetail?.length ? `${infoDetail?.length}m` : '--',
      },
    ],
    [
      {
        label: t('common.bedroom'),
        icon: (
          <IconSvg
            name="bedroom"
            width={20}
            height={20}
          />
        ),
        value: infoDetail?.bedroom || '--',
      },
      {
        label: t('input.width'),
        icon: <IconSvg name="width" />,
        value: infoDetail?.width ? `${infoDetail?.width}m` : '--',
      },
    ],
    [
      {
        label: t('common.bathroom'),
        icon: (
          <IconSvg
            name="bathroom"
            width={18}
            height={15}
          />
        ),
        value: infoDetail?.bathroom || '--',
      },
      {
        label: t('common.currentStatusHouse'),
        icon: <IconInterior />,
        value: infoDetail?.house_status,
      },
    ],
    [
      {
        label: t('common.legalDocuments'),
        icon: <IconHistory />,
        value: infoDetail?.document_legal,
      },
      {
        label: t('common.usageStatus'),
        icon: <IconNote />,
        value: infoDetail?.usage_status,
      },
    ],
    [
      {
        label: t('common.location'),
        icon: (
          <IconSvg
            name="location"
            width={11}
            height={14}
          />
        ),
        value: infoDetail?.location,
      },
      {
        label: t('input.laneWidth'),
        icon: <IconRoad />,
        value: infoDetail?.lane_width ? `${infoDetail?.lane_width}m` : '--',
      },
    ],
    [
      {
        label: t('common.numberFloors'),
        icon: <IconFloor />,
        value: infoDetail?.floor || '--',
      },
      {
        label: t('select.structure'),
        icon: <IconStructure />,
        value: infoDetail?.structure || '--',
      },
    ],
  ];
  const listUtilities = [
    {
      title: t('detailPost.nearbyUtilities'),
      list:
        (infoDetail?.nearby_amenities &&
          Object.values(infoDetail?.nearby_amenities)) ||
        [],
    },
    {
      title: 'Nội thất tiện nghi',
      list:
        (infoDetail?.furniture && Object.values(infoDetail?.furniture)) || [],
    },
    {
      title: 'An ninh',
      list:
        (infoDetail?.securities && Object.values(infoDetail?.securities)) || [],
    },
    {
      title: t('detailPost.roadToRealEstate'),
      list:
        (infoDetail?.real_estate_entrance &&
          Object.values(infoDetail?.real_estate_entrance)) ||
        [],
    },
  ];

  return (
    <View style={styles.detailPostWrapper}>
      <View style={styles.detailPost}>
        <Text style={styles.title}>{t('detailPost.detailPost')}</Text>
        <View style={styles.listInfo}>
          {listInfo.map((info, index) => {
            return (
              <View
                key={index}
                style={styles.itemInfo}
              >
                {info.map(i => {
                  return (
                    <View
                      key={i.label}
                      style={styles.oneItem}
                    >
                      <View style={styles.icon}>{i.icon}</View>

                      <View style={styles.headerItem}>
                        <Text style={styles.textLabel}>{i.label}</Text>
                        <Text style={styles.textValue}>{i.value}</Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            );
          })}
        </View>
      </View>
      <View style={styles.detailPost}>
        {listUtilities?.map(info => {
          return (
            <View
              key={info.title}
              style={styles.utilitiesItem}
            >
              <Text style={styles.title}>{info.title}</Text>
              <View style={styles.listContent}>
                {info.list.map((i: string) => {
                  return (
                    <View
                      style={styles.itemContent}
                      key={i}
                    >
                      <View style={styles.itemDot} />
                      <Text
                        key={i}
                        style={styles.itemContentText}
                      >
                        {i}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default DetailPost;
