import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/base';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { WebView } from 'react-native-webview';

import { COLORS } from '../../../constants';
import HeaderListPosts from '../components/HeaderListPosts';
import styles from './styles';

const MapScreen = () => {
  const { navigate, goBack } = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ backgroundColor: COLORS.WHITE }}>
        <View style={styles.boxHeader}>
          <Icon
            name="arrow-back"
            onPress={goBack}
          />
        </View>
      </SafeAreaView>
      <WebView
        source={{ uri: 'https://tamthanh.vnextglobal.com/checkLandPlaning' }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default MapScreen;
