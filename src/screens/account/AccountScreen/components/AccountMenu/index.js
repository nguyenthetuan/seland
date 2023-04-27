import { Icon } from '@rneui/base';
import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Text } from '../../../../../components';
import styles from './styles';

const AccountMenu = ({ label, options }) => (
  <View>
    <Text style={styles.label}>{label}</Text>
    <View>
      {options?.map((item, index) => (
        <TouchableOpacity
          style={styles.btnMenu}
          onPress={item?.onPress}
          key={`accountMenu${item}${index}`}
        >
          <Text style={styles.name}>{item?.name}</Text>
          <Icon name="navigate-next" />
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

AccountMenu.defaultProps = {
  label: '',
  options: [],
};

AccountMenu.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
};

export default AccountMenu;
