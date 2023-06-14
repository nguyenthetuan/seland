import React, { useState, useMemo } from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { Text } from '../../../../components';
import { launchImageLibrary } from 'react-native-image-picker';
import { useTranslation } from 'react-i18next';
import styles from './UploadImageStyles';
import { ImageUpload } from '../../../../assets/icons';
import Toast from 'react-native-toast-message';

type TProps = {
  label: string;
  required?: boolean;
  control: any;
  name: string;
};

const UploadImage = (props: TProps) => {
  const { label, required, control, name } = props;

  const [typeUpload, setTypeUpload] = useState();

  const { t } = useTranslation();

  const handleUploadImage = () => {
    try {
      // if (errors?.photo) delete errors.photo;
      // setErrors({
      //   ...errors,
      // });
      launchImageLibrary({
        mediaType: 'photo',
        includeBase64: true,
      })
        .then(result => {
          if (result && result?.assets[0]?.height === 0) {
            Toast.show({
              text1: 'Không thể upload ảnh, vui lòng chọn ảnh khác!',
            });
          }
          setTypeUpload(result?.assets);
        })
        .catch(() =>
          Toast.show({
            text1: 'Lỗi upload file',
          })
        );
    } catch (err) {
      Toast.show({
        text1: 'Lỗi upload file',
      });
    }
  };

  const file = useMemo(() => {
    let fileUpload;
    fileUpload = typeUpload;
    return fileUpload;
  }, [typeUpload]);

  return (
    <View style={styles.container}>
      <View style={styles.wrapHeader}>
        <Text style={styles.title}>{label}</Text>
        {required && <Text style={styles.required}>*</Text>}
      </View>

      {file ? (
        file?.map((item: any) => {
          return (
            <>
              <TouchableOpacity
                key={item?.fileName}
                style={styles.boxImage}
                onPress={handleUploadImage}
              >
                <Image
                  source={{ uri: item?.uri }}
                  style={styles.image}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </>
          );
        })
      ) : (
        <TouchableOpacity
          style={styles.wrapContainer}
          onPress={handleUploadImage}
        >
          <ImageUpload />

          <Text style={styles.wrapTitle}>
            {t('collaboratorInformation.uploadTitle')}
          </Text>
          <Text style={styles.wrapDesc}>
            {t('collaboratorInformation.uploadDesc')}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default UploadImage;
