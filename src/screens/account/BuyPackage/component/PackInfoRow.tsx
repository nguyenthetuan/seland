import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Text } from '../../../../components';
import { COLORS } from '../../../../constants';
import { IconEdit } from '../../../../assets';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  leftText: string;
  rightText: string;
  onPressEdit?: () => void;
  rowStyle?: ViewStyle;
}
const PackInfoRow = (props: Props) => {
  const { leftText, rightText, onPressEdit, rowStyle } = props;
  return (
    <View style={[styles.rowSpace, rowStyle]}>
      <Text style={styles.left}>{leftText}</Text>
      {onPressEdit ? (
        <TouchableOpacity onPress={onPressEdit}>
          <View style={styles.row}>
            <Text style={styles.right}>{rightText}</Text>
            <View style={styles.marginL6}>
              <IconEdit />
            </View>
          </View>
        </TouchableOpacity>
      ) : (
        <View>
          <Text style={styles.right}>{rightText}</Text>
        </View>
      )}
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
