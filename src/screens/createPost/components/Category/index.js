import { Icon } from '@rneui/themed';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Text } from '../../../../components';
import { COLORS } from '../../../../constants';
import styles from './styles';

const Category = ({ children, label }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.boxLabelCategory}
        onPress={handleShow}
      >
        <Text style={styles.label}>{label}</Text>
        <Icon
          name={show ? 'indeterminate-check-box' : 'add-box'}
          color={COLORS.BLUE_1}
        />
      </TouchableOpacity>
      {show ? (
        <View>
          <View style={styles.line} />
          {children}
        </View>
      ) : null}
    </View>
  );
};

Category.defaultProps = {
  label: '',
};

Category.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
};

export default Category;
