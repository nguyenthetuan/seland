import { Icon } from '@rneui/themed';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { useController } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

import { COLOR_BLACK_1 } from '../../../constants';
import Text from '../Text';
import styles from './styles';

const Select = ({
  control,
  data,
  label,
  name,
  rowStyle,
  rowTextStyle,
  ...props
}) => {
  const {
    field: { onChange, value },
  } = useController({ control, name });

  const handleChange = selectedItem => onChange(selectedItem.value);

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
    <>
      {label && <Text style={styles.label}>{label}</Text>}
      <SelectDropdown
        buttonStyle={[styles.button, styles.row]}
        buttonTextAfterSelection={selectedItem => selectedItem.label}
        buttonTextStyle={styles.text}
        data={data}
        defaultValueByIndex={data.findIndex(item => item.value === value)}
        onSelect={handleChange}
        renderDropdownIcon={renderDropdownIcon}
        rowStyle={StyleSheet.flatten([styles.row, { height: 10 }])}
        rowTextForSelection={item => item.label}
        rowTextStyle={StyleSheet.flatten(styles.text, rowTextStyle)}
        {...props}
      />
    </>
  );
};

Select.defaultProps = {
  data: [],
  label: '',
  rowTextStyle: {},
  rowStyle: {},
};

Select.propTypes = {
  control: PropTypes.any.isRequired,
  data: PropTypes.array,
  rowTextStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  rowStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Select;
