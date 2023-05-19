import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import { Text } from '../../../../components';
import styles from './styles';

const ItemConfirm = ({ value, label }) => (
  <View style={styles.boxItem}>
    <Text style={styles.labelItem}>{label}</Text>
    <Text style={styles.valueItem}>{value}</Text>
  </View>
);

ItemConfirm.defaultProps = {
  label: '',
  value: '',
};

ItemConfirm.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
};

export default ItemConfirm;
