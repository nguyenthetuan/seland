import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

interface ScreenProps {
  children: ReactNode;
  noSafeArea?: boolean;
}

const Screen = ({ children, noSafeArea = false }: ScreenProps) => (
  <KeyboardAwareScrollView style={styles.container}>
    {noSafeArea ? (
      <View style={styles.container}>{children}</View>
    ) : (
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    )}
  </KeyboardAwareScrollView>
);

export default Screen;
