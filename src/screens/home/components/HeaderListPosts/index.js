import { useNavigation } from '@react-navigation/native';
import { Icon, Input } from '@rneui/themed';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';

import { LogoZoning } from '../../../../assets';
import { Text } from '../../../../components';
import { COLORS } from '../../../../constants';
import styles from './styles';

const HeaderListPosts = () => {
  const { t } = useTranslation();
  const { goBack } = useNavigation();

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.WHITE }}>
      <View style={styles.headerListPosts}>
        <Icon
          name="arrow-back"
          onPress={goBack}
        />
        <Input
          containerStyle={styles.inputContainer}
          inputContainerStyle={styles.inputSearch}
          rightIcon={<Icon name="search" />}
        />
        <Icon name="my-location" />
        <View style={styles.boxZoning}>
          <LogoZoning />
          <Text style={styles.checkZoning}>{t('heading.checkZoning')}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HeaderListPosts;
