import { Button as RNEButton } from '@rneui/themed';
import React from 'react';
import { StyleSheet } from 'react-native';

import { COLOR_BLUE_1, COLOR_WHITE } from '../../../constants';
import Text from '../Text';
import styles from './styles';

interface ButtonProps {
  buttonStyle: {};
  color?: string;
  loading: boolean;
  outline?: boolean;
  title?: string | null;
  titleStyle?: {};
  onPress?: () => void;
}

const Button = ({
  buttonStyle,
  color = COLOR_BLUE_1,
  loading = false,
  outline = false,
  title = '',
  titleStyle,
  ...props
}: ButtonProps) => (
  <RNEButton
    buttonStyle={StyleSheet.flatten([styles.outline(color), buttonStyle])}
    color={outline ? COLOR_WHITE : color}
    disabled={loading}
    disabledStyle={styles.disabled}
    loading={loading}
    radius={props?.radius}
    title={
      <Text
        style={StyleSheet.flatten([styles.title(color, outline), titleStyle])}
      >
        {title}
      </Text>
    }
    {...props}
  />
);

export default Button;
