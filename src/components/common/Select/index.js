import { Icon } from '@rneui/themed';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { useController } from 'react-hook-form';
import SelectDropdown from 'react-native-select-dropdown';

import { COLOR_BLACK_1 } from '../../../constants';
import Text from '../Text';
import styles from './styles';

const Select = ({ control, data, label, name, ...props }) => {
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
      <Text style={styles.label}>Giới tính</Text>
      <SelectDropdown
        buttonStyle={[styles.button, styles.row]}
        buttonTextAfterSelection={selectedItem => selectedItem.label}
        buttonTextStyle={styles.text}
        data={data}
        defaultValueByIndex={data.findIndex(item => item.value === value)}
        onSelect={handleChange}
        renderDropdownIcon={renderDropdownIcon}
        rowStyle={styles.row}
        rowTextForSelection={item => item.label}
        rowTextStyle={styles.text}
        {...props}
      />
    </>
  );
};

Select.defaultProps = {
  data: [],
  label: '',
};

Select.propTypes = {
  control: PropTypes.any.isRequired,
  data: PropTypes.array,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Select;
