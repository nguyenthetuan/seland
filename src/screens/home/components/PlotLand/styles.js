import { Dimensions, StyleSheet } from 'react-native';

import {
  COLOR_BLACK_2,
  COLOR_GRAY_2,
  COLOR_WHITE,
} from '../../../../constants';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  boxButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
    marginTop: 10,
  },
  boxPopup: {
    backgroundColor: COLOR_WHITE,
    borderRadius: 8,
    padding: 20,
    width: width * 0.96,
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
  findPlotLand: {
    fontWeight: 'bold',
  },
  form: {
    borderColor: COLOR_GRAY_2,
    borderRadius: 5,
    borderWidth: 1,
    marginVertical: 10,
    padding: 16,
  },
  note: {
    fontSize: 14,
    fontStyle: 'italic',
    lineHeight: 18,
  },
  select: {
    height: 40,
    marginBottom: 10,
    marginHorizontal: 10,
  },
});

export default styles;
