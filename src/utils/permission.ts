import { Alert, Permission, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {
  PERMISSIONS,
  openSettings,
  requestMultiple,
} from 'react-native-permissions';

const isAndroid = Platform.OS === 'android';

export const namePermission = (permission: Permission) => {
  switch (permission) {
    case PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE:
      return 'gallery';
    case PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE:
      return 'camera';
    default:
      return 'device';
  }
};

export const requestReadAndWritePermission = async () => {
  let isGranted = true;
  let permissions: any[] = [];
  const isAndroid31Above = (await DeviceInfo.getApiLevel()) >= 31;
  try {
    if (isAndroid) {
      permissions = isAndroid31Above
        ? [PERMISSIONS.ANDROID.READ_MEDIA_IMAGES]
        : [
            PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
            PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
          ];
    } else {
      permissions = [
        PERMISSIONS.IOS.PHOTO_LIBRARY,
        PERMISSIONS.IOS.MEDIA_LIBRARY,
      ];
    }

    await requestMultiple(permissions)
      .then(results => {
        for (const permission of permissions) {
          const result = results[permission];
          if (result === 'denied' || result === 'blocked') {
            Alert.alert(
              'Không có quyền truy cập',
              `\nVui lòng cho SeLand quyền truy cập ${namePermission(
                permission
              )}.`,
              [
                { text: 'Thoát', style: 'cancel' },
                { text: 'Vào cài đặt', onPress: openSettings },
              ]
            );
            isGranted = false;
            break;
          }
        }
      })
      .catch(error => {
        isGranted = false;
      });
    return isGranted;
  } catch (error) {
    console.log('requestPermissionError', error);
    return false;
  }
};
