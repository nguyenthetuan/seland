import { useNavigation } from '@react-navigation/native';
import { Button, Icon } from '@rneui/base';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';

import { DateTimePicker, Input, Text } from '../../../components';
import { COLOR_GRAY_2, COLOR_ORANGE_6 } from '../../../constants';
import styles from './styles';

const Item = ({ value, label }) => (
  <View style={styles.boxItem}>
    <Text style={styles.labelItem}>{label}</Text>
    <Text style={styles.valueItem}>{value}</Text>
  </View>
);

Item.defaultProps = {
  label: '',
  value: '',
};

Item.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
};
const ConfirmPostScreen = () => {
  const { goBack } = useNavigation();
  const { t } = useTranslation();
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

  const handleContinue = () => {};

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
          <Item
            label="Thanh toán"
            value="Vip Bạc"
          />
          <Item
            label="Đơn giá/ ngày"
            value="50,000 VNĐ"
          />
          <Item
            label="Thời gian đăng tin"
            value="10 ngày"
          />
          <Item
            label="Khuyến mãi"
            value="0"
          />
          <Item
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
    </SafeAreaView>
  );
};

export default ConfirmPostScreen;
