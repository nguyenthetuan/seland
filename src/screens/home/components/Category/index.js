import { Icon } from '@rneui/base';
import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import { Text } from '../../../../components';
import { COLOR_BLUE_2 } from '../../../../constants';
import styles from './styles';

const Category = ({ children, label, isSeeAll, onSeeAll }) => (
  <View style={{ marginBottom: 17 }}>
    <View style={styles.boxLabelCategory}>
      <Text style={styles.label}>{label}</Text>
      {isSeeAll ? (
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={styles.seeAll}
            onPress={onSeeAll}
          >
            Xem thêm
          </Text>
          <Icon
            name="navigate-next"
            color={COLOR_BLUE_2}
          />
        </View>
      ) : null}
    </View>
    {children}
  </View>
);

Category.defaultProps = {
  label: '',
  isSeeAll: true,
  onSeeAll: () => {},
};

Category.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
  isSeeAll: PropTypes.bool,
  onSeeAll: PropTypes.func,
};

export default Category;
