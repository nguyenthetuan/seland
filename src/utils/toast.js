import { Icon } from '@rneui/themed';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import RNTMToast, { SuccessToast } from 'react-native-toast-message';

import { COLORS } from '../constants';

const styles = StyleSheet.create({
  icon: {
    justifyContent: 'center',
  },
  successBackground: {
    backgroundColor: COLORS.GREEN_2,
  },
  text1: {
    color: COLORS.BLACK_1,
    flexWrap: 'wrap',
    fontSize: 12,
    lineHeight: 24,
  },
});

export const toastConfig = {
  success: props => (
    <SuccessToast
      {...props}
      style={styles.successBackground}
      renderLeadingIcon={() => (
        <View style={styles.icon}>
          <Icon
            color={COLORS.BLACK_1}
            name="check-circle"
          />
        </View>
      )}
      text1Style={styles.text1}
    />
  ),
};

const Toast = () => (
  <RNTMToast
    config={toastConfig}
    position="bottom"
  />
);

export default Toast;
