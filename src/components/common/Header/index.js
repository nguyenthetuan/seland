import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/base';
import PropTypes from 'prop-types';
import React from 'react';
import { SafeAreaView, View } from 'react-native';

import Text from '../Text';
import styles from './styles';

const Header = ({ icon, onPress, right, title }) => {
  const { goBack } = useNavigation();

  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.headerLeft}>
        <Icon
          name={icon}
          onPress={onPress || goBack}
          size={16}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
      {right}
    </SafeAreaView>
  );
};

Header.defaultProps = {
  icon: 'arrow-back-ios',
  onPress: null,
  right: null,
  title: '',
};

Header.propTypes = {
  icon: PropTypes.string,
  onPress: PropTypes.func,
  right: PropTypes.node,
  title: PropTypes.string,
};

export default Header;
