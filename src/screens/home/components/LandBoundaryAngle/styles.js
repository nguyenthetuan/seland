import { Dimensions, StyleSheet } from 'react-native';

import {
  COLOR_BLACK_2,
  COLOR_GRAY_2,
  COLOR_GRAY_5,
  COLOR_GRAY_10,
  COLOR_WHITE,
} from '../../../../constants';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  boxButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  boxForm: {
    backgroundColor: COLOR_GRAY_10,
    borderColor: COLOR_GRAY_5,
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    padding: 16,
  },
  boxOrdinalNumber: {
    alignItems: 'center',
    backgroundColor: COLOR_WHITE,
    borderColor: COLOR_GRAY_2,
    borderWidth: 0.5,
    justifyContent: 'center',
    marginVertical: 5,
    padding: 10,
    paddingVertical: 7,
    textAlign: 'center',
  },
  boxPopup: {
    backgroundColor: COLOR_WHITE,
    borderRadius: 8,
    padding: 20,
    width: width * 0.96,
  },
  boxTopNumber: {
    height: 30,
    width: 40,
  },
  btnPopup: {
    width: width * 0.4,
  },
  container: {
    alignItems: 'center',
    backgroundColor: COLOR_BLACK_2,
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
  },
  coordinates: {
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  findLandBoundaryAngle: {
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: COLOR_WHITE,
    marginVertical: 4,
    width: width * 0.3,
  },
});

export default styles;
