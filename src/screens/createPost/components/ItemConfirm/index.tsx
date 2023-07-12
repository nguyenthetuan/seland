import React, { FC, ReactNode } from 'react';
import { View } from 'react-native';

import { Text } from '../../../../components';
import styles from './styles';

interface ItemConfirmProps {
  value?: ReactNode | string;
  label?: string;
}
const ItemConfirm: FC<ItemConfirmProps> = ({ value, label }) => (
  <View style={styles.boxItem}>
    <Text style={styles.labelItem}>{label}</Text>
    <Text style={styles.valueItem}>{value}</Text>
  </View>
);

export default ItemConfirm;
