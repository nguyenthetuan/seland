import { CheckBox as RNECheckBox } from '@rneui/themed';
import PropTypes from 'prop-types';
import React from 'react';
import { useController } from 'react-hook-form';

import { COLOR_BLUE_1, COLOR_GRAY_2 } from '../../constants';
import Text from '../Text';
import styles from './styles';

const CheckBox = ({ control, name, title, ...props }) => {
  const {
    field: { onBlur, onChange, value },
  } = useController({ control, name });

  const handlePress = () => onChange(!value);

  return (
    <RNECheckBox
      checked={value}
      checkedColor={COLOR_BLUE_1}
      checkedIcon="check-box"
      containerStyle={styles.checkbox}
      iconType="material"
      onBlur={onBlur}
      onPress={handlePress}
      title={<Text>{title}</Text>}
      uncheckedColor={COLOR_GRAY_2}
      uncheckedIcon="check-box-outline-blank"
      {...props}
    />
  );
};

CheckBox.defaultProps = {
  title: '',
};

CheckBox.propTypes = {
  control: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.node,
};

export default CheckBox;
