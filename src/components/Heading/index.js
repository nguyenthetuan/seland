import { Text } from '@rneui/themed';
import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import styles from './styles';

const Heading = ({ children, hasHello }) => (
  <View style={styles.container}>
    {hasHello && <Text style={styles.hello}>Xin chào bạn</Text>}
    <Text style={styles.heading}>{children}</Text>
  </View>
);

Heading.defaultProps = {
  hasHello: false,
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  hasHello: PropTypes.bool,
};

export default Heading;
