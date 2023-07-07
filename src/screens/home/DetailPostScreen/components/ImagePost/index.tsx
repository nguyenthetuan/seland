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
  onOpenMap?: Function;
}

const ImagePost: FC<Iprops> = props => {
  const { goBack }: any = useNavigation();
  const { infoDetail, onOpenMap } = props;
  const listImage =
    infoDetail?.real_estate_images &&
    Object.values(infoDetail?.real_estate_images);
  const [isOpen, setOpent] = useState(false);
  const [imageCurrent, setImageCurrent] = useState('');
  const [countImage, setCountImage] = useState(0);

  const listIcon = [
    {
      icon: <IconHeartWhite />,
      onPress: () => {},
    },
    {
      icon: <IconPhoneWhite />,
      onPress: () => {},
    },
    {
      icon: <IconMapWhite color={COLORS.WHITE} />,
      onPress: () => {
        onOpenMap && onOpenMap();
      },
    },
    {
      icon: <IconDotWhite />,
      onPress: () => {},
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
                <TouchableOpacity
                  onPress={() => i?.onPress()}
                  style={styles.iconHeaderRight}
                  key={`icon-image-${index}`}
                >
                  {i.icon}
                </TouchableOpacity>
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
          <FastImage
            style={styles.image}
            source={{
              uri: imageCurrent,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
          <View style={styles.slider}>
            {countImage !== 0 ? (
              <TouchableOpacity
                onPress={onPreImage}
                style={styles.pre}
              >
                <IconSvg
                  name="pre"
                  color={COLORS.WHITE}
                  width={40}
                  height={40}
                />
              </TouchableOpacity>
            ) : (
              <View />
            )}

            {countImage + 1 !== listImage?.length && (
              <TouchableOpacity
                onPress={onNextImage}
                style={styles.next}
              >
                <IconSvg
                  name="next"
                  color={COLORS.WHITE}
                  width={40}
                  height={40}
                />
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity
            onPress={() => setOpent(false)}
            style={styles.close}
          >
            <IconSvg
              name="close"
              width={35}
              height={35}
            />
          </TouchableOpacity>
          <Text style={styles.text}>{`${countImage + 1}/${
            listImage?.length
          }`}</Text>
        </View>
      </Modal>
    </>
  );
};

export default ImagePost;
