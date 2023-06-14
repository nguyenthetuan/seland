import { Button as RNEButton } from '@rneui/themed';
import React from 'react';
import { StyleSheet } from 'react-native';

import { COLORS } from '../../../constants';
import Text from '../Text';
import styles from './styles';

interface ButtonProps {
  buttonStyle?: {};
  color?: string;
  loading?: boolean;
  outline?: boolean;
  title?: string | null;
  titleStyle?: {};
  onPress?: () => void;
  icon?: any;
  radius?: number;
}

const Button = ({
  buttonStyle,
  color = COLORS.BLUE_1,
  loading = false,
  outline = false,
  title = '',
  titleStyle,
  ...props
}: ButtonProps) => (
  <RNEButton
    buttonStyle={StyleSheet.flatten([styles.outline(color), buttonStyle])}
    color={outline ? COLORS.WHITE : color}
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
