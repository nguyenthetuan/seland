import { Button as RNEButton } from '@rneui/themed';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { COLORS } from '../../../constants';
import Text from '../Text';
import styles from './styles';

interface ButtonProps extends Button {
  buttonStyle?: {};
  color?: string;
  loading?: boolean;
  outline?: boolean;
  title?: string | null;
  titleStyle?: {};
  onPress?: () => void;
  icon?: any;
  radius?: number;
  disable?: boolean;
}

const Button = ({
  buttonStyle,
  color = COLORS.BLUE_1,
  loading = false,
  outline = false,
  title = '',
  titleStyle,
  icon,
  disable = false,
  ...props
}: ButtonProps) => (
  <RNEButton
    buttonStyle={StyleSheet.flatten([styles.outline(color), buttonStyle])}
    color={outline ? COLORS.WHITE : color}
    disabled={loading || disable}
    disabledStyle={styles.disabled}
    loading={loading}
    radius={props?.radius}
    title={
      <View style={styles.wrap}>
        {icon && <View style={styles.wrapIcon}>{icon}</View>}

        <Text
          style={StyleSheet.flatten([styles.title(color, outline), titleStyle])}
        >
          {title}
        </Text>
      </View>
    }
    {...props}
  />
);

export default Button;
