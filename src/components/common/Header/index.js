import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/base';
import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import Text from '../Text';
import styles from './styles';

const Header = ({ icon, title, right, onPress }) => {
  const { goBack } = useNavigation();

  return (
    <View style={styles.boxHeader}>
      <View style={styles.headerLeft}>
        <Icon
          name={icon || 'arrow-back-ios'}
          size={20}
          onPress={onPress || goBack}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
      {right && right}
    </View>
  );
};

Header.defaultProps = {
  title: '',
  icon: 'arrow-back-ios',
};

Header.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  right: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Header;
