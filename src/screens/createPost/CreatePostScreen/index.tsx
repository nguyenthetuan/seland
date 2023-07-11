import {
  useNavigation,
  useRoute,
  NavigationProp,
} from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Pressable, SafeAreaView, ScrollView, View } from 'react-native';
import Loading from 'react-native-loading-spinner-overlay';
import { useDispatch, useSelector } from 'react-redux';

import { Save } from '../../../assets';
import { Button, PopupConfirm, Text } from '../../../components';
import { COLORS, SCREENS, YOUR_WANT } from '../../../constants';
import {
  detailRealEstates,
  selectPosts,
  createRealEstates,
  editRealEstates,
  getListRealEstatesUser,
  getDistricts,
  getWards,
} from '../../../features';
import { dispatchThunk } from '../../../utils';
import ArticleDetails from '../components/ArticleDetails';
import BasicInformation from '../components/BasicInformation';
import RealEstateInformation from '../components/RealEstateInformation';
import styles from './styles';
import Toast from 'react-native-simple-toast';

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

const TIME = 30;

const initInfo = {
  status: 2,

  // base infor
  real_estate_type_id: null,
  project_id: 0,
  address_detail: '',
  province_id: null,
  district_id: null,
  ward_id: null,
  street_id: null,
  lat_long: `${21.0227523}, ${105.9530334}`,
  demand_id: 1,
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

const CreatePostScreen = (props: any) => {
  const { navigate, goBack }: NavigationProp<any, any> = useNavigation();
  const router: any = useRoute();
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

  const { t } = useTranslation();
  const scrollViewRef = useRef();
  const confirmPostRef = useRef();
  const currentTab = useRef<any>();
  const [time, setTime] = React.useState(TIME);

  const [tab, setTab] = useState(TAB.BASIC_INFORMATION);
  const [saveType, setSaveType] = useState(
    (getValues && getValues().status) || YOUR_WANT.SAVE_PRIVATE
  );
  const dispatch = useDispatch();
  const { loading, createRealEstate, unitPrices, information } =
    useSelector(selectPosts);
  const emptyUnitPrices = {
    label: t('select.structure'),
    value: null,
  };
  const unitPricesOptions = [emptyUnitPrices, ...formatDataValueId(unitPrices)];

  const getDetailPost = useCallback(async (response: any) => {
    Object.entries(response).forEach(([key, value]) => {
      if (
        key === 'district_id' ||
        key === 'ward_id' ||
        key === 'area' ||
        key === 'price'
      ) {
        value && setValue(key, `${value}`);
      } else {
        switch (key) {
          case 'price_unit':
            setValue(
              key,
              unitPricesOptions.find(elm => elm.label === value).value
            );
            break;
          case 'document_legal':
            setValue(
              'legal_documents_id',
              information[2].children.find((elm: any) => elm.value === value)
                ?.id || null
            );
            break;
          case 'house_status':
            setValue(
              'house_status_id',
              information[3].children.find((elm: any) => elm.value === value)
                ?.id || null
            );
            break;
          case 'usage_status':
            setValue(
              'usage_condition_id',
              information[4].children.find((elm: any) => elm.value === value)
                ?.id || null
            );
            break;
          case 'location':
            setValue(
              'location_type_id',
              information[5].children.find((elm: any) => elm.value === value)
                ?.id || null
            );
            break;
          case 'introduction_content':
            setValue('content', `${value}`);
            break;
          case 'contacts':
            setValue('name', `${value}`);
            setValue('phone_number', `${value}`);
            break;
          case 'real_estate_images':
            const arrayImages: {
              uri: string;
              fileName: string;
              type: string;
              update: boolean;
            }[] = Object.values(value).map((item: any) => {
              return {
                uri: item,
                fileName: item.substring(item.lastIndexOf('/') + 1),
                type: 'image',
                update: true,
              };
            });
            setValue('photo', arrayImages);
            break;
          case 'address':
            setValue('address_detail', value);
            break;
          case 'youtube_video_link':
            if (value) {
              setValue('urlVideo', value[0]);
            }
            break;
          case 'real_estate_video_link':
            if (value) {
              setValue('video', [
                {
                  uri: value[0],
                  name: value[0].substring(value[0].lastIndexOf('/') + 1),
                  type: 'mp4',
                  update: true,
                },
              ]);
            }
            break;
          case 'status':
            if (value) {
              setValue('status', value);
              setSaveType(value);
            }
          default:
            value && setValue(key, value);
            break;
        }
      }
    });

    dispatchThunk(
      dispatch,
      getDistricts({ province_code: response.province_id })
    );
    dispatchThunk(
      dispatch,
      getWards({
        province_code: response.province_id,
        district_code: response.district_id,
      })
    );
  }, []);

  useEffect(() => {
    !!router.params?.edit &&
      dispatchThunk(
        dispatch,
        detailRealEstates(router.params.id),
        (response: any) => getDetailPost(response)
      );
  }, []);

  const handleClosePost = () => {
    reset();
    setTab(TAB.BASIC_INFORMATION);
    goBack();
  };

  const handleSelect = (value: number) => {
    setValue('status', value);
    setSaveType(value);
  };

  const getFormData = async (value: any) => {
    const params = {
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
      const land_information = [
        'utilities_id',
        'furniture_id',
        'security_id',
        'road_type_id',
      ];

      if (params[key]) {
        if (information.includes(key)) {
          formData.append(`information[${key}]`, params[key]);
        } else if (land_information.includes(key)) {
          formData.append(`land_information[${key}]`, params[key]);
        } else {
          formData.append(key, params[key]);
        }
      }
    });

    // append image to form
    if (params?.photo?.length) {
      params?.photo.forEach(
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
    if (params?.video?.length) {
      params?.video.forEach((item: { uri: any; fileName: any; type: any }) => {
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

    return formData;
  };

  const createSuccess = (value: any) => {
    if (value?.real_estate_id) {
      if (saveType === YOUR_WANT.POST_PUBLIC) {
        navigate(SCREENS.CONFIRM_POST_SCREEN, {
          realEstateId: value?.real_estate_id,
        });
      } else {
        confirmPostRef.current.openPopup();
      }
      reset();
      setTab(TAB.BASIC_INFORMATION);
    }
  };

  const createPosts = async (value: any) => {
    const formData = await getFormData(value);

    await dispatchThunk(dispatch, createRealEstates(formData), createSuccess);
  };

  const editSuccess = (value: any) => {
    dispatchThunk(
      dispatch,
      getListRealEstatesUser({
        status:
          router.params?.type === 'DRAFT'
            ? YOUR_WANT.SAVE_DRAFTS
            : YOUR_WANT.SAVE_PRIVATE,
        sort_by: 'createdAt',
      })
    );
    if (saveType === YOUR_WANT.POST_PUBLIC) {
      navigate(SCREENS.CONFIRM_POST_SCREEN, {
        realEstateId: router.params.id,
      });
    } else {
      goBack();
      Toast.show('Cập nhật tin thành công.');
    }
    reset();
    setTab(TAB.BASIC_INFORMATION);
  };

  const editPosts = async (value: any) => {
    const formData = await getFormData(value);
    await dispatchThunk(
      dispatch,
      editRealEstates({ id: router.params.id, formData }),
      editSuccess
    );
  };

  const autoSave = async (value: any) => {
    if (value?.photo.length === 0) {
      setError('photo', {
        type: 'manual',
        message: 'Vui lòng chọn hình ảnh BĐS',
      });
      return;
    }
    if (value?.photo.length <= 2) {
      setError('photo', {
        type: 'manual',
        message: 'Đăng từ 3 tới 12 hình ảnh khác nhau của bất động sản',
      });
      return;
    }
    const formData = await getFormData(value);
    await dispatchThunk(
      dispatch,
      editRealEstates({ id: router.params.id, formData })
    );
  };

  const getValueAutoSave = handleSubmit(autoSave);

  useEffect(() => {
    if (router.params?.type === 'DRAFT') {
      const intervalId = setInterval(() => {
        if (time === 0) {
          setTime(TIME);
          getValueAutoSave();
          return;
        }
        setTime(time - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [time]);

  const handleContinue = async (value: { photo: string | any[] }) => {
    switch (tab) {
      case TAB.BASIC_INFORMATION:
        scrollViewRef.current?.scrollTo();
        setTab(tab + 1);
        currentTab.current = tab + 1;
        break;
      case TAB.REAL_ESTATE_INFORMATION:
        scrollViewRef.current?.scrollTo();

        setTab(tab + 1);
        currentTab.current = tab + 1;
        break;
      case TAB.ARTICLE_DETAILS:
        if (value?.photo.length === 0) {
          setError('photo', {
            type: 'manual',
            message: 'Vui lòng chọn hình ảnh BĐS',
          });
          break;
        }
        if (value?.photo.length <= 2) {
          setError('photo', {
            type: 'manual',
            message: 'Đăng từ 3 tới 12 hình ảnh khác nhau của bất động sản',
          });
          break;
        }

        if (router.params?.edit) {
          editPosts(value);
        } else {
          createPosts(value);
        }
        break;
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
      navigate(SCREENS.USER_POSTS, {
        type: 'createPost',
        status: saveType,
      });
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

  const onPressBaseEstateInfo = () => {
    setTab(TAB.BASIC_INFORMATION);
  };

  const onPressRealEstateInfo = () => {
    setTab(TAB.REAL_ESTATE_INFORMATION);
  };

  const onPressArticle = () => {
    setTab(TAB.ARTICLE_DETAILS);
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
            {t(
              router.params?.edit
                ? 'common.updatePost'
                : 'common.createPostNews'
            )}
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
          <Pressable onPress={handleSubmit(onPressBaseEstateInfo)}>
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
          <Pressable onPress={handleSubmit(onPressRealEstateInfo)}>
            <View
              style={styles.dot(
                [TAB.REAL_ESTATE_INFORMATION, TAB.ARTICLE_DETAILS].includes(tab)
              )}
            />
          </Pressable>
          <View style={styles.line1(tab === TAB.ARTICLE_DETAILS)} />
          <Pressable onPress={handleSubmit(onPressArticle)}>
            <View style={styles.dot(tab === TAB.ARTICLE_DETAILS)} />
          </Pressable>
        </View>
        <View style={styles.boxTab}>
          <Text
            style={styles.labelTab(tab === TAB.BASIC_INFORMATION)}
            onPress={handleSubmit(onPressBaseEstateInfo)}
          >
            Thông tin cơ bản
          </Text>
          <Text
            style={styles.labelTab(tab === TAB.REAL_ESTATE_INFORMATION)}
            onPress={handleSubmit(onPressRealEstateInfo)}
          >
            Thông tin bổ sung
          </Text>
          <Text
            style={styles.labelTab(tab === TAB.ARTICLE_DETAILS)}
            onPress={handleSubmit(onPressArticle)}
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
      <PopupConfirm
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
