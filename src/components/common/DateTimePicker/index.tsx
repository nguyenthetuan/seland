import { Icon } from '@rneui/themed';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import { useController } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Pressable, StyleSheet, View, ViewStyle } from 'react-native';
import DatePicker from 'react-native-date-picker';

import { COLORS } from '../../../constants';
import Text from '../Text';
import styles from './styles';

interface DateTimePickerProps {
  control: any;
  label: string;
  labelStyle: {} | [];
  name: string;
  styleDatePicker?: ViewStyle;
}

const DateTimePicker = ({
  control,
  name,
  label = '',
  labelStyle = {},
  styleDatePicker,
}: DateTimePickerProps) => {
  const {
    field: { onChange, value },
  } = useController({ control, name });
  const { t } = useTranslation();
  const [open, setOpen] = useState<boolean>();
  const handleShow = () => setOpen(true);

  const handleCancel = () => setOpen(false);

  const handleConfirm = (date: string) => {
    onChange(dayjs(date).format('YYYY-MM-DD'));
    handleCancel();
  };

  return (
    <View style={styleDatePicker}>
      {label && (
        <Text style={StyleSheet.flatten([styles.label, labelStyle])}>
          {label}
        </Text>
      )}
      <Pressable
        style={styles.input}
        flexDirection="row"
        onPress={handleShow}
      >
        <Text style={value ? {} : styles.emptyValue}>
          {value ? dayjs(value).format('DD/MM/YYYY') : 'Select date'}
        </Text>
        <Icon
          color={COLORS.BLACK_3}
          name="calendar-today"
          size={16}
        />
      </Pressable>
      <DatePicker
        cancelText={t('button.cancel')}
        confirmText={t('button.confirm')}
        date={value ? new Date(value) : new Date()}
        locale="vi"
        maximumDate={new Date()}
        minimumDate={new Date('1900-01-01')}
        modal
        mode="date"
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        open={open}
        timeZoneOffsetInMinutes={-1 * new Date().getTimezoneOffset()}
        title={'Select date'}
      />
    </View>
  );
};

export default DateTimePicker;
