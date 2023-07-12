import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '../../../../components';
import { COLORS } from '../../../../constants';
import { IconEdit } from '../../../../assets';

interface Props {
  leftText: string;
  rightText: string;
  onPressEdit?: () => void;
}
const PackInfoRow = (props: Props) => {
  const { leftText, rightText, onPressEdit } = props;
  return (
    <View style={styles.rowSpace}>
      <Text style={styles.left}>{leftText}</Text>
      <View style={styles.row}>
        <Text style={styles.right}>{rightText}</Text>
        {onPressEdit && (
          <View style={styles.marginL6}>
            <IconEdit />
          </View>
        )}
      </View>
    </View>
  );
};

export default PackInfoRow;

const styles = StyleSheet.create({
  infoTitle: {
    fontSize: 16,
    color: COLORS.TITLE,
    fontWeight: '500',
  },
  rowSpace: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 18,
  },
  row: { flexDirection: 'row', alignItems: 'center' },
  left: {
    fontSize: 14,
    color: COLORS.NORMAL,
  },
  right: {
    fontSize: 14,
    color: COLORS.TITLE,
    fontWeight: '500',
  },
  marginL6: {
    marginLeft: 6,
  },
});
