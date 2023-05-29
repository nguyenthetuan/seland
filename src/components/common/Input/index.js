import { Icon, Input as RNEInput } from '@rneui/themed';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useController } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';

import { COLOR_GRAY_5, COLOR_RED_1 } from '../../../constants';
import Text from '../Text';
import styles from './styles';

const Input = ({
  control,
  inputContainerStyle,
  isEmail,
  isNumeric,
  isPassword,
  isWebsite,
  label,
  labelStyle,
  name,
  onFocus,
  placeholder,
  required,
  rightLabel,
  showPasswordPolicy,
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
      isNumeric
        ? text.replace(/[^\d]/g, '')
        : isEmail || isPassword || isWebsite
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
    <View style={{ flex: 1 }}>
      <RNEInput
        style={styles.text}
        errorStyle={styles.error}
        inputContainerStyle={StyleSheet.flatten([
          styles.input(isFocused),
          inputContainerStyle,
        ])}
        label={
          label && (
            <View style={styles.boxLabel}>
              <Text style={StyleSheet.flatten([styles.label, labelStyle])}>
                {label}
                {required && ' *'}
              </Text>
              {rightLabel}
            </View>
          )
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
    </View>
  );
};

Input.defaultProps = {
  inputContainerStyle: {},
  isEmail: false,
  isNumeric: false,
  isPassword: false,
  isWebsite: false,
  label: '',
  labelStyle: {},
  onFocus: () => {},
  placeholder: '',
  required: false,
  rightLabel: '',
  showPasswordPolicy: false,
};

Input.propTypes = {
  control: PropTypes.any.isRequired,
  inputContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  isEmail: PropTypes.bool,
  isNumeric: PropTypes.bool,
  isPassword: PropTypes.bool,
  isWebsite: PropTypes.bool,
  label: PropTypes.string,
  labelStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  name: PropTypes.string.isRequired,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  rightLabel: PropTypes.node,
  showPasswordPolicy: PropTypes.bool,
};

export default Input;
