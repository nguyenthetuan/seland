import { Button as RNEButton } from '@rneui/themed';
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet } from 'react-native';

import { COLOR_BLUE_1, COLOR_WHITE } from '../../../constants';
import Text from '../Text';
import styles from './styles';

const Button = ({
  buttonStyle,
  color,
  loading,
  outline,
  title,
  titleStyle,
  ...props
}) => (
  <RNEButton
    buttonStyle={StyleSheet.flatten([buttonStyle, styles.outline(color)])}
    color={outline ? COLOR_WHITE : color}
    disabled={loading}
    disabledStyle={styles.disabled}
    loading={loading}
    radius={8}
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

Button.defaultProps = {
  buttonStyle: {},
  color: COLOR_BLUE_1,
  loading: false,
  outline: false,
  title: '',
  titleStyle: {},
};

Button.propTypes = {
  buttonStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  color: PropTypes.string,
  loading: PropTypes.bool,
  outline: PropTypes.bool,
  title: PropTypes.string,
  titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Button;
