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
import styles from './styles';

interface Iprops {}

const DetailPost: FC<Iprops> = props => {
  const { t } = useTranslation();
  const listInfo = [
    [
      {
        label: t('common.acreage'),
        icon: <Acreage />,
        value: '1.433 m²',
      },
      {
        label: t('input.length'),
        icon: <IconSvg name="length" />,
        value: '30m',
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
        value: '3',
      },
      {
        label: t('input.width'),
        icon: <IconSvg name="width" />,
        value: '20m',
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
        value: '3',
      },
      {
        label: t('common.currentStatusHouse'),
        icon: <IconInterior />,
        value: 'Đầy đủ nội thất',
      },
    ],
    [
      {
        label: t('common.legalDocuments'),
        icon: <IconHistory />,
        value: 'Sổ hồng',
      },
      {
        label: t('common.usageStatus'),
        icon: <IconNote />,
        value: 'Đã qua sử dụng',
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
        value: 'Mặt tiền',
      },
      {
        label: t('input.laneWidth'),
        icon: <IconRoad />,
        value: '6 m',
      },
    ],
    [
      {
        label: t('common.numberFloors'),
        icon: <IconFloor />,
        value: '2',
      },
      {
        label: t('select.structure'),
        icon: <IconStructure />,
        value: 'Nhà cấp 3',
      },
    ],
  ];
  const listUtilities = [
    {
      title: t('detailPost.nearbyUtilities'),
      list: [
        'Siêu thị mini',
        'Gần sông',
        'Trung tâm thương mại',
        'Công viên',
        'Siêu thị mini',
        'Gần sông',
        'Trung tâm thương mại',
        'Công viên',
      ],
    },
    {
      title: t('detailPost.neighbor'),
      list: ['Thân thiện', 'Trí thức'],
    },
    {
      title: t('detailPost.roadToRealEstate'),
      list: ['Đường trải nhựa'],
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
                {info.list.map(i => {
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
