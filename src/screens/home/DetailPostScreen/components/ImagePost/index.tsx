import { useNavigation } from '@react-navigation/native';
import { Image } from '@rneui/base';
import React, { FC, useState } from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';
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
import { SliderBox } from 'react-native-image-slider-box';
import { IconSvg } from '../../../../../assets/icons/IconSvg';
import { Text } from '../../../../../components';
import FastImage from 'react-native-fast-image';

interface Iprops {
  infoDetail: IRealEstateDetails;
}

const ImagePost: FC<Iprops> = props => {
  const { goBack }: any = useNavigation();
  const { infoDetail } = props;
  const listImage =
    infoDetail?.real_estate_images &&
    Object.values(infoDetail?.real_estate_images);
  const [isOpen, setOpent] = useState(false);
  const [imageCurrent, setImageCurrent] = useState('');
  const [countImage, setCountImage] = useState(0);

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
  const onSeeDetail = (key: number) => {
    setImageCurrent(listImage?.[key]);
    setCountImage(key);
    setOpent(true);
  };
  const onNextImage = () => {
    setCountImage(countImage + 1);
    setImageCurrent(listImage?.[countImage + 1]);
  };
  const onPreImage = () => {
    setCountImage(countImage - 1);
    setImageCurrent(listImage?.[countImage - 1]);
  };
  return (
    <>
      <View style={styles.boxImage}>
        <SliderBox
          autoplay
          circleLoop
          dotColor={COLORS.BLUE_1}
          dotStyle={styles.dot}
          images={listImage || []}
          resizeMethod="resize"
          resizeMode="cover"
          inactiveDotColor={COLORS.GRAY_2}
          onCurrentImagePressed={onSeeDetail}
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
      <Modal
        visible={isOpen}
        style={styles.modalDetailImage}
        animationType="slide"
        transparent={true}
        presentationStyle="overFullScreen"
      >
        <View style={styles.sliderWrapper}>
          <TouchableOpacity
            onPress={() => setOpent(false)}
            style={styles.close}
          >
            <IconSvg name="close" />
          </TouchableOpacity>
          <View style={styles.slider}>
            <View style={styles.pre}>
              {countImage !== 0 && (
                <TouchableOpacity onPress={onPreImage}>
                  <IconSvg
                    name="pre"
                    color={COLORS.WHITE}
                    width={26}
                    height={26}
                  />
                </TouchableOpacity>
              )}
            </View>

            <FastImage
              style={styles.image}
              source={{
                uri: imageCurrent,
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
            <View style={styles.next}>
              {countImage + 1 !== listImage?.length && (
                <TouchableOpacity onPress={onNextImage}>
                  <IconSvg
                    name="next"
                    color={COLORS.WHITE}
                    width={26}
                    height={26}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
          <View>
            <Text style={styles.text}>{`${countImage + 1}/${
              listImage?.length
            }`}</Text>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ImagePost;
