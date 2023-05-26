import { Dimensions, StyleSheet } from 'react-native';

import { COLOR_GRAY_2, COLOR_ORANGE_6, COLOR_WHITE } from '../../../constants';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  boxButtonFooter: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    paddingHorizontal: 20,
    width: '100%',
  },
  boxButtonHeader: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    paddingHorizontal: 20,
    width: '100%',
  },
  boxHeaderTop: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginHorizontal: 10,
    marginRight: 20,
  },
  btnSelectQH: {
    backgroundColor: COLOR_WHITE,
    borderWidth: 0,
    height: 40,
    width: width * 0.27,
  },
  btnSelectType: {
    backgroundColor: COLOR_WHITE,
    borderWidth: 0,
    height: 40,
    width: width * 0.43,
  },
  btnViewNews: {
    backgroundColor: COLOR_WHITE,
    borderWidth: 0,
    height: 40,
  },
  dotMarker: {
    backgroundColor: COLOR_ORANGE_6,
    borderColor: COLOR_WHITE,
    borderRadius: 10,
    borderWidth: 2,
    height: 20,
    width: 20,
  },
  footer: {
    bottom: 30,
    position: 'absolute',
    width: '100%',
  },
  header: {
    position: 'absolute',
    top: 40,
    width: '100%',
  },
  inputContainer: {
    height: 40,
    width: width * 0.63,
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

export default styles;
