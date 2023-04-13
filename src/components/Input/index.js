import { Icon, Input as RNEInput, Text } from '@rneui/themed';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useController } from 'react-hook-form';

import styles from './styles';

const Input = ({
  control,
  isPassword,
  isPhoneNumber,
  label,
  name,
  onFocus,
  placeholder,
  rules,
  ...props
}) => {
  const {
    field: { onBlur, onChange, value },
  } = useController({ control, name, rules });
  const [isFocused, setIsFocused] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleBlur = () => {
    onBlur();
    setIsFocused(false);
  };

  const handleChange = text => {
    onChange(
      isPhoneNumber
        ? text.replace(/[^\d]/g, '')
        : isPassword
        ? text.replace(/\s/g, '')
        : text
    );
  };

  const handleFocus = () => {
    onFocus();
    setIsFocused(true);
  };

  const togglePasswordVisible = () => setPasswordVisible(pv => !pv);

  return (
    <RNEInput
      errorStyle={styles.error}
      inputContainerStyle={styles.input(isFocused)}
      label={<Text style={styles.label}>{label}</Text>}
      onBlur={handleBlur}
      onChangeText={handleChange}
      onFocus={handleFocus}
      placeholder={placeholder || label}
      rightIcon={
        isPassword && (
          <Icon
            name={passwordVisible ? 'visibility' : 'visibility-off'}
            onPress={togglePasswordVisible}
          />
        )
      }
      secureTextEntry={isPassword && !passwordVisible}
      value={value}
      {...props}
    />
  );
};

Input.defaultProps = {
  isPassword: false,
  isPhoneNumber: false,
  label: '',
  onFocus: () => {},
  placeholder: '',
  rules: {},
};

Input.propTypes = {
  control: PropTypes.any.isRequired,
  isPassword: PropTypes.bool,
  isPhoneNumber: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  rules: PropTypes.object,
};

export default Input;
