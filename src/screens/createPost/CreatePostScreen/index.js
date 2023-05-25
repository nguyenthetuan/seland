import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, SafeAreaView, ScrollView, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { Save } from '../../../assets';
import { Button, Text } from '../../../components';
import { COLOR_BLUE_1, SCREENS, YOUR_WANT } from '../../../constants';
import { clearCreatePosts } from '../../../features';
import ArticleDetails from '../components/ArticleDetails';
import BasicInformation from '../components/BasicInformation';
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
  const [tab, setTab] = useState(TAB.BASIC_INFORMATION);
  const [saveType, setSaveType] = useState(YOUR_WANT.SAVE_PRIVATE);
  const dispatch = useDispatch();

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
        realEstateRef.current.handleNext();
        scrollViewRef.current?.scrollTo();
        setTab(tab + 1);
        break;
      case TAB.ARTICLE_DETAILS:
        articleDetailRef.current.handleNext();
        navigate(SCREENS.CONFIRM_POST_SCREEN);
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
            Thông tin nhà đất
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
    </SafeAreaView>
  );
};

export default CreatePostScreen;
