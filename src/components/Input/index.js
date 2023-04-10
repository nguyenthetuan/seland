import { Icon, Input as RNEInput, Text } from '@rneui/themed';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useController } from 'react-hook-form';

import styles from './styles';

const Input = ({
  control,
  isPassword,
  label,
  name,
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

  const handleFocus = () => setIsFocused(true);

  const togglePasswordVisible = () => setPasswordVisible(pv => !pv);

  return (
    <RNEInput
      errorStyle={styles.error}
      inputContainerStyle={styles.input(isFocused)}
      label={<Text style={styles.label}>{label}</Text>}
      onBlur={handleBlur}
      onChangeText={onChange}
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
  label: '',
  rules: {},
  placeholder: '',
};

Input.propTypes = {
  control: PropTypes.any.isRequired,
  isPassword: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  rules: PropTypes.object,
  placeholder: PropTypes.string,
};

export default Input;
