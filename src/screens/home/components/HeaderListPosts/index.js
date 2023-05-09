import { Icon } from '@rneui/base';
import { Input } from '@rneui/themed';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';

import { LogoZoning } from '../../../../assets';
import { Text } from '../../../../components';
import { COLOR_WHITE } from '../../../../constants';
import styles from './styles';

const HeaderListPosts = () => {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={{ backgroundColor: COLOR_WHITE }}>
      <View style={styles.headerListPosts}>
        <Icon name="arrow-back" />
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
