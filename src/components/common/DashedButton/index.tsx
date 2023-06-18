import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import Text from '../Text';
import styles from './styles';

interface DashedButtonProps {
  title: string;
  icon?: any;
}

const DashedButton = ({ title = '', icon,  ...props }: DashedButtonProps) => (
  <TouchableOpacity
    activeOpacity={0.5}
    style={styles.btnDashed}
    {...props}
  >
    <View style={styles.wrapper}>
     {icon && <View style={styles.iconWrap}>
        {icon}
      </View>}
      <Text style={styles.btnLabel}>{title}</Text>
    </View>
  </TouchableOpacity>
);

export default DashedButton;
