import { Icon } from '@rneui/themed';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View } from 'react-native';

import { Text } from '../../../../components';
import styles from './styles';

const AccountMenu = ({ label, options }) => {
  const { t } = useTranslation();

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View>
        {options?.map(item => (
          <TouchableOpacity
            style={styles.btnMenu}
            onPress={item?.onPress}
            key={`accountMenu${item?.name}`}
          >
            <Text style={styles.name}>{t(`button.${item?.name}`)}</Text>
            <Icon name="navigate-next" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

AccountMenu.defaultProps = {
  label: '',
  options: [],
};

AccountMenu.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
};

export default AccountMenu;
