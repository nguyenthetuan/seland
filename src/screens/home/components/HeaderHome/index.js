import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';

import {
  IconBell,
  LogoSeland,
  LogoZoning,
  MenuThreeLine,
} from '../../../../assets';
import { Text } from '../../../../components';
import { COLOR_WHITE } from '../../../../constants';
import styles from './styles';

const HeaderHome = () => {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={{ backgroundColor: COLOR_WHITE }}>
      <View style={styles.headerHome}>
        <View style={styles.headerLeft}>
          <View style={styles.btnMenu}>
            <MenuThreeLine />
          </View>
          <View style={styles.boxSeLand}>
            <LogoSeland />
            <Text style={styles.seLand}>{t('common.seLand')}</Text>
          </View>
        </View>
        <View style={styles.headerRight}>
          <View style={styles.boxZoning}>
            <LogoZoning />
            <Text style={styles.checkZoning}>{t('common.lookUpPlanning')}</Text>
          </View>
          <View style={styles.line} />
          <IconBell />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HeaderHome;
