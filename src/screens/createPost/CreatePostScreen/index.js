import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, ScrollView, View } from 'react-native';

import { Save } from '../../../assets';
import { Button, Text } from '../../../components';
import { COLOR_BLUE_1, SCREENS } from '../../../constants';
import ArticleDetails from '../components/ArticleDetails';
import BasicInformation from '../components/BasicInformation';
import RealEstateInformation from '../components/RealEstateInformation';
import styles from './styles';

const YouWant = [
  {
    name: 'savePrivate',
    key: 1,
  },
  {
    name: 'postPublic',
    key: 2,
  },
  {
    name: 'saveDrafts',
    key: 3,
  },
];
const CreatePostScreen = () => {
  const { navigate } = useNavigation();
  const { t } = useTranslation();
  const scrollViewRef = useRef();
  const [tab, setTab] = useState(0);
  const [youWant, setYouWant] = useState(1);

  const handleTab = value => {
    setTab(value);
  };

  const handleSelect = value => {
    setYouWant(value);
  };

  const handleContinue = () => {
    if (tab < 2) {
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
      case 0:
        return <BasicInformation />;
      case 1:
        return <RealEstateInformation />;
      case 2:
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
          {YouWant.map(item => (
            <Button
              key={`youWant${item?.key}`}
              buttonStyle={styles.btnYouWant}
              icon="save"
              outline
              onPress={() => handleSelect(item.key)}
            >
              <Icon
                color={COLOR_BLUE_1}
                name={
                  youWant === item?.key
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
          <View style={styles.dot([0, 1, 2].includes(tab))} />
          <View style={styles.line1([1, 2].includes(tab))} />
          <View style={styles.dot([1, 2].includes(tab))} />
          <View style={styles.line1(tab === 2)} />
          <View style={styles.dot(tab === 2)} />
        </View>
        <View style={styles.boxTab}>
          <Text
            style={styles.labelTab(tab === 0)}
            onPress={() => handleTab(0)}
          >
            Thông tin cơ bản
          </Text>
          <Text
            style={styles.labelTab(tab === 1)}
            onPress={() => handleTab(1)}
          >
            Thông tin nhà đất
          </Text>
          <Text
            style={styles.labelTab(tab === 2)}
            onPress={() => handleTab(2)}
          >
            Chi tiết bài đăng
          </Text>
        </View>
        {renderTab()}
        {tab === 0 ? (
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
