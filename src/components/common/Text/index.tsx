import { Text as RNEText } from '@rneui/themed';
import React, { ReactNode } from 'react';

import styles from './styles';

interface TextProps {
  children: ReactNode;
  style?: {} | [];
  onPress?: () => void;
}

const Text = ({ children, style = {}, ...props }: TextProps) => (
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
