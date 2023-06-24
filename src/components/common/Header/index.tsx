import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import React, { ReactNode } from 'react';
import { SafeAreaView, View } from 'react-native';

import Text from '../Text';
import styles from './styles';

interface HeaderProps {
  icon?: string;
  onPress?: () => void;
  right?: ReactNode;
  title: string;
  hasGoBack?: boolean;
}

const Header = ({
  icon = 'arrow-back-ios',
  onPress,
  right = null,
  title = '',
  hasGoBack = true,
}: HeaderProps) => {
  const { goBack } = useNavigation();

  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.headerLeft}>
        {hasGoBack && <Icon
          name={icon}
          onPress={onPress || goBack}
          size={16}
        />}
        <Text style={styles.title}>{title}</Text>
      </View>
      {right}
    </SafeAreaView>
  );
};

export default Header;
