import { Text } from '@rneui/themed';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import styles from './styles';

const Heading = ({ children, hasHello }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      {hasHello && <Text style={styles.hello}>{t('heading.hello')}</Text>}
      <Text style={styles.heading}>{children}</Text>
    </View>
  );
};

Heading.defaultProps = {
  hasHello: false,
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  hasHello: PropTypes.bool,
};

export default Heading;
