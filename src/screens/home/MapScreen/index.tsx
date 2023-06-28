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
  const { navigate, goBack } = useNavigation();
  const { token } = store.getState().auth;
  const runFirst = `
      window.document.getElementsByClassName("header-page-seland")[0].style.display = "none";
      true; // note: this is required, or you'll sometimes get silent failuresec
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
          uri: `https://tamthanh.vnextglobal.com/checkLandPlaning?realtyID=${
            route?.params?.realtyID || '185'
          }&latLng=${
            route?.params?.latLng || '16.8018075868834%2C107.28037372286639'
          }`,
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
