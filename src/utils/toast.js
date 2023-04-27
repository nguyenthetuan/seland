import { Icon } from '@rneui/themed';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import RNTMToast, { SuccessToast } from 'react-native-toast-message';

import { COLOR_BLACK_1, COLOR_GREEN_2 } from '../constants';

const styles = StyleSheet.create({
  icon: {
    justifyContent: 'center',
  },
  successBackground: {
    backgroundColor: COLOR_GREEN_2,
  },
  text1: {
    color: COLOR_BLACK_1,
    fontSize: 16,
    lineHeight: 24,
  },
});

const toastConfig = {
  success: props => (
    <SuccessToast
      {...props}
      style={styles.successBackground}
      renderLeadingIcon={() => (
        <View style={styles.icon}>
          <Icon
            color={COLOR_BLACK_1}
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
