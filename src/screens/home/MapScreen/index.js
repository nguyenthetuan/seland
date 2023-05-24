import { Icon } from '@rneui/themed';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Dimensions, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

import { Button, Input, Text } from '../../../components';
import { COLOR_GRAY_2, COLOR_ORANGE_6, COLOR_WHITE } from '../../../constants';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  btnSelectQH: {
    backgroundColor: COLOR_ORANGE_6,
    borderWidth: 0,
    height: 40,
    width: width * 0.27,
  },
  btnSelectType: {
    backgroundColor: COLOR_ORANGE_6,
    borderWidth: 0,
    height: 40,
  },
  btnViewNews: {
    backgroundColor: COLOR_ORANGE_6,
    borderWidth: 0,
    height: 40,
  },
  inputContainer: {
    height: 40,
    width: width * 0.6,
  },
  inputSearch: {
    backgroundColor: COLOR_WHITE,
    borderColor: COLOR_GRAY_2,
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    height: 40,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  map: {
    borderRadius: 10,
    height: '100%',
    width: '100%',
  },
});

const listButtonMock = [
  {
    name: 'Khu vực',
    key: 1,
  },
  {
    name: 'Địa điểm',
    key: 2,
  },
  {
    name: 'Góc ranh',
    key: 3,
  },
  {
    name: 'Tờ thửa',
    key: 4,
  },
];

const listQHMock = [
  {
    name: 'QH2030',
    key: 1,
  },
  {
    name: 'QH2030',
    key: 2,
  },
  {
    name: 'QH2030',
    key: 3,
  },
];

const MapScreen = () => {
  const { t } = useTranslation();
  const { control } = useForm({
    defaultValues: {
      search: '',
    },
  });

  return (
    <View>
      <MapView
        style={styles.map}
        region={{
          latitude: 21.0227523,
          longitude: 105.9530334,
          latitudeDelta: 0.5,
          longitudeDelta: 0.21,
        }}
        // onRegionChangeComplete={onRegionChangeComplete}
      />
      <View style={{ position: 'absolute', top: 40, width: '100%' }}>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
          }}
        >
          <Input
            control={control}
            name="search"
            containerStyle={styles.inputContainer}
            inputContainerStyle={styles.inputSearch}
            rightIcon={<Icon name="search" />}
            placeholder={t('Nhập vị trí')}
          />
          <Button
            title={t('button.viewNewsBDS')}
            buttonStyle={styles.btnViewNews}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: 8,
            justifyContent: 'space-between',
            width: '100%',
            paddingHorizontal: 20,
          }}
        >
          {listButtonMock.map(item => (
            <Button
              key={item?.key}
              title={item?.name}
              buttonStyle={styles.btnSelectType}
            />
          ))}
        </View>
      </View>
      <View style={{ position: 'absolute', bottom: 30, width: '100%' }}>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: 8,
            justifyContent: 'space-between',
            width: '100%',
            paddingHorizontal: 20,
          }}
        >
          {listQHMock.map(item => (
            <Button
              key={`qh${item?.key}`}
              title={item?.name}
              buttonStyle={styles.btnSelectQH}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default MapScreen;
