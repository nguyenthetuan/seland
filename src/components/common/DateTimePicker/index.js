import RNDateTimePicker from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import React from 'react';
import { useController } from 'react-hook-form';

const DateTimePicker = ({ control, name, ...props }) => {
  const {
    field: { onChange, value },
  } = useController({ control, name });

  return (
    <RNDateTimePicker
      mode="date"
      onChange={(e, date) => onChange(dayjs(date).format('YYYY-MM-DD'))}
      value={value ? new Date(value) : new Date()}
      {...props}
    />
  );
};

DateTimePicker.propTypes = {
  control: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
};

export default DateTimePicker;
