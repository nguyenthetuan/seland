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
import { COLORS, SCREENS } from '../../../../constants';
import DrawerMenuHome from '../DrawerMenu';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const HeaderHome = () => {
  const { t } = useTranslation();
  const drawerRef = useRef();
  const { navigate } = useNavigation();

  const openDrawer = () => drawerRef.current?.openDrawerMenu();

  const navigateMapScreen = () => {
    navigate(SCREENS.MAPS);
  };

  return (
    <View>
      <SafeAreaView style={{ backgroundColor: COLORS.WHITE }}>
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
            <TouchableOpacity
              style={styles.boxZoning}
              onPress={navigateMapScreen}
            >
              <LogoZoning />
              <Text style={styles.checkZoning}>
                {t('common.lookUpPlanning')}
              </Text>
            </TouchableOpacity>
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
