import { useNavigation } from '@react-navigation/native';
import { Image } from '@rneui/base';
import React, { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';
import {
  IconBackWhite,
  IconDotWhite,
  IconHeartWhite,
  IconPhoneWhite,
} from '../../../../../assets';
import { COLORS } from '../../../../../constants';
import IconMapWhite from '../../../../../assets/icons/mapWhite';
import { IRealEstateDetails } from '../../../../../utils/interface/realEstateDetails';

interface Iprops {
  infoDetail: IRealEstateDetails;
}

const ImagePost: FC<Iprops> = props => {
  const { goBack }: any = useNavigation();
  const { infoDetail } = props;
  const listImage =
    infoDetail?.real_estate_images &&
    Object.values(infoDetail?.real_estate_images);

  const listIcon = [
    {
      icon: <IconHeartWhite />,
    },
    {
      icon: <IconPhoneWhite />,
    },
    {
      icon: <IconMapWhite color={COLORS.WHITE} />,
    },
    {
      icon: <IconDotWhite />,
    },
  ];

  return (
    <View style={styles.boxImage}>
      <Image
        style={styles.image}
        source={
          listImage?.[0]
            ? { uri: listImage?.[0] }
            : {
                uri: 'https://media.istockphoto.com/id/1188452511/vi/anh/ph%C3%B2ng-kh%C3%A1ch-scandinavian-%C4%91%E1%BA%A7y-phong-c%C3%A1ch-v%E1%BB%9Bi-thi%E1%BA%BFt-k%E1%BA%BF-gh%E1%BA%BF-sofa-b%E1%BA%A1c-h%C3%A0-%C4%91%E1%BB%93-n%E1%BB%99i-th%E1%BA%A5t-b%E1%BA%A3n-%C4%91%E1%BB%93-%C3%A1p.jpg?s=612x612&w=0&k=20&c=bq42yoAt_R3UG1xNJrNs0EO0Rbxd71TMf_ueRgK-2-g=',
              }
        }
      />
      <View style={styles.headerAction}>
        <TouchableOpacity
          style={styles.iconHeader}
          onPress={goBack}
        >
          {<IconBackWhite />}
        </TouchableOpacity>
        <View style={styles.headerRight}>
          {listIcon?.map((i, index) => {
            return (
              <View
                style={styles.iconHeaderRight}
                key={`icon-image-${index}`}
              >
                {i.icon}
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default ImagePost;
