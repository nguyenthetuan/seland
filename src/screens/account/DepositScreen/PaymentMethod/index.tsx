import React from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { IconArrowRight, IconBank } from './icon';
import { COLORS } from '../../../../constants';
import { Text } from '../../../../components';
import { StyleProp } from 'react-native';

interface Props {
  title: string;
  icon: JSX.Element;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}
const PaymentMethod = (props: Props) => {
  const { title, icon, onPress, style } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style]}
    >
      <View style={styles.left}>
        {icon}
        <Text style={styles.title}>{title}</Text>
      </View>
      <IconArrowRight />
    </TouchableOpacity>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    padding: 16,
    borderColor: COLORS.NEUTRAL4,
    backgroundColor: COLORS.NEUTRAL2,
  },
  left: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  title: { marginLeft: 16, fontSize: 16, fontWeight: '500' },
});
