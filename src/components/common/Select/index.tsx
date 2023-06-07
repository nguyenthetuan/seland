import { Icon } from '@rneui/themed';
import React, { useCallback } from 'react';
import { useController } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

import { COLOR_BLACK_1, COLOR_RED_1 } from '../../../constants';
import Text from '../Text';
import styles from './styles';

interface SelectProps {
  buttonStyle: {} | [];
  buttonTextStyle: {};
  control: any;
  data: { value: number }[];
  label: string;
  errors?: string;
  required?: boolean;
  name: string;
  labelStyle?: {};
  containerSelect?: {} | [];
  onSelect?: (data: any) => void;
  rowStyle: {};
  rowTextStyle?: {} | [];
  defaultButtonText?: string | null;
}

const Select = ({
  buttonStyle = {},
  buttonTextStyle = {},
  control,
  data = [],
  label = '',
  labelStyle = {},
  name,
  onSelect = () => {},
  required = false,
  errors = '',
  rowStyle = {},
  containerSelect = {},
  rowTextStyle = {},
  defaultButtonText = '',
  ...props
}: SelectProps) => {
  const {
    field: { onChange, value },
  } = useController({ control, name });

  const handleChange = (selectedItem: { label: string; value: number }) => {
    if (onSelect) onSelect(selectedItem);
    onChange(selectedItem.value);
  };

  const renderDropdownIcon = useCallback(
    () => (
      <Icon
        color={COLOR_BLACK_1}
        name="expand-more"
      />
    ),
    []
  );

  return (
    <View style={containerSelect}>
      {label && (
        <Text style={StyleSheet.flatten([styles.label, labelStyle])}>
          {label}
          {required && <Text style={{ color: COLOR_RED_1 }}> *</Text>}
        </Text>
      )}
      <SelectDropdown
        buttonStyle={StyleSheet.flatten([styles.button, buttonStyle])}
        buttonTextAfterSelection={selectedItem => selectedItem.label}
        buttonTextStyle={StyleSheet.flatten([
          styles.text(data.findIndex(item => item.value === value)),
          buttonTextStyle,
        ])}
        data={data}
        defaultValueByIndex={data.findIndex(item => item.value === value)}
        onSelect={handleChange}
        renderDropdownIcon={renderDropdownIcon}
        rowStyle={StyleSheet.flatten([rowStyle])}
        rowTextForSelection={item => item.label}
        rowTextStyle={StyleSheet.flatten([styles.rowTextStyle, rowTextStyle])}
        {...props}
      />
      <Text style={{ fontSize: 12, color: 'red' }}>{errors}</Text>
    </View>
  );
};

export default Select;
