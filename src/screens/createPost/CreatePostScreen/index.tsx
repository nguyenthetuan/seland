import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Pressable, SafeAreaView, ScrollView, View } from 'react-native';
import Loading from 'react-native-loading-spinner-overlay';
import { useDispatch, useSelector } from 'react-redux';

import { Save } from '../../../assets';
import { Button, Text } from '../../../components';
import { COLORS, SCREENS, YOUR_WANT } from '../../../constants';
import {
  clearCreatePosts,
  createRealEstates,
  selectPosts,
} from '../../../features';
import { dispatchThunk } from '../../../utils';
import ArticleDetails from '../components/ArticleDetails';
import BasicInformation from '../components/BasicInformation';
import PopupConfirmPost from '../components/PopupConfirm';
import RealEstateInformation from '../components/RealEstateInformation';
import styles from './styles';

const SaveType = [
  {
    name: 'savePrivate',
    key: YOUR_WANT.SAVE_PRIVATE,
  },
  {
    name: 'postPublic',
    key: YOUR_WANT.POST_PUBLIC,
  },
  {
    name: 'saveDrafts',
    key: YOUR_WANT.SAVE_DRAFTS,
  },
];

const TAB = {
  BASIC_INFORMATION: 0,
  REAL_ESTATE_INFORMATION: 1,
  ARTICLE_DETAILS: 2,
};

const initInfo = {
  real_estate_type_id: null,
  project_id: 0,
  address_detail: '',
  province_id: null,
  district_id: null,
  ward_id: null,
  street_id: null,
  lat_long: `${21.0227523}, ${105.9530334}`,
  demand_id: 0,
  // real estate info
  area: '',
  price: '',
  price_unit: 1,
  width: '',
  length: '',
  floor: '',
  lane_width: '',
  bathroom: null,
  bedroom: null,
  main_door_direction_id: null,
  structure_id: null,
  legal_documents_id: null,
  house_status_id: null,
  usage_condition_id: null,
  location_type_id: null,
  utilities_id: '',
  furniture_id: '',
  security_id: '',
  road_type_id: '',
  // article detail
  title: '',
  content: '',
  name: '',
  urlVideo: '',
  phone_number: '',
  type: null,
  isPhoto: true,
  photo: [],
  video: [],
};

export const formatDataValueId = (data: any) =>
  data?.map((item: { value?: string; id?: number }) => ({
    label: item.value,
    value: item.id,
  }));

export const formatDataNameId = (data: any) =>
  data?.map((item: { name?: string; id?: number }) => ({
    label: item.name,
    value: item.id,
  }));

const CreatePostScreen = () => {
  const { navigate, goBack } = useNavigation();
  const { t } = useTranslation();
  const scrollViewRef = useRef();
  const confirmPostRef = useRef();
  const currentTab = useRef<any>();

  const [tab, setTab] = useState(TAB.BASIC_INFORMATION);
  const [saveType, setSaveType] = useState(YOUR_WANT.SAVE_PRIVATE);
  const dispatch = useDispatch();
  const { loading, basicInformation, realEstateInformation, createRealEstate } =
    useSelector(selectPosts);

  const {
    control,
    setValue,
    getValues,
    setError,
    clearErrors,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initInfo,
  });

  const handleClosePost = () => {
    dispatch(clearCreatePosts());
    reset();
    setTab(TAB.BASIC_INFORMATION);
    goBack();
  };
  const handleTab = (value: number) => {
    setTab(value);
    if (
      currentTab.current === TAB.BASIC_INFORMATION &&
      value === TAB.REAL_ESTATE_INFORMATION &&
      tab === TAB.BASIC_INFORMATION
    ) {
      currentTab.current = value;
      return;
    }
    if (
      currentTab.current === TAB.BASIC_INFORMATION &&
      value === TAB.ARTICLE_DETAILS &&
      tab === TAB.BASIC_INFORMATION
    ) {
      currentTab.current = value;
      return;
    }

    if (
      currentTab.current === TAB.REAL_ESTATE_INFORMATION &&
      value === TAB.ARTICLE_DETAILS &&
      tab === TAB.REAL_ESTATE_INFORMATION
    ) {
      currentTab.current = value;
      return;
    }

    if (
      currentTab.current === TAB.ARTICLE_DETAILS &&
      value === TAB.REAL_ESTATE_INFORMATION &&
      tab === TAB.ARTICLE_DETAILS
    ) {
      currentTab.current = value;
      return;
    }
    if (
      currentTab.current === TAB.ARTICLE_DETAILS &&
      value === TAB.BASIC_INFORMATION &&
      tab === TAB.ARTICLE_DETAILS
    ) {
      currentTab.current = value;
    }
  };

  const handleSelect = (value: number) => {
    setSaveType(value);
  };

  const createSuccess = (value: any) => {
    if (value?.real_estate_id) {
      if (saveType === YOUR_WANT.POST_PUBLIC) {
        navigate(SCREENS.CONFIRM_POST_SCREEN, {
          realEstateId: value?.real_estate_id,
        });
        setTab(TAB.BASIC_INFORMATION);
      } else {
        confirmPostRef.current.openPopup();
      }
      dispatch(clearCreatePosts());
    }
  };

  const createPosts = (value: any) => {
    const params = {
      ...basicInformation,
      ...realEstateInformation,
      ...value,
      status: saveType,
    };
    const formData = new FormData();

    Object.keys(params).forEach((key, value) => {
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
      if (params[key]) {
        if (information.includes(key)) {
          formData.append(`information[${key}]`, params[key]);
        } else {
          formData.append(key, params[key]);
        }
      }
    });

    // append image to form
    if (params?.photo?.length) {
      params?.photo.forEach(
        (item: { uri: any; fileName: any; type: any }, index: any) => {
          const file = {
            uri: item.uri,
            name: item.fileName,
            type: item.type,
          };
          formData.append(`images[${index}]`, file);
        }
      );
    }
    // append video to form
    if (params?.video?.length) {
      params?.photo.forEach((item: { uri: any; fileName: any; type: any }) => {
        const file = {
          uri: item.uri,
          name: item.fileName,
          type: item.type,
        };
        formData.append(`video`, file);
      });
    }

    if (params?.urlVideo) {
      formData.append(`video`, params?.urlVideo);
    }

    dispatchThunk(dispatch, createRealEstates(formData), createSuccess);
  };

  const handleContinue = async (value: { photo: string | any[] }) => {
    console.log('🚀 ~ file: index.js:258 ~ handleContinue ~ value:', value);
    switch (tab) {
      case TAB.BASIC_INFORMATION:
        scrollViewRef.current?.scrollTo();
        if (
          errors.address_detail ||
          errors.district_id ||
          errors.province_id ||
          errors.ward_id ||
          errors.real_estate_type_id
        ) {
          break;
        } else {
          setTab(tab + 1);
          currentTab.current = tab + 1;
          break;
        }
      case TAB.REAL_ESTATE_INFORMATION:
        scrollViewRef.current?.scrollTo();
        if (errors.area || errors.price || errors.price_unit) {
          break;
        } else {
          setTab(tab + 1);
          currentTab.current = tab + 1;
          break;
        }
      case TAB.ARTICLE_DETAILS:
        if (value?.photo.length <= 2) {
          setError('photo', {
            type: 'manual',
            message: 'Mayf phai nhap it nhat 3 cai anh',
          });
          break;
        }
        if (errors.title || errors.content) {
          break;
        } else {
          // createPosts(value);
          break;
        }
      default:
        navigate(SCREENS.CONFIRM_POST_SCREEN);
        break;
    }
  };
  const handleBack = () => {
    scrollViewRef.current?.scrollTo();
    setTab(tab - 1);
  };

  const handlePostOther = () => {
    setTab(TAB.BASIC_INFORMATION);
    navigate(SCREENS.CREATE_POST);
  };

  const handleManagePost = () => {
    setTab(TAB.BASIC_INFORMATION);

    if (saveType === YOUR_WANT.SAVE_DRAFTS) {
      navigate(SCREENS.DRAFT_POSTS);
    } else {
      navigate(SCREENS.USER_POSTS, { type: 'createPost', status: saveType });
    }
  };

  const renderTab = () => {
    switch (tab) {
      case TAB.BASIC_INFORMATION:
        return (
          <BasicInformation
            control={control}
            setValue={setValue}
            getValues={getValues}
          />
        );
      case TAB.REAL_ESTATE_INFORMATION:
        return (
          <RealEstateInformation
            control={control}
            setValue={setValue}
            getValues={getValues}
          />
        );
      case TAB.ARTICLE_DETAILS:
        return (
          <ArticleDetails
            control={control}
            setValue={setValue}
            setError={setError}
            clearErrors={clearErrors}
            getValues={getValues}
            errors={errors}
          />
        );
      default:
        return (
          <BasicInformation
            control={control}
            setValue={setValue}
            getValues={getValues}
          />
        );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Loading
        visible={loading || createRealEstate?.loading}
        textContent={t('common.loading')}
        color={COLORS.BLUE_1}
        textStyle={styles.spinnerTextStyle}
      />
      <View style={styles.header}>
        <View style={{ flexDirection: 'row' }}>
          <Icon
            name="close"
            onPress={handleClosePost}
          />
          <Text style={styles.createPostNews}>
            {t('common.createPostNews')}
          </Text>
        </View>
        <Save />
      </View>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.scroll}
      >
        <Text style={styles.youWant}>{t('common.youWant')}</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.boxCheck}
        >
          {SaveType.map(item => (
            <Button
              key={`saveType${item?.key}`}
              buttonStyle={styles.btnYouWant}
              icon="save"
              outline
              onPress={() => handleSelect(item.key)}
            >
              <Icon
                color={COLORS.BLUE_1}
                name={
                  saveType === item?.key
                    ? 'radio-button-checked'
                    : 'radio-button-unchecked'
                }
                size={20}
              />
              <Text style={styles.txtCheck}>{t(`button.${item?.name}`)}</Text>
            </Button>
          ))}
        </ScrollView>

        <View style={styles.line} />
        <View style={styles.boxDotLine}>
          <Pressable onPress={() => handleTab(TAB.BASIC_INFORMATION)}>
            <View
              style={styles.dot(
                [
                  TAB.BASIC_INFORMATION,
                  TAB.REAL_ESTATE_INFORMATION,
                  TAB.ARTICLE_DETAILS,
                ].includes(tab)
              )}
            />
          </Pressable>
          <View
            style={styles.line1(
              [TAB.REAL_ESTATE_INFORMATION, TAB.ARTICLE_DETAILS].includes(tab)
            )}
          />
          <Pressable onPress={() => handleTab(TAB.REAL_ESTATE_INFORMATION)}>
            <View
              style={styles.dot(
                [TAB.REAL_ESTATE_INFORMATION, TAB.ARTICLE_DETAILS].includes(tab)
              )}
            />
          </Pressable>
          <View style={styles.line1(tab === TAB.ARTICLE_DETAILS)} />
          <Pressable onPress={() => handleTab(TAB.ARTICLE_DETAILS)}>
            <View style={styles.dot(tab === TAB.ARTICLE_DETAILS)} />
          </Pressable>
        </View>
        <View style={styles.boxTab}>
          <Text
            style={styles.labelTab(tab === TAB.BASIC_INFORMATION)}
            onPress={() => handleTab(TAB.BASIC_INFORMATION)}
          >
            Thông tin cơ bản
          </Text>
          <Text
            style={styles.labelTab(tab === TAB.REAL_ESTATE_INFORMATION)}
            onPress={() => handleTab(TAB.REAL_ESTATE_INFORMATION)}
          >
            Thông tin bổ sung
          </Text>
          <Text
            style={styles.labelTab(tab === TAB.ARTICLE_DETAILS)}
            onPress={() => handleTab(TAB.ARTICLE_DETAILS)}
          >
            Chi tiết bài đăng
          </Text>
        </View>
        {renderTab()}
        {tab === TAB.BASIC_INFORMATION ? (
          <Button
            title={t('button.continue')}
            buttonStyle={styles.btnContinue}
            onPress={handleSubmit(handleContinue)}
          />
        ) : (
          <View style={styles.boxButton}>
            <Button
              title={t('button.back')}
              buttonStyle={styles.btnBack}
              onPress={handleBack}
            />
            <Button
              title={t('button.continue')}
              buttonStyle={styles.btnContinue1}
              onPress={handleSubmit(handleContinue)}
            />
          </View>
        )}
      </ScrollView>
      <PopupConfirmPost
        ref={confirmPostRef}
        onPressButtonRight={handlePostOther}
        onPressButtonLeft={handleManagePost}
        titleButtonLeft="Quản lý đăng tin"
        titleButtonRight="Đăng tin khác"
        label={t('common.saving').replace(
          'typesave',
          saveType === YOUR_WANT.SAVE_PRIVATE ? 'riêng tư' : 'nháp!'
        )}
        description={t('common.postingSave').replace(
          'typeSave',
          saveType === YOUR_WANT.SAVE_PRIVATE ? 'riêng tư' : 'nháp!'
        )}
      />
    </SafeAreaView>
  );
};

export default CreatePostScreen;
