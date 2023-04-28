import { Icon, Image } from '@rneui/themed';
import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import Text from '../Text';
import styles from './styles';

const Avatar = ({ size, uri, placeholderContent }) => (
  <View style={styles.boxAvatar(size)}>
    <Image
      style={styles.avatar(size)}
      source={{ uri }}
      transition
      PlaceholderContent={<Text style={styles.text}>{placeholderContent}</Text>}
      placeholderStyle={[styles.boxAvatar(size), styles.notAvatar]}
    />

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
  placeholderContent: '',
  uri: '',
  size: 75,
};

Avatar.propTypes = {
  placeholderContent: PropTypes.string,
  uri: PropTypes.string,
  size: PropTypes.number,
};

export default Avatar;
