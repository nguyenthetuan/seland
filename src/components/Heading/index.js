import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { COLOR_BLUE_1 } from '../../constants';
import Text from '../Text';
import styles from './styles';

const Heading = ({ hasBack, hasHello, children }) => {
  const { goBack } = useNavigation();
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      {hasHello && <Text style={styles.hello}>{t('heading.hello')}</Text>}
      <View style={styles.headingContainer}>
        {hasBack && (
          <>
            <Icon
              color={COLOR_BLUE_1}
              name="arrow-back"
              onPress={goBack}
              size={28}
            />
            <Text> </Text>
          </>
        )}
        <Text style={styles.heading}>{children}</Text>
      </View>
    </View>
  );
};

Heading.defaultProps = {
  hasBack: false,
  hasHello: false,
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  hasBack: PropTypes.bool,
  hasHello: PropTypes.bool,
};

export default Heading;
