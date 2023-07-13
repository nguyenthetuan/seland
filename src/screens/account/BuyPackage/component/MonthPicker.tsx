import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';
import { Button, Text } from '../../../../components';
import { COLORS } from '../../../../constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import moment, { Moment } from 'moment';

interface Props {
  onMonthSelect: (months: number) => void;
  defaultMonth: number;
  end_date: string | undefined;
}

const MonthPicker = (props: Props) => {
  const { onMonthSelect, defaultMonth, end_date } = props;
  const insets = useSafeAreaInsets();
  const [month, setMonth] = useState(1);

  const generateDuration = (): string => {
    let fromObject: Moment;
    if (end_date) {
      fromObject = moment(end_date, 'YYYY-MM-DD hh:mm:ss');
    } else {
      fromObject = moment();
    }
    const from = fromObject.format('DD/MM/YYYY');
    const to = fromObject.add(month, 'M').format('DD/MM/YYYY');
    return `(Từ ${from} đến ${to})`;
  };

  const onPlus = () => {
    setMonth(month + 1);
    generateDuration();
  };

  const onMinus = () => {
    if (month <= 1) return;
    setMonth(month - 1);
    generateDuration();
  };

  useEffect(() => {
    if (defaultMonth >= 1) {
      setMonth(defaultMonth);
    }
  }, [defaultMonth]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chọn thời gian</Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={onMinus}>
          <Text style={styles.button}>-</Text>
        </TouchableOpacity>

        <Text style={styles.content}>{month} Tháng</Text>
        <TouchableOpacity onPress={onPlus}>
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.duration}>{generateDuration()}</Text>
      <View style={[styles.bottom, { marginBottom: insets.bottom }]}>
        <Button
          onPress={() => onMonthSelect(month)}
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
  duration: { fontSize: 14, color: COLORS.RED_1, marginTop: 12 },
});
