import { Icon } from '@rneui/themed';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import MapView, { MarkerAnimated } from 'react-native-maps';

import { Button, Input } from '../../../components';
import { COLOR_BLACK_1, COLOR_ORANGE_6, COLOR_WHITE } from '../../../constants';
import LandBoundaryAngle from '../components/LandBoundaryAngle';
import PlotLand from '../components/PlotLand';
import ViewRealEstateMap from '../components/ViewRealEstateMap';
import styles from './styles';

const listButtonMock = [
  {
    name: 'Góc ranh',
    key: 1,
  },
  {
    name: 'Tờ thửa',
    key: 2,
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

const listRealEstate = [
  {
    lat: 21.0727523,
    long: 105.9530334,
    label: '10tr/m2',
  },
  {
    lat: 21.0227523,
    long: 105.9630334,
    label: '50tr/m2',
  },
  {
    lat: 21.0327523,
    long: 105.9930334,
    label: '20tr/m2',
  },
  {
    lat: 21.0027523,
    long: 105.9130334,
    label: '30tr/m2',
  },
];

const MapScreen = () => {
  const { t } = useTranslation();
  const plotLandRef = useRef();
  const landBoundaryAngleRef = useRef();
  const viewRealEstateRef = useRef();
  const [buttonSelect, setButtonSelect] = useState(null);
  const [buttonSelectQH, setButtonSelectQH] = useState(null);

  const { control } = useForm({
    defaultValues: {
      search: '',
    },
  });

  const handlePress = value => {
    setButtonSelect(value);
    switch (value) {
      case 1:
        landBoundaryAngleRef.current.openLandBoundaryAngle();
        break;
      case 2:
        plotLandRef?.current?.openPlotLand();
        break;
      case 0:
        break;
      default:
        break;
    }
  };

  const handleSelectRealEstate = () => {
    viewRealEstateRef?.current?.openViewRealEstateMap();
  };

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
      >
        {listRealEstate.map(item => (
          <MarkerAnimated
            key={item?.lat}
            coordinate={{ latitude: item?.lat, longitude: item?.long }}
            tracksViewChanges={false}
            zIndex={0}
            onPress={handleSelectRealEstate}
          >
            {/* <Text>{item?.label}</Text> */}
            <View style={styles.dotMarker} />
          </MarkerAnimated>
        ))}
      </MapView>
      <View style={styles.header}>
        <View style={styles.boxHeaderTop}>
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
            buttonStyle={[
              styles.btnViewNews,
              buttonSelect === 0 ? { backgroundColor: COLOR_ORANGE_6 } : {},
            ]}
            titleStyle={{
              color: buttonSelect === 0 ? COLOR_WHITE : COLOR_BLACK_1,
            }}
            onPress={() => handlePress(0)}
          />
        </View>
        <View style={styles.boxButtonHeader}>
          {listButtonMock.map(item => (
            <Button
              key={item?.key}
              title={item?.name}
              titleStyle={{
                color: buttonSelect === item?.key ? COLOR_WHITE : COLOR_BLACK_1,
              }}
              buttonStyle={[
                styles.btnSelectType,
                buttonSelect === item?.key
                  ? { backgroundColor: COLOR_ORANGE_6 }
                  : {},
              ]}
              onPress={() => handlePress(item?.key)}
            />
          ))}
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.boxButtonFooter}>
          {listQHMock.map(item => (
            <Button
              key={`qh${item?.key}`}
              title={item?.name}
              titleStyle={{
                color:
                  buttonSelectQH === item?.key ? COLOR_WHITE : COLOR_BLACK_1,
              }}
              buttonStyle={[
                styles.btnSelectQH,
                buttonSelectQH === item?.key
                  ? { backgroundColor: COLOR_ORANGE_6 }
                  : {},
              ]}
              onPress={() => setButtonSelectQH(item?.key)}
            />
          ))}
        </View>
      </View>
      <PlotLand ref={plotLandRef} />
      <LandBoundaryAngle ref={landBoundaryAngleRef} />
      <ViewRealEstateMap ref={viewRealEstateRef} />
    </View>
  );
};

export default MapScreen;
