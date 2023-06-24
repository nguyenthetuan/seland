import { Alert, Linking, Platform } from 'react-native';

export const onPressCall = (phoneNumber: string) => {
  if (Platform.OS !== 'android') {
    phoneNumber = `telprompt:${phoneNumber}`;
  } else {
    phoneNumber = `tel:${phoneNumber}`;
  }

  Linking.canOpenURL(phoneNumber).then(supported => {
    if (!supported) {
      Alert.alert('Số điện thoại không hỗ trợ.');
    } else {
      Linking.openURL(phoneNumber);
    }
  });
};
