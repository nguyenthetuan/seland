import { useNavigation, useRoute } from '@react-navigation/native';
import { Icon } from '@rneui/base';
import React, { useEffect, useRef } from 'react';
import { ActivityIndicator, SafeAreaView, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { COLORS } from '../../../constants';
import styles from './styles';
import { store } from '../../../redux';

const MapScreen = ({}) => {
  const route: any = useRoute();
  const { navigate, goBack } = useNavigation();
  const { token } = store.getState().auth;
  const runFirst = `
      window.document.getElementsByClassName("header-page-seland")[0].style.display = "none";
      true; // note: this is required, or you'll sometimes get silent failuresec
    `;

  const renderLoading = () => {
    return (
      <View>
        <ActivityIndicator
          color={'red'}
          size="small"
        />
      </View>
    );
  };

  const latLong =
    route?.params?.latLng && route?.params?.latLng?.replace(/\s/g, '');

  const uri =
    route?.params?.customerUrl ||
    `https://tamthanh2.vnextglobal.com/checkLandPlaning?realtyID=${
      route?.params?.realtyID || '185'
    }&latLng=${
      latLong || '16.8018075868834%2C107.28037372286639'
    }&defaultFilter=${route?.params?.defaultFilter || false}&kindRealty=${
      route?.params?.kindRealty || 'exclusiveRealEstate'
    }`;

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
        source={{
          uri: uri,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }}
        renderLoading={renderLoading}
        startInLoadingState={true}
        javaScriptEnabledAndroid={true}
        injectedJavaScript={runFirst}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default MapScreen;
