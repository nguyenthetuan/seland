import { Text as RNEText } from '@rneui/themed';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles';

const Text = ({ children, style, ...props }) => (
  <RNEText
    style={
      Array.isArray(style) ? [styles.text, ...style] : [styles.text, style]
    }
    {...props}
  >
    {children}
  </RNEText>
);

Text.defaultProps = {
  style: {},
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Text;
