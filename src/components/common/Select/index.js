import { Icon } from '@rneui/themed';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { useController } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

import { COLOR_BLACK_1 } from '../../../constants';
import Text from '../Text';
import styles from './styles';

const Select = ({
  buttonStyle,
  buttonTextStyle,
  control,
  data,
  label,
  labelStyle,
  name,
  onSelect,
  rowStyle,
  containerSelect,
  rowTextStyle,
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
    <View style={containerSelect}>
      {label && (
        <Text style={StyleSheet.flatten([styles.label, labelStyle])}>
          {label}
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
    </View>
  );
};

Select.defaultProps = {
  buttonStyle: {},
  buttonTextStyle: {},
  data: [],
  label: '',
  labelStyle: {},
  containerSelect: {},
  onSelect: () => {},
  rowStyle: {},
  rowTextStyle: {},
};

Select.propTypes = {
  buttonStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  buttonTextStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  control: PropTypes.any.isRequired,
  data: PropTypes.array,
  label: PropTypes.string,
  labelStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  containerSelect: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  name: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
  rowStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  rowTextStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Select;
