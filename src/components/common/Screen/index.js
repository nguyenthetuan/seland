import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

const Screen = ({ children, noSafeArea }) => (
  <KeyboardAwareScrollView style={styles.container}>
    {noSafeArea ? (
      <View style={styles.container}>{children}</View>
    ) : (
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    )}
  </KeyboardAwareScrollView>
);

Screen.defaultProps = {
  noSafeArea: false,
};

Screen.propTypes = {
  children: PropTypes.node.isRequired,
  noSafeArea: PropTypes.bool,
};

export default Screen;
