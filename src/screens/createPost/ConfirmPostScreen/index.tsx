import {
  useNavigation,
  useRoute,
  NavigationProp,
} from '@react-navigation/native';
import { CheckBox, Icon } from '@rneui/themed';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import Loading from 'react-native-loading-spinner-overlay';
import Toast from 'react-native-simple-toast';
import { useDispatch, useSelector } from 'react-redux';

import { Button, DateTimePicker, Input, Text } from '../../../components';
import { COLORS, SCREENS, YOUR_WANT } from '../../../constants';
import {
  createPayment,
  editRealEstates,
  getListRank,
  getListRealEstatesUser,
  selectPosts,
} from '../../../features';
import { dispatchThunk } from '../../../utils';
import ItemConfirm from '../components/ItemConfirm';
import PopupConfirm from '../../../components/common/PopupConfirm';
import styles from './styles';
import dayjs from 'dayjs';
import { formatPrice } from '../../../utils/format';
import RenderHtml from 'react-native-render-html';
import PopupPaymentError from '../components/PopupPaymentError';
import Carousel from 'react-native-snap-carousel';

const ConfirmPostScreen = () => {
  const route = useRoute();
  const { goBack, navigate }: NavigationProp<any, any> = useNavigation();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const confirmPostErrorRef = React.useRef();
  const { rank, createRealEstate, loading } = useSelector(selectPosts);
  const [rankPost, setRankPost] = useState<number>(1);
  const [error, setError] = useState<{
    balance: number;
    balancePromotion: number;
    message: string;
    paymentCode: number;
  }>({
    balance: 0,
    balancePromotion: 0,
    message: '',
    paymentCode: 0,
  });
  const [refreshForm, setRefresh] = useState<boolean>(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [infoPaymentSuccess, setInfoPaymentSuccess] = useState<{
    balance?: string;
    balancePromotion?: number;
    code?: string;
    paymentCode?: string;
  }>({
    balance: '',
    balancePromotion: 0,
    code: '',
    paymentCode: '',
  });
  const confirmPaymentSuccessRef = useRef();
  const confirmCancelPaymentRef = useRef();
  const { width } = useWindowDimensions();

  const {
    control,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      real_estate_id: null,
      start_date: new Date(),
      count_date: '1',
      rank_type_id: 1,
    },
  });

  const refresh = async () => {
    dispatchThunk(dispatch, getListRank());
  };

  useEffect(() => {
    refresh();
  }, []);

  const createSuccess = (value: any) => {
    if (value) {
      setInfoPaymentSuccess({
        ...value,
      });
      confirmPaymentSuccessRef.current.openPopup();
    }
  };

  const createError = (error: any) => {
    setError(error);
    confirmPostErrorRef.current.openPopup();
  };

  const handleContinue = async (value: any) => {
    if (!agreeTerms) {
      Toast.show('Vui lòng chọn đồng ý với điều khoản sử dụng');
      return;
    }
    const paramsPayment = {
      ...value,
      start_date: dayjs(value?.start_date).format('YYYY-MM-DD'),
      real_estate_id: route?.params?.realEstateId,
    };
    dispatchThunk(
      dispatch,
      createPayment(paramsPayment),
      createSuccess,
      createError
    );
  };

  const toggleCheck = () => setAgreeTerms(!agreeTerms);

  const handlePostOther = () => {
    navigate(SCREENS.CREATE_POST);
  };

  const handleManagePost = () => {
    navigate(SCREENS.USER_POSTS, { type: 'createPost' });
  };

  const handleBack = () => {
    if (route.params?.type === 'EDIT') {
      goBack();
    } else {
      confirmCancelPaymentRef.current.openPopup();
    }
  };

  const handleCancel = () => {};

  const handleConfirm = () => {
    goBack();
  };

  const onSelectRank = (value: number | null) => {
    setRankPost(value);
    setValue('rank_type_id', value);
  };

  const onSubmit = data => {};

  const handle = handleSubmit(onSubmit);

  const onBlur = () => {
    setRefresh(!refreshForm);
    handle();
  };

  const infoPayment: {
    value?: string;
    price?: number;
    post_min?: number;
    totalPrice?: number;
    count_date?: number;
    endDate?: string;
  } = useMemo(() => {
    const { start_date, count_date } = getValues();
    let info = {};

    const objectValue = rank?.find(
      (item: { id: number }) => item.id === rankPost
    );
    if (objectValue && !errors.count_date) {
      info = {
        ...objectValue,
        count_date,
        totalPrice: Number(objectValue?.price) * Number(count_date),
        endDate: dayjs(start_date)
          .add(Number(count_date) || 0, 'day')
          .toDate(),
      };
    }

    return info;
  }, [getValues, rankPost, refreshForm, errors]);

  const validateCountDate = (value: string) => {
    const objectValue = rank?.find(
      (item: { id: number }) => item.id === rankPost
    );
    if (value) {
      if (value < objectValue?.post_min) {
        return 'Số ngày đăng lớn hơn số ngày đăng tối thiểu.';
      }
    }
    return undefined;
  };

  const onSavePrivate = async () => {
    // TODO: tạm thời dùng gọi như này, sau có api xử lý lại
    const formData = new FormData();
    Object.keys(route?.params?.data).forEach((key, value) => {
      if (
        key === 'isPhoto' ||
        key === 'photo' ||
        key === 'video' ||
        key === 'urlVideo'
      )
        return;
      const information = [
        'legal_documents_id',
        'house_status_id',
        'usage_condition_id',
        'location_type_id',
      ];
      const land_information = [
        'utilities_id',
        'furniture_id',
        'security_id',
        'road_type_id',
      ];

      if (route?.params?.data[key]) {
        if (information.includes(key)) {
          formData.append(`information[${key}]`, route?.params?.data[key]);
        } else if (land_information.includes(key)) {
          formData.append(`land_information[${key}]`, route?.params?.data[key]);
        } else if (key === 'status') {
          formData.append('status', YOUR_WANT.SAVE_PRIVATE);
        } else {
          formData.append(key, route?.params?.data[key]);
        }
      }
    });

    // append image to form
    if (route?.params?.data?.photo?.length) {
      route?.params?.data?.photo.forEach(
        (
          item: { uri: any; fileName: any; type: any; update?: boolean },
          index: any
        ) => {
          const file = {
            uri: item.uri,
            name: item.fileName,
            type: item.type,
          };
          formData.append(`images[${index}]`, item?.update ? item.uri : file);
        }
      );
    }
    // append video to form
    if (route?.params?.data?.video?.length) {
      route?.params?.data?.video.forEach(
        (item: { uri: any; fileName: any; type: any; update?: boolean }) => {
          const file = {
            uri: item.uri,
            name: item.fileName,
            type: item.type,
          };
          formData.append(`video`, item?.update ? item.uri : file);
        }
      );
    }

    const editSuccess = (value: any) => {
      dispatchThunk(
        dispatch,
        getListRealEstatesUser({
          status: route?.params?.saveType,
          sort_by: 'createdAt',
        })
      );

      navigate(SCREENS.USER_POSTS, {
        type: 'createPost',
        status: YOUR_WANT.SAVE_PRIVATE,
      });
      Toast.show('Lưu tin riêng tư thành công.');
    };
    await dispatchThunk(
      dispatch,
      editRealEstates({ id: route?.params?.realEstateId, formData }),
      editSuccess
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Loading
        visible={createRealEstate?.loading || loading}
        textContent={t('common.loading')}
        color={COLORS.BLUE_1}
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
          <Carousel
            data={rank}
            renderItem={({
              item,
            }: {
              item: {
                id: number;
                value: string | undefined;
                title: string | undefined;
                post_min?: number;
                price?: number;
                sapo?: string;
              };
            }) => {
              return (
                <Pressable
                  key={`rank${item?.id}`}
                  style={StyleSheet.flatten([
                    styles.boxRank,
                    {
                      borderColor:
                        item?.id === rankPost ? COLORS.BLUE_1 : COLORS.GRAY_6,
                    },
                  ])}
                  onPress={() => onSelectRank(item?.id)}
                >
                  <Text style={styles.txtValueRank}>{item?.value}</Text>
                  <View style={styles.boxTitleRank}>
                    <View style={[styles.line1, { height: 50 }]} />
                    <View style={styles.line1} />
                    <View style={styles.line1} />
                    <View style={styles.line1} />
                    <RenderHtml
                      contentWidth={width}
                      source={{
                        html: item?.title,
                      }}
                    />
                  </View>
                  <Text style={styles.txtTimeLimitPost}>{item?.sapo}</Text>
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
                          { backgroundColor: COLORS.BLUE_1 },
                        ]}
                      />
                    </View>
                  </View>
                  <Text style={styles.txtTimeLimitPost}>
                    {`Đăng tối thiểu ${item?.post_min} ngày`}
                  </Text>
                  <Button title={`Từ ${formatPrice(item?.price)}đ/ngày`} />
                </Pressable>
              );
            }}
            windowSize={1}
            sliderWidth={width}
            itemWidth={width}
          />
          <Text style={styles.selectTimePost}>
            {t('Chọn thời gian đăng tin')}
          </Text>
          <View style={styles.boxNumberPost}>
            <View style={{ flex: 1 }}>
              <Input
                control={control}
                inputMode="numeric"
                keyboardType="numeric"
                isNumeric
                onBlur={onBlur}
                required
                rules={{
                  required: 'Vui lòng nhập số ngày đăng tin',
                  validate: validateCountDate,
                }}
                inputContainerStyle={styles.inputContainerStyle}
                label={t('input.numberDayPost')}
                name="count_date"
              />
            </View>
            <View style={{ flex: 1, marginLeft: 10 }}>
              <DateTimePicker
                control={control}
                label="Ngày bắt đầu"
                labelStyle={styles.labelStyle}
                disableMaxDate
                name="start_date"
                onConfirm={onBlur}
                minimumDate={new Date(dayjs().format('YYYY-MM-DD'))}
              />
            </View>
          </View>
          <Text style={styles.postTheEnd}>
            {`Tin đăng sẽ kết thúc vào ngày: ${dayjs(
              infoPayment?.endDate
            ).format('DD-MM-YYYY')}`}
          </Text>
          <View style={styles.boxInformation}>
            <ItemConfirm
              label="Thanh toán"
              value={infoPayment?.value || '---'}
            />
            <ItemConfirm
              label="Đơn giá/ ngày"
              value={`${
                infoPayment?.price ? formatPrice(infoPayment?.price) : 0
              } VNĐ`}
            />
            <ItemConfirm
              label="Thời gian đăng tin"
              value={`${infoPayment?.count_date || 0} ngày`}
            />
            <ItemConfirm
              label="Khuyến mãi"
              value="0"
            />
            <ItemConfirm
              label="Tổng tiền"
              value={`${
                infoPayment?.totalPrice
                  ? formatPrice(infoPayment?.totalPrice)
                  : 0
              } VNĐ`}
            />
          </View>
          <View>
            <CheckBox
              title={
                <Text>
                  Tôi đồng ý với{' '}
                  <Text style={{ color: COLORS.BLUE_1 }}>
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
            onPress={handleSubmit(handleContinue)}
          />
        </ScrollView>
        <PopupConfirm
          ref={confirmCancelPaymentRef}
          onPressButtonRight={handleConfirm}
          onPressButtonLeft={handleCancel}
          titleButtonLeft="Huỷ"
          titleButtonRight="Xác nhận"
          label="Huỷ thanh toán!"
          description="Khi huỷ thanh toán, bài đăng tự động lưu vào tin nháp."
        />
        <PopupPaymentError
          ref={confirmPostErrorRef}
          data={{
            ...error,
            ...infoPayment,
          }}
          onSavePrivate={onSavePrivate}
        />
        <PopupConfirm
          ref={confirmPaymentSuccessRef}
          onPressButtonRight={handlePostOther}
          onPressButtonLeft={handleManagePost}
          titleButtonLeft="Quản lý đăng tin"
          titleButtonRight="Đăng tin khác"
          label="Tin đăng đã được ghi nhận!"
          description="Tin của bạn sẽ được kiểm duyệt trong 8h làm việc."
          content={
            <View>
              <View style={styles.boxCodePost}>
                <Text style={{ fontWeight: '500' }}>Mã tin đăng</Text>
                <View style={styles.boxCode}>
                  <Text style={styles.code}>{infoPaymentSuccess.code}</Text>
                </View>
              </View>
              <View style={styles.boxItem}>
                <View style={styles.item}>
                  <View style={styles.boxLabelItem}>
                    <Text>{t('common.balance')} </Text>
                    <Icon
                      color={COLORS.ORANGE_2}
                      name="monetization-on"
                      size={20}
                    />
                  </View>
                  <Text style={styles.valueSurplus}>{`${formatPrice(
                    infoPaymentSuccess?.balance
                  )} đ`}</Text>
                </View>
                <View style={styles.line} />
                <View style={styles.item}>
                  <View style={styles.boxLabelItem}>
                    <Text>{t('common.promotion')} </Text>
                    <Icon
                      color={COLORS.GREEN_1}
                      name="redeem"
                      size={20}
                    />
                  </View>
                  <Text style={styles.valuePromotion}>{`${formatPrice(
                    infoPaymentSuccess?.balancePromotion
                  )} đ`}</Text>
                </View>
              </View>
            </View>
          }
        />
      </SafeAreaView>
    </View>
  );
};

export default ConfirmPostScreen;
