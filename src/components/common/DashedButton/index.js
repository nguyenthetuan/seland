import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import Text from '../Text';
import styles from './styles';

const DashedButton = ({ title, ...props }) => (
  <TouchableOpacity
    activeOpacity={0.5}
    style={styles.btnDashed}
    {...props}
  >
    <Text style={styles.btnLabel}>{title}</Text>
  </TouchableOpacity>
);

DashedButton.defaultProps = {
  title: '',
};

DashedButton.propTypes = {
  title: PropTypes.string,
};

export default DashedButton;
