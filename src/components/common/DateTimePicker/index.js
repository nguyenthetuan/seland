import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { useController } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Pressable, StyleSheet, View } from 'react-native';
import DatePicker from 'react-native-date-picker';

import Text from '../Text';
import styles from './styles';

dayjs.extend(isToday);

const DateTimePicker = ({ control, name, label, styleLabel }) => {
  const {
    field: { onChange, value },
  } = useController({ control, name });
  const [date1, setDate1] = useState(new Date());
  const [open1, setOpen1] = useState();
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      {label && (
        <Text style={StyleSheet.flatten([styles.label, styleLabel])}>
          {label}
        </Text>
      )}
      <Pressable
        activePress
        onPress={() => setOpen1(true)}
        style={[styles.defaultInput, styles.valueInput]}
        flexDirection="row"
      >
        {dayjs(date1).isToday() ? (
          <Text>Select date</Text>
        ) : (
          <Text>{dayjs(date1).format('DD/MM/YYYY')}</Text>
        )}
      </Pressable>
      <DatePicker
        modal
        open={open1}
        date={date1}
        locale="vi"
        mode="date"
        maximumDate={new Date(dayjs().format('YYYY-MM-DD'))}
        minimumDate={new Date('1900-01-01')}
        onConfirm={dte => {
          setOpen1(false);
          setDate1(dte);
        }}
        onCancel={() => {
          setOpen1(false);
        }}
        confirmText="Xác nhận"
        cancelText="Huỷ"
        title="chọn ngày sinh"
        timeZoneOffsetInMinutes={-1 * new Date().getTimezoneOffset()}
      />
    </View>
  );
};

DateTimePicker.defaultProps = {
  label: '',
};

DateTimePicker.propTypes = {
  control: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  styleLabel: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
    .isRequired,
};

export default DateTimePicker;
