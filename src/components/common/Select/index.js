import { Icon } from '@rneui/themed';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { useController } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

import { COLOR_BLACK_1, COLOR_RED_1 } from '../../../constants';
import Text from '../Text';
import styles from './styles';

const Select = ({
  control,
  data,
  label,
  name,
  rowStyle,
  rowTextStyle,
  buttonTextStyle,
  buttonStyle,
  labelStyle,
  onSelect,
  required,
  errors,
  ...props
}) => {
  const {
    field: { onChange, value },
  } = useController({ control, name });

  const handleChange = selectedItem => {
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
    <View>
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
        rowTextStyle={StyleSheet.flatten(styles.rowTextStyle, rowTextStyle)}
        {...props}
      />
      <Text style={{ fontSize: 12, color: 'red' }}>{errors}</Text>
    </View>
  );
};

Select.defaultProps = {
  data: [],
  label: '',
  errors: '',
  rowTextStyle: {},
  rowStyle: {},
  buttonTextStyle: {},
  buttonStyle: {},
  required: false,
  labelStyle: {},
  onSelect: () => {},
};

Select.propTypes = {
  control: PropTypes.any.isRequired,
  data: PropTypes.array,
  rowTextStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  buttonTextStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  buttonStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  rowStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  label: PropTypes.string,
  errors: PropTypes.string,
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  labelStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onSelect: PropTypes.func,
};

export default Select;
