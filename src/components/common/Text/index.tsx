import { Text as RNEText, TextProps } from '@rneui/themed';

import React, { ReactNode } from 'react';

import styles from './styles';

interface TextCustomProps extends TextProps {
  children: ReactNode;
  style?: {} | [];
  onPress?: () => void;
}

const Text = ({ children, style = {}, ...props }: TextCustomProps) => (
  <RNEText
    style={
      Array.isArray(style) ? [styles.text, ...style] : [styles.text, style]
    }
    {...props}
  >
    {children}
  </RNEText>
);

export default Text;
