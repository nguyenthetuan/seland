import React from 'react';
import { TouchableOpacity } from 'react-native';

import Text from '../Text';
import styles from './styles';

interface DashedButtonProps {
  title: string;
}

const DashedButton = ({ title = '', ...props }: DashedButtonProps) => (
  <TouchableOpacity
    activeOpacity={0.5}
    style={styles.btnDashed}
    {...props}
  >
    <Text style={styles.btnLabel}>{title}</Text>
  </TouchableOpacity>
);

export default DashedButton;
