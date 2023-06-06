import { Icon, Input as RNEInput } from '@rneui/themed';
import React, { useState } from 'react';
import { useController } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
  InputModeOptions,
  StyleSheet,
  TextInputAndroidProps,
  View,
  ViewStyle,
} from 'react-native';

import { COLOR_GRAY_5, COLOR_RED_1 } from '../../../constants';
import Text from '../Text';
import styles from './styles';

interface InputProps {
  autoComplete: TextInputAndroidProps['autoComplete'];
  control: any;
  isEmail?: boolean;
  isNumeric?: boolean;
  isPassword?: boolean;
  isWebsite?: boolean;
  inputContainerStyle?: ViewStyle;
  label: string;
  labelStyle?: Object | [];
  name: string;
  onChangeText?: (v: string) => void;
  onFocus: () => void;
  placeholder?: string;
  required?: boolean;
  rightLabel?: string;
  showPasswordPolicy?: boolean;
  disabled: boolean;
  errorMessage?: string;
  inputMode?: InputModeOptions;
}

const Input = ({
  control,
  inputContainerStyle,
  isEmail = false,
  isNumeric = false,
  isPassword = false,
  isWebsite = false,
  label = '',
  labelStyle = {},
  name,
  onChangeText,
  onFocus,
  placeholder = '',
  required = false,
  rightLabel = '',
  showPasswordPolicy = false,
  ...props
}: InputProps) => {
  const {
    field: { onBlur, onChange, value },
  } = useController({ control, name });
  const { t } = useTranslation();
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [passwordPolicyVisible, setPasswordPolicyVisible] =
    useState<boolean>(false);

  const handleBlur = () => {
    onBlur();
    if (showPasswordPolicy) setPasswordPolicyVisible(false);
    setIsFocused(false);
  };

  const handleChange = (text: string) => {
    if (onChangeText) onChangeText(text);
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
    <View>
      <RNEInput
        style={styles.text}
        errorStyle={styles.error}
        containerStyle={styles.containerInput}
        inputContainerStyle={StyleSheet.flatten([
          styles.input(isFocused),
          inputContainerStyle,
        ])}
        label={
          label && (
            <View style={styles.boxLabel}>
              <Text style={StyleSheet.flatten([styles.label, labelStyle])}>
                {label}
                {required && <Text style={{ color: COLOR_RED_1 }}> *</Text>}
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

export default Input;
