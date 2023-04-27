import { Icon, Image } from '@rneui/themed';
import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import Text from '../Text';
import styles from './styles';

const Avatar = ({ loading, uri, size }) => (
  <View style={styles.boxAvatar(size)}>
    {uri ? (
      <Image
        style={styles.avatar(size)}
        source={{ uri }}
        transition
      />
    ) : (
      <View style={[styles.avatar(size), styles.notAvatar]}>
        <Text style={styles.text}>U</Text>
      </View>
    )}
    <TouchableOpacity
      style={styles.camera}
      activeOpacity={0.8}
    >
      <Icon
        name="photo-camera"
        size={size * 0.2}
      />
    </TouchableOpacity>
  </View>
);
Avatar.defaultProps = {
  loading: false,
  uri: '',
  size: 75,
};

Avatar.propTypes = {
  loading: PropTypes.bool,
  uri: PropTypes.string,
  size: PropTypes.number,
};

export default Avatar;
