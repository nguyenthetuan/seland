import { useNavigation, useRoute } from '@react-navigation/native';
import { CheckBox, Icon } from '@rneui/themed';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Pressable, SafeAreaView, ScrollView, View } from 'react-native';
import Loading from 'react-native-loading-spinner-overlay';
import Toast from 'react-native-simple-toast';
import { useDispatch, useSelector } from 'react-redux';

import { Button, DateTimePicker, Input, Text } from '../../../components';
import { COLOR_BLUE_1, SCREENS } from '../../../constants';
import { createPayment, getListRank, selectPosts } from '../../../features';
import { dispatchThunk } from '../../../utils';
import ItemConfirm from '../components/ItemConfirm';
import PopupConfirmPost from '../components/PopupConfirm';
import styles from './styles';

const ConfirmPostScreen = () => {
  const route = useRoute();
  const { goBack, navigate } = useNavigation();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { rank, createRealEstate, loading } = useSelector(selectPosts);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const confirmPaymentSuccessRef = useRef();
  const confirmCancelPaymentRef = useRef();

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
    confirmPaymentSuccessRef.current.openPopup();
  };

  const handleContinue = async () => {
    if (!agreeTerms) {
      Toast.show('Vui lòng chọn đồng ý với điều khoản sử dụng');
      return;
    }
    const paramsPayment = {
      real_estate_id: route?.params?.realEstateId,
      rank_type_id: 1, // tam thoi fake la 1
    };
    dispatchThunk(dispatch, createPayment(paramsPayment), createSuccess);
  };

  const toggleCheck = () => setAgreeTerms(!agreeTerms);

  const handlePostOther = () => {
    navigate(SCREENS.CREATE_POST);
  };

  const handleManagePost = () => {
    navigate('UserPosts', { type: 'createPost' });
  };

  const handleBack = () => confirmCancelPaymentRef.current.openPopup();

  const handleCancel = () => {};

  const handleConfirm = () => {
    goBack();
  };

  return (
    <View style={{ flex: 1 }}>
      <Loading
        visible={createRealEstate?.loading || loading}
        textContent={t('common.loading')}
        color={COLOR_BLUE_1}
        textStyle={styles.spinnerTextStyle}
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Icon
            name="close"
            onPress={handleBack}
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
            <Input
              control={control}
              inputMode="numeric"
              isNumeric
              inputContainerStyle={styles.inputContainerStyle}
              label={t('input.numberDayPost')}
              name="bedroom"
            />
            <View style={{ flex: 1, marginLeft: 10 }}>
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
          <View>
            <CheckBox
              title={
                <Text>
                  Tôi đồng ý với{' '}
                  <Text style={{ color: COLOR_BLUE_1 }}>
                    điều khoản sử dụng
                  </Text>
                </Text>
              }
              checked={agreeTerms}
              onPress={toggleCheck}
            />
          </View>
          <Button
            title={t('button.continue')}
            buttonStyle={styles.btnContinue}
            onPress={handleContinue}
          />
        </ScrollView>
        <PopupConfirmPost
          ref={confirmCancelPaymentRef}
          onPressPostOther={handleConfirm}
          onPressManagePost={handleCancel}
          titleButtonLeft="Huỷ"
          titleButtonRight="Xác nhận"
          label="Huỷ thanh toán!"
          description="Khi huỷ thanh toán, bài đăng tự động lưu vào tin nháp."
        />
        <PopupConfirmPost
          ref={confirmPaymentSuccessRef}
          onPressPostOther={handlePostOther}
          onPressManagePost={handleManagePost}
          titleButtonLeft="Quản lý đăng tin"
          titleButtonRight="Đăng tin khác"
          label="Tin đăng đã được ghi nhận!"
          description="Tin của bạn sẽ được kiểm duyệt trong 8h làm việc."
          content={
            <View>
              <View style={styles.boxCodePost}>
                <Text style={{ fontWeight: '500' }}>Mã tin đăng</Text>
                <View style={styles.boxCode}>
                  <Text style={styles.code}>346582154</Text>
                </View>
              </View>
              <ItemConfirm
                label="Thanh toán"
                value="Vip Bạc"
              />
              <ItemConfirm
                label="Đơn giá/ ngày"
                value="50,000 VNĐ"
              />
            </View>
          }
        />
      </SafeAreaView>
    </View>
  );
};

export default ConfirmPostScreen;
