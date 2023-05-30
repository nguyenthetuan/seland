import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Pressable, SafeAreaView, ScrollView, View } from 'react-native';
import Loading from 'react-native-loading-spinner-overlay';
import { useDispatch, useSelector } from 'react-redux';

import { Button, DateTimePicker, Input, Text } from '../../../components';
import { COLOR_BLUE_1 } from '../../../constants';
import { createRealEstates, getListRank, selectPosts } from '../../../features';
import { dispatchThunk } from '../../../utils';
import ItemConfirm from '../components/ItemConfirm';
import PopupConfirmPost from '../components/PopupConfirm';
import styles from './styles';

const ConfirmPostScreen = () => {
  const { goBack } = useNavigation();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    rank,
    basicInformation,
    realEstateInformation,
    articleDetails,
    createRealEstate,
  } = useSelector(selectPosts);

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

  const refresh = async () => {
    dispatchThunk(dispatch, getListRank());
  };

  useEffect(() => {
    refresh();
  }, []);

  const createSuccess = () => {
    confirmPostRef.current.openPopup();
  };

  const handleContinue = async () => {
    const params = {
      ...basicInformation,
      ...realEstateInformation,
      ...articleDetails,
    };
    const formData = new FormData();

    Object.keys(params).forEach((key, value) => {
      if (key === 'isPhoto' || key === 'photo' || key === 'video') return;

      if (params[key]) {
        if (key === 'lat_long' && params[key]) {
          const result = params[key].split(',');
          formData.append('latitude', result[0]);
          formData.append('longitude', result[1]);
          return;
        }

        formData.append(key, params[key]);
      }
    });

    // append image to form
    if (params?.photo?.length) {
      params?.photo.forEach((item, index) => {
        formData.append(`images[${index}]`, {
          uri: item.uri,
          name: item.fileName,
          type: item.type,
        });
      });
    }

    dispatchThunk(dispatch, createRealEstates(formData), createSuccess);
  };

  return (
    <View style={{ flex: 1 }}>
      <Loading
        visible={createRealEstate?.loading}
        textContent={t('common.loading')}
        color={COLOR_BLUE_1}
        textStyle={styles.spinnerTextStyle}
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Icon
            name="close"
            onPress={goBack}
          />
          <Text style={styles.createPostNews}>
            {t('common.createPostNews')}
          </Text>
        </View>
        <ScrollView contentContainerStyle={styles.scroll}>
          <ScrollView
            contentContainerStyle={styles.scrollViewContainerStyle}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            {rank &&
              rank?.map(item => (
                <Pressable
                  key={`rank${item?.id}`}
                  style={styles.boxRank}
                >
                  <Text style={styles.txtValueRank}>{item?.value}</Text>
                  <View style={styles.boxTitleRank}>
                    <View style={[styles.line1, { height: 50 }]} />
                    <View style={styles.line1} />
                    <View style={styles.line1} />
                    <View style={styles.line1} />
                    <Text style={styles.txtTitle}>{item?.title}</Text>
                  </View>
                  <Text style={styles.txtTimeLimitPost}>
                    Hiển thị dưới cùng
                  </Text>
                  <View style={styles.boxShowDown}>
                    <Icon
                      name="arrow-forward"
                      size={20}
                    />
                    <View>
                      <View style={styles.line2} />
                      <View style={styles.line2} />
                      <View
                        style={[
                          styles.line2,
                          { backgroundColor: COLOR_BLUE_1 },
                        ]}
                      />
                    </View>
                  </View>
                  <Text style={styles.txtTimeLimitPost}>
                    Đăng tối thiểu 7 ngày
                  </Text>
                  <Button title="Từ X,000đ/ngày" />
                </Pressable>
              ))}
          </ScrollView>
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
    </View>
  );
};

export default ConfirmPostScreen;
