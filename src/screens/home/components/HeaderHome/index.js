import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';

import {
  IconBell,
  LogoSeland,
  LogoZoning,
  MenuThreeLine,
} from '../../../../assets';
import { Text } from '../../../../components';
import { COLOR_WHITE } from '../../../../constants';
import DrawerMenuHome from '../DrawerMenu';
import styles from './styles';

const HeaderHome = () => {
  const { t } = useTranslation();
  const drawerRef = useRef();

  const openDrawer = () => drawerRef.current?.openDrawerMenu();

  return (
    <View>
      <SafeAreaView style={{ backgroundColor: COLOR_WHITE }}>
        <View style={styles.headerHome}>
          <View style={styles.headerLeft}>
            <TouchableOpacity
              style={styles.btnMenu}
              onPress={openDrawer}
            >
              <MenuThreeLine />
            </TouchableOpacity>
            <View style={styles.boxSeLand}>
              <LogoSeland />
              <Text style={styles.seLand}>{t('common.seLand')}</Text>
            </View>
          </View>
          <View style={styles.headerRight}>
            <View style={styles.boxZoning}>
              <LogoZoning />
              <Text style={styles.checkZoning}>
                {t('common.lookUpPlanning')}
              </Text>
            </View>
            <View style={styles.line} />
            <IconBell />
          </View>
        </View>
      </SafeAreaView>
      <DrawerMenuHome ref={drawerRef} />
    </View>
  );
};

export default HeaderHome;
