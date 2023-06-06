import React from 'react';
import { ImageBackground, View } from 'react-native';

import { Logo, SeLand } from '../../../assets';
import styles from './styles';

const AuthBackground = () => (
  <ImageBackground
    source={SeLand}
    style={styles.image}
  >
    <View style={styles.logo}>
      <Logo />
    </View>
  </ImageBackground>
);

export default AuthBackground;
