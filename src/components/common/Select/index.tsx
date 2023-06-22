import { Icon } from '@rneui/themed';
import React, { useCallback } from 'react';
import { useController, RegisterOptions } from 'react-hook-form';
import { StyleSheet, TextStyle, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

import { COLORS } from '../../../constants';
import Text from '../Text';
import styles from './styles';

interface IOptions {
  label: string;
  value: string | number;
}

interface SelectProps {
  buttonStyle?: any;
  buttonTextStyle?: TextStyle;
  control?: any;
  data?: IOptions[];
  label?: string | undefined | null;
  labelStyle?: any;
  name?: string;
  onSelect?: Function;
  required?: boolean;
  errors?: string | null;
  rowStyle?: any;
  containerSelect?: any;
  rowTextStyle?: any;
  defaultButtonText?: string | null | any;
  title?: string;
  rules?: RegisterOptions;
}

const Select = ({
  buttonStyle,
  buttonTextStyle,
  control,
  data = [],
  label,
  labelStyle,
  name,
  onSelect,
  required,
  rowStyle,
  containerSelect,
  rowTextStyle,
  defaultButtonText,
  title,
  rules,
  ...props
}: SelectProps) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ control, name, rules });

  const handleChange = (selectedItem: any) => {
    if (onSelect) onSelect(selectedItem);
    onChange(selectedItem.value);
  };

  const renderDropdownIcon = useCallback(
    () => (
      <Icon
        color={COLORS.BLACK_1}
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
          {required && <Text style={{ color: COLORS.RED_1 }}> *</Text>}
        </Text>
      )}
      <View>
        <SelectDropdown
          buttonStyle={StyleSheet.flatten([styles.button, buttonStyle])}
          buttonTextAfterSelection={selectedItem =>
            title ? `${title}: ${selectedItem.label}` : selectedItem.label
          }
          buttonTextStyle={StyleSheet.flatten([styles.text, buttonTextStyle])}
          defaultButtonText={defaultButtonText}
          data={data}
          defaultValueByIndex={data.findIndex(item => item.value === value)}
          onSelect={handleChange}
          renderDropdownIcon={renderDropdownIcon}
          rowStyle={StyleSheet.flatten([rowStyle])}
          rowTextForSelection={item => item.label}
          rowTextStyle={StyleSheet.flatten(styles.rowTextStyle, rowTextStyle)}
          {...props}
        />
      </View>

      {error && (
        <Text style={{ fontSize: 12, color: 'red' }}>{error.message}</Text>
      )}
    </View>
  );
};

export default Select;
