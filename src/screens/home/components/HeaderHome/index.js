import React from 'react';
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

const HeaderHome = () => (
  <SafeAreaView style={{ backgroundColor: COLOR_WHITE }}>
    <View style={styles.headerHome}>
      <View style={styles.headerLeft}>
        <View style={styles.btnMenu}>
          <MenuThreeLine />
        </View>
        <View style={styles.boxSeLand}>
          <LogoSeland />
          <Text style={styles.seLand}>Se Land</Text>
        </View>
      </View>
      <View style={styles.headerRight}>
        <View style={styles.boxZoning}>
          <LogoZoning />
          <Text style={styles.checkZoning}>Tra quy hoạch</Text>
        </View>
        <View style={styles.line} />
        <IconBell />
      </View>
    </View>
  </SafeAreaView>
);

export default HeaderHome;
