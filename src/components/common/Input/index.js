import { Icon, Input as RNEInput } from '@rneui/themed';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useController } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';

import { COLOR_GRAY_5 } from '../../../constants';
import Text from '../Text';
import styles from './styles';

const Input = ({
  control,
  isPassword,
  isPhoneNumber,
  label,
  name,
  onFocus,
  placeholder,
  showPasswordPolicy,
  styleLabel,
  ...props
}) => {
  const {
    field: { onBlur, onChange, value },
  } = useController({ control, name });
  const { t } = useTranslation();
  const [isFocused, setIsFocused] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordPolicyVisible, setPasswordPolicyVisible] = useState(false);

  const handleBlur = () => {
    onBlur();
    if (showPasswordPolicy) setPasswordPolicyVisible(false);
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
    if (showPasswordPolicy) setPasswordPolicyVisible(true);
    setIsFocused(true);
  };

  const togglePasswordVisible = () => setPasswordVisible(pv => !pv);

  return (
    <>
      <RNEInput
        style={styles.text}
        disabledInputStyle={styles.disabled}
        errorStyle={styles.error}
        inputContainerStyle={styles.input(isFocused)}
        label={
          <Text style={StyleSheet.flatten([styles.label, styleLabel])}>
            {label}
          </Text>
        }
        onBlur={handleBlur}
        onChangeText={handleChange}
        onFocus={handleFocus}
        placeholder={placeholder || label}
        placeholderTextColor={COLOR_GRAY_5}
        renderErrorMessage={!passwordPolicyVisible}
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
      {passwordPolicyVisible && (
        <Text style={styles.passwordPolicy}>{t('common.passwordPolicy')}</Text>
      )}
    </>
  );
};

Input.defaultProps = {
  isPassword: false,
  isPhoneNumber: false,
  label: '',
  onFocus: () => {},
  placeholder: '',
  showPasswordPolicy: false,
};

Input.propTypes = {
  control: PropTypes.any.isRequired,
  isPassword: PropTypes.bool,
  isPhoneNumber: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  showPasswordPolicy: PropTypes.bool,
  styleLabel: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
    .isRequired,
};

export default Input;
