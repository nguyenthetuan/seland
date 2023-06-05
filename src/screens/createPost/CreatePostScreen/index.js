import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, SafeAreaView, ScrollView, View } from 'react-native';
import Loading from 'react-native-loading-spinner-overlay';
import { useDispatch, useSelector } from 'react-redux';

import { Save } from '../../../assets';
import { Button, Text } from '../../../components';
import { COLOR_BLUE_1, SCREENS, YOUR_WANT } from '../../../constants';
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

export const formatDataValueId = data =>
  data?.map(item => ({
    label: item.value,
    value: item.id,
  }));

export const formatDataNameId = data =>
  data?.map(item => ({
    label: item.name,
    value: item.id,
  }));

const CreatePostScreen = () => {
  const { navigate, goBack } = useNavigation();
  const { t } = useTranslation();
  const scrollViewRef = useRef();
  const basicInfoRef = useRef();
  const realEstateRef = useRef();
  const articleDetailRef = useRef();
  const confirmPostRef = useRef();

  const [tab, setTab] = useState(TAB.BASIC_INFORMATION);
  const [saveType, setSaveType] = useState(YOUR_WANT.SAVE_PRIVATE);
  const dispatch = useDispatch();
  const { loading, basicInformation, realEstateInformation, articleDetails } =
    useSelector(selectPosts);

  const handleClosePost = () => {
    dispatch(clearCreatePosts());
    basicInfoRef.current && basicInfoRef.current.clearForm();
    setTab(0);
    goBack();
  };

  const handleTab = value => {
    setTab(value);
  };

  const handleSelect = value => {
    setSaveType(value);
  };

  const createSuccess = value => {
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
      basicInfoRef.current && basicInfoRef.current.clearForm();
    }
  };

  const createPosts = () => {
    const params = {
      ...basicInformation,
      ...realEstateInformation,
      ...articleDetails,
      status: saveType,
    };
    const formData = new FormData();

    Object.keys(params).forEach((key, value) => {
      if (key === 'isPhoto' || key === 'photo' || key === 'video') return;

      if (params[key]) {
        formData.append(key, params[key]);
      }
    });

    // append image to form
    if (params?.photo?.length) {
      params?.photo.forEach((item, index) => {
        const file = {
          uri: item.uri,
          name: item.fileName,
          type: item.type,
        };
        formData.append(`images[${index}]`, file);
      });
    }

    // append video to form

    dispatchThunk(dispatch, createRealEstates(formData), createSuccess);
  };

  const handleContinue = () => {
    switch (tab) {
      case TAB.BASIC_INFORMATION:
        scrollViewRef.current?.scrollTo();
        const errors = basicInfoRef.current.handleNext();
        if (errors) {
          break;
        } else {
          setTab(tab + 1);
          break;
        }
      case TAB.REAL_ESTATE_INFORMATION:
        const errorsRealEstates = realEstateRef.current.handleNext();
        scrollViewRef.current?.scrollTo();
        if (errorsRealEstates) {
          break;
        } else {
          setTab(tab + 1);
          break;
        }
      case TAB.ARTICLE_DETAILS:
        const errorsArticle = articleDetailRef.current.handleNext();
        if (errorsArticle) {
          break;
        } else {
          createPosts();
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
    navigate('UserPosts', { type: 'createPost' });
  };

  const renderTab = () => {
    switch (tab) {
      case TAB.BASIC_INFORMATION:
        return <BasicInformation ref={basicInfoRef} />;
      case TAB.REAL_ESTATE_INFORMATION:
        return <RealEstateInformation ref={realEstateRef} />;
      case TAB.ARTICLE_DETAILS:
        return <ArticleDetails ref={articleDetailRef} />;
      default:
        return <BasicInformation />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Loading
        visible={loading}
        textContent={t('common.loading')}
        color={COLOR_BLUE_1}
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
                color={COLOR_BLUE_1}
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
            onPress={handleContinue}
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
              onPress={handleContinue}
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
