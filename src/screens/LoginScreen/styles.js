import { StyleSheet } from 'react-native';

import {
  COLOR_BLACK_1,
  COLOR_BLACK_2,
  COLOR_BLUE_2,
  COLOR_WHITE,
} from '../../constants';

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    marginHorizontal: 8,
    marginTop: 24,
  },
  buttonTitle: {
    color: COLOR_WHITE,
    fontWeight: 500,
  },
  checkbox: {
    padding: 0,
  },
  checkboxTitle: {
    color: COLOR_BLACK_1,
  },
  container: {
    marginHorizontal: 24,
    marginVertical: 16,
  },
  forgotPassword: {
    color: COLOR_BLUE_2,
    marginRight: 8,
    textAlign: 'right',
    textDecorationLine: 'underline',
  },
  image: {
    height: 200,
    width: '100%',
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: '7%',
  },
  nonmember: {
    color: COLOR_BLACK_2,
    marginVertical: 32,
    textAlign: 'center',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  signup: {
    color: COLOR_BLUE_2,
    textDecorationLine: 'underline',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default styles;
