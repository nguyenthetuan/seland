import { Icon } from '@rneui/themed';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useController } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Pressable, StyleSheet, View } from 'react-native';
import DatePicker from 'react-native-date-picker';

import { COLOR_BLACK_3 } from '../../../constants';
import Text from '../Text';
import styles from './styles';

const DateTimePicker = ({ control, name, label, labelStyle }) => {
  const {
    field: { onChange, value },
  } = useController({ control, name });
  const { t } = useTranslation();
  const [open, setOpen] = useState();

  const handleShow = () => setOpen(true);

  const handleCancel = () => setOpen(false);

  const handleConfirm = date => {
    onChange(dayjs(date).format('DD/MM/YYYY'));
    handleCancel();
  };

  return (
    <View style={styles.container}>
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
        <Text>{value || 'Select date'}</Text>
        <Icon
          color={COLOR_BLACK_3}
          name="calendar-today"
          size={16}
        />
      </Pressable>
      <DatePicker
        cancelText={t('button.cancel')}
        confirmText={t('button.confirm')}
        date={value ? new Date(value) : new Date()}
        locale="vi"
        // maximumDate={new Date()}
        minimumDate={new Date('1900-01-01')}
        modal
        mode="date"
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        open={open}
        timeZoneOffsetInMinutes={-1 * new Date().getTimezoneOffset()}
        title="Select date"
      />
    </View>
  );
};

DateTimePicker.defaultProps = {
  label: '',
  labelStyle: {},
};

DateTimePicker.propTypes = {
  control: PropTypes.any.isRequired,
  label: PropTypes.string,
  labelStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  name: PropTypes.string.isRequired,
};

export default DateTimePicker;
