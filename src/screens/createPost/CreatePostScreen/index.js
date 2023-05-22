import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, SafeAreaView, ScrollView, View } from 'react-native';

import { Save } from '../../../assets';
import { Button, Text } from '../../../components';
import { COLOR_BLUE_1, SCREENS, YOUR_WANT } from '../../../constants';
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

const CreatePostScreen = () => {
  const { navigate } = useNavigation();
  const { t } = useTranslation();
  const scrollViewRef = useRef();
  const [tab, setTab] = useState(TAB.BASIC_INFORMATION);
  const [saveType, setSaveType] = useState(YOUR_WANT.SAVE_PRIVATE);

  const handleTab = value => {
    setTab(value);
  };

  const handleSelect = value => {
    setSaveType(value);
  };

  const handleContinue = () => {
    if (tab < TAB.ARTICLE_DETAILS) {
      scrollViewRef.current?.scrollTo();
      setTab(tab + 1);
    } else {
      navigate(SCREENS.CONFIRM_POST_SCREEN);
    }
  };

  const handleBack = () => {
    scrollViewRef.current?.scrollTo();
    setTab(tab - 1);
  };

  const renderTab = () => {
    switch (tab) {
      case TAB.BASIC_INFORMATION:
        return <BasicInformation />;
      case TAB.REAL_ESTATE_INFORMATION:
        return <RealEstateInformation />;
      case TAB.ARTICLE_DETAILS:
        return <ArticleDetails />;
      default:
        return <BasicInformation />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.scroll}
      >
        <View style={styles.header}>
          <Text style={styles.createPostNews}>
            {t('common.createPostNews')}
          </Text>
          <Save />
        </View>
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
