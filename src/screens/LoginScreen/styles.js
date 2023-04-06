import { StyleSheet } from 'react-native';

import { COLOR_BLACK_2, COLOR_BLUE_2 } from '../../constants';

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 8,
    marginTop: 24,
  },
  checkbox: {
    padding: 0,
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
});

export default styles;
