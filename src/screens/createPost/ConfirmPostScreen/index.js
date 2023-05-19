import { useNavigation } from '@react-navigation/native';
import { Button, Icon } from '@rneui/base';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';

import { DateTimePicker, Input, Text } from '../../../components';
import { COLOR_GRAY_2, COLOR_ORANGE_6 } from '../../../constants';
import ItemConfirm from '../components/ItemConfirm';
import PopupConfirmPost from '../components/PopupConfirm';
import styles from './styles';

const ConfirmPostScreen = () => {
  const { goBack } = useNavigation();
  const { t } = useTranslation();
  const confirmPostRef = useRef();
  const {
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      acreage: '',
      price: '',
      width: '',
    },
  });

  const handleContinue = () => {
    confirmPostRef.current.openPopup();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="close"
          onPress={goBack}
        />
        <Text style={styles.createPostNews}>{t('common.createPostNews')}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scroll}>
        <SliderBox
          autoplay
          circleLoop
          dotColor={COLOR_ORANGE_6}
          dotStyle={styles.dot}
          images={[
            'https://source.unsplash.com/1024x768/?nature',
            'https://source.unsplash.com/1024x768/?water',
            'https://source.unsplash.com/1024x768/?girl',
            'https://source.unsplash.com/1024x768/?tree',
          ]}
          resizeMethod="resize"
          resizeMode="cover"
          inactiveDotColor={COLOR_GRAY_2}
        />
        <Text style={styles.selectTimePost}>
          {t('Chọn thời gian đăng tin')}
        </Text>
        <View style={styles.boxNumberPost}>
          <View style={{ flex: 1 }}>
            <Input
              control={control}
              inputMode="numeric"
              isNumeric
              inputContainerStyle={styles.inputContainerStyle}
              label={t('input.numberDayPost')}
              name="bedroom"
            />
          </View>
          <View style={{ flex: 1 }}>
            <DateTimePicker
              control={control}
              label="Ngày bắt đầu"
              labelStyle={styles.labelStyle}
              name="date2"
            />
          </View>
        </View>
        <Text style={styles.postTheEnd}>
          Tin đăng sẽ kết thúc vào ngày: 15-03-2023
        </Text>
        <View style={styles.boxInformation}>
          <ItemConfirm
            label="Thanh toán"
            value="Vip Bạc"
          />
          <ItemConfirm
            label="Đơn giá/ ngày"
            value="50,000 VNĐ"
          />
          <ItemConfirm
            label="Thời gian đăng tin"
            value="10 ngày"
          />
          <ItemConfirm
            label="Khuyến mãi"
            value="0"
          />
          <ItemConfirm
            label="Tổng tiền"
            value="500,000 VNĐ"
          />
        </View>
        <Button
          title={t('button.continue')}
          buttonStyle={styles.btnContinue}
          onPress={handleContinue}
        />
      </ScrollView>
      <PopupConfirmPost ref={confirmPostRef} />
    </SafeAreaView>
  );
};

export default ConfirmPostScreen;
