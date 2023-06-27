import { Icon, Input as RNEInput, InputProps } from '@rneui/themed';
import React, { ReactNode, useState } from 'react';
import { useController, RegisterOptions } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
  InputModeOptions,
  StyleSheet,
  TextInputAndroidProps,
  View,
  ViewStyle,
} from 'react-native';

import { COLORS } from '../../../constants';
import Text from '../Text';
import styles from './styles';

interface InputCustomProps extends InputProps {
  autoComplete?: TextInputAndroidProps['autoComplete'];
  control: any;
  isEmail?: boolean;
  isNumeric?: boolean;
  isPassword?: boolean;
  isWebsite?: boolean;
  inputContainerStyle?: ViewStyle;
  // label?: string | undefined;
  labelStyle?: Object | [];
  errorStyle?: Object | [];
  name: string;
  onChangeText?: (v: string) => void;
  onFocus?: () => void;
  placeholder?: string;
  required?: boolean;
  rightLabel?: string | ReactNode;
  rightAfterLabel?: string | ReactNode;
  showPasswordPolicy?: boolean;
  disabled?: boolean;
  inputMode?: InputModeOptions;
  renderErrorMessage?: any;
  rules?: RegisterOptions;
  errorMessage?: string;
}

const Input = ({
  control,
  inputContainerStyle = {},
  isEmail = false,
  isNumeric = false,
  isPassword = false,
  isWebsite = false,
  label = '',
  labelStyle = {},
  name,
  renderErrorMessage,
  onChangeText = () => {},
  onFocus = () => {},
  placeholder = '',
  required = false,
  rightLabel,
  showPasswordPolicy = false,
  errorStyle = {},
  rules,
  inputMode,
  errorMessage,
  rightAfterLabel,
  ...props
}: InputCustomProps) => {
  const {
    field: { onBlur, onChange, value },
    fieldState: { error },
  } = useController({ control, name, rules, defaultValue: '' });
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
    let txt = '';
    switch (inputMode) {
      case 'decimal':
        txt = text.replace(/[^\d*\.?\d*$]/g, '');
        console.log('inputMode', inputMode, txt);
        break;
      case 'numeric':
        txt = text.replace(/[^\d]/g, '');
        break;
      default:
        txt =
          isEmail || isPassword || isWebsite ? text.replace(/\s/g, '') : text;
        break;
    }
    onChange(txt);
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
        errorStyle={StyleSheet.flatten([styles.error, errorStyle])}
        containerStyle={styles.containerInput}
        inputContainerStyle={StyleSheet.flatten([
          styles.input(isFocused),
          inputContainerStyle,
        ])}
        label={
          label && (
            <View style={styles.boxLabel}>
              <View>
                <Text style={StyleSheet.flatten([styles.label, labelStyle])}>
                  {label}
                  {required && <Text style={{ color: COLORS.RED_1 }}> *</Text>}
                  <View style={styles.wrapRightAfterLabel}>{rightAfterLabel}</View>
                </Text>
              </View>
              {rightLabel}
            </View>
          )
        }
        onBlur={handleBlur}
        onChangeText={handleChange}
        onFocus={handleFocus}
        placeholder={placeholder || label}
        placeholderTextColor={COLORS.GRAY_5}
        renderErrorMessage={
          renderErrorMessage != undefined
            ? renderErrorMessage
            : !passwordPolicyVisible
        }
        errorMessage={errorMessage || error?.message}
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
