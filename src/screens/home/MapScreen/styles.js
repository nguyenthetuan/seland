import { Dimensions, StyleSheet } from 'react-native';

import {
  COLOR_BLUE_6,
  COLOR_GRAY_2,
  COLOR_ORANGE_6,
  COLOR_RED_1,
  COLOR_WHITE,
} from '../../../constants';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  boxBtnMenuRight: {
    alignItems: 'center',
    backgroundColor: COLOR_WHITE,
    borderRadius: 4,
    height: 40,
    justifyContent: 'center',
    marginBottom: 8,
    width: 40,
  },
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
  btnHot: {
    backgroundColor: COLOR_RED_1,
  },
  btnLocation: {
    backgroundColor: COLOR_BLUE_6,
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
  menuRight: {
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    right: 10,
  },
  txtHot: {
    color: COLOR_WHITE,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default styles;
