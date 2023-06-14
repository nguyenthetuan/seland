import { CheckBox as RNECheckBox } from '@rneui/themed';
import React, { ReactNode } from 'react';
import { useController } from 'react-hook-form';

import { COLORS } from '../../../constants';
import Text from '../Text';
import styles from './styles';
import { ViewStyle } from 'react-native';

interface CheckBoxProps {
  control: any;
  name: string;
  title: ReactNode;
  checkedColor?: string;
  checkedIcon?: string;
  containerStyle?: ViewStyle;
  iconType?: string;
  uncheckedColor?: string;
  uncheckedIcon?: string;
}

const CheckBox = ({ control, name, title = '', ...props }: CheckBoxProps) => {
  const {
    field: { onBlur, onChange, value },
  } = useController({ control, name });

  const handlePress = () => onChange(!value);

  return (
    <RNECheckBox
      checked={value}
      checkedColor={COLORS.BLUE_1}
      checkedIcon="check-box"
      containerStyle={styles.checkbox}
      iconType="material"
      onBlur={onBlur}
      onPress={handlePress}
      title={<Text>{title}</Text>}
      uncheckedColor={COLORS.GRAY_5}
      uncheckedIcon="check-box-outline-blank"
      {...props}
    />
  );
};

export default CheckBox;
