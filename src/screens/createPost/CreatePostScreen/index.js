import { Button, Icon } from '@rneui/base';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, ScrollView, View } from 'react-native';

import { Save } from '../../../assets';
import { Text } from '../../../components';
import { COLOR_BLUE_1 } from '../../../constants';
import BasicInformation from '../components/BasicInformation';
import RealEstateInformation from '../components/RealEstateInformation';
import styles from './styles';

const CreatePostScreen = () => {
  const { t } = useTranslation();

  const [tab, setTab] = useState(0);

  const handleTab = value => {
    setTab(value);
  };

  const renderTab = () => {
    switch (tab) {
      case 0:
        return <BasicInformation />;
      case 1:
        return <RealEstateInformation />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <Text style={styles.createPostNews}>
            {t('common.createPostNews')}
          </Text>
          <Save />
        </View>
        <Text style={styles.youWant}>{t('common.youWant')}</Text>
        <View style={styles.boxCheck}>
          <Button
            buttonStyle={styles.btnYouWant}
            icon="save"
            type="outline"
          >
            <Icon
              color={COLOR_BLUE_1}
              name="radio-button-unchecked"
              size={20}
            />
            <Text style={styles.txtCheck}>{t('button.savePrivate')}</Text>
          </Button>
          <Button
            buttonStyle={styles.btnYouWant}
            type="outline"
          >
            <Icon
              color={COLOR_BLUE_1}
              name="radio-button-checked"
              size={20}
            />
            <Text style={styles.txtCheck}>{t('button.postPublic')}</Text>
          </Button>
        </View>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreatePostScreen;
