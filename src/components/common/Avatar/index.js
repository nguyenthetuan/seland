import { Icon, Image } from '@rneui/themed';
import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import Text from '../Text';
import styles from './styles';

const Avatar = ({ loading, url, size }) => (
  <View style={styles.boxAvatar(size)}>
    {url ? (
      <Image
        source={{ uri: url }}
        style={styles.avatar(size)}
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
  url: '',
  size: 100,
};

Avatar.propTypes = {
  loading: PropTypes.bool,
  url: PropTypes.string,
  size: PropTypes.number,
};

export default Avatar;
