import { useNavigation, useRoute } from '@react-navigation/native';
import { Icon } from '@rneui/base';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { COLORS } from '../../../constants';
import styles from './styles';
import { store } from '../../../redux';

// interface MapsProps {
//   realtyID?: number;
//   latLng?: string;
// }
const MapScreen = () => {
  const route: any = useRoute();
  const { realtyID, latLng } = route?.params;
  const { navigate, goBack } = useNavigation();
  const { token } = store.getState().auth;
  const runFirst = `
      window.document.getElementsByTagName("header-page-seland")[0].style.display = "none";
      true; // note: this is required, or you'll sometimes get silent failures
    `;

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
        startInLoadingState={true}
        source={{
          uri: `https://tamthanh-staging.vnextglobal.com/checkLandPlaning?realtyID=${
            realtyID || '185'
          }&latLng=${latLng || '16.8018075868834%2C107.28037372286639'}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }}
        injectedJavaScript={runFirst}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default MapScreen;
