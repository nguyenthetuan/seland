import { Icon, Input as RNEInput, Text } from '@rneui/themed';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import styles from './styles';

const Input = ({ isPassword, label, placeholder, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleBlur = () => setIsFocused(false);

  const handleFocus = () => setIsFocused(true);

  const togglePasswordVisible = () => setPasswordVisible(pv => !pv);

  return (
    <RNEInput
      inputContainerStyle={styles.input(isFocused)}
      label={<Text style={styles.label}>{label}</Text>}
      onBlur={handleBlur}
      onFocus={handleFocus}
      rightIcon={
        isPassword && (
          <Icon
            name={passwordVisible ? 'visibility' : 'visibility-off'}
            onPress={togglePasswordVisible}
          />
        )
      }
      placeholder={placeholder || label}
      secureTextEntry={isPassword && !passwordVisible}
      {...props}
    />
  );
};

Input.defaultProps = {
  isPassword: false,
  label: '',
  placeholder: '',
};

Input.propTypes = {
  isPassword: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
