import PropTypes from 'prop-types';
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

const Screen = ({ children }) => (
  <KeyboardAwareScrollView style={styles.container}>
    <SafeAreaView style={styles.container}>{children}</SafeAreaView>
  </KeyboardAwareScrollView>
);

Screen.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Screen;
