import React from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';
import { Button, Text } from '../../../../components';
import { COLORS } from '../../../../constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const MonthPicker = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chọn thời gian</Text>
      <View style={styles.row}>
        <TouchableOpacity>
          <Text style={styles.button}>-</Text>
        </TouchableOpacity>

        <Text style={styles.content}>1 Tháng</Text>
        <TouchableOpacity>
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>
      </View>
      <Text>(Từ 15/02/2023 đến 14/04/2023)</Text>
      <View style={[styles.bottom, { marginBottom: insets.bottom }]}>
        <Button
          buttonStyle={styles.btnConfirm}
          title="Xác nhận"
        />
      </View>
    </View>
  );
};

export default MonthPicker;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: {
    color: COLORS.BLUE_1,
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '500',
  },
  row: { flexDirection: 'row', alignItems: 'center', marginTop: 16 },
  button: {
    borderWidth: 1,
    borderColor: COLORS.GRAY_2,
    paddingHorizontal: 12,
    paddingVertical: 7,
    backgroundColor: COLORS.NEUTRAL2,
  },
  content: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.GRAY_2,
    paddingVertical: 7,
    paddingHorizontal: 12,
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
  },
  btnConfirm: { width: Dimensions.get('screen').width - 40, marginLeft: 20 },
});
