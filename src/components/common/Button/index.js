import { Button as RNEButton } from '@rneui/themed';
import PropTypes from 'prop-types';
import React from 'react';

import { COLOR_BLUE_1 } from '../../../constants';
import Text from '../Text';
import styles from './styles';

const Button = ({
  buttonStyle,
  color,
  loading,
  title,
  titleStyle,
  ...props
}) => (
  <RNEButton
    buttonStyle={
      Array.isArray(buttonStyle)
        ? [styles.button, ...buttonStyle]
        : [styles.button, buttonStyle]
    }
    color={color}
    disabled={loading}
    disabledStyle={styles.disabled}
    loading={loading}
    title={<Text style={styles.title}>{title}</Text>}
    titleStyle={
      Array.isArray(titleStyle)
        ? [styles.title, ...titleStyle]
        : [styles.title, titleStyle]
    }
    {...props}
  />
);

Button.defaultProps = {
  buttonStyle: {},
  color: COLOR_BLUE_1,
  loading: false,
  title: '',
  titleStyle: {},
};

Button.propTypes = {
  buttonStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  color: PropTypes.string,
  loading: PropTypes.bool,
  title: PropTypes.string,
  titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Button;
