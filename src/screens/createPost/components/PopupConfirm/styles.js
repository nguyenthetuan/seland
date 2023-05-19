import { Dimensions, StyleSheet } from 'react-native';

import {
  COLOR_BLACK_2,
  COLOR_GREEN_1,
  COLOR_ORANGE_6,
  COLOR_WHITE,
} from '../../../../constants';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  boxButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  boxCode: {
    borderColor: COLOR_ORANGE_6,
    borderRadius: 4,
    borderStyle: 'dotted',
    borderWidth: 1,
    marginLeft: 30,
    padding: 5,
    paddingHorizontal: 16,
  },
  boxCodePost: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: 26,
    marginTop: 36,
  },
  boxPopup: {
    backgroundColor: COLOR_WHITE,
    borderRadius: 8,
    height: width * 0.9,
    padding: 20,
    width: width * 0.96,
  },
  btnPopup: {
    width: width * 0.4,
  },
  code: {
    color: COLOR_ORANGE_6,
  },
  container: {
    alignItems: 'center',
    backgroundColor: COLOR_BLACK_2,
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
  },
  posting: {
    color: COLOR_GREEN_1,
    fontSize: 24,
    lineHeight: 32,
    marginBottom: 10,
    marginTop: 16,
    textAlign: 'center',
  },
  youPost: {
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
  },
});

export default styles;
