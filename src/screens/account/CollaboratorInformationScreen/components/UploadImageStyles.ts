import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../../../constants';
const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  wrapContainer: {
    height: 150,
    width: '100%',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: COLORS.GRAY_2,
    marginTop: 10,
    backgroundColor: COLORS.GRAY_10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
    color: COLORS.GRAY_7,
  },
  wrapTitle: {
    fontWeight: '400',
    fontSize: 16,
    color: COLORS.BLACK_1,
    marginTop: 16,
  },
  wrapHeader: {
    flexDirection: 'row',
  },
  required: {
    color: COLORS.RED_1,
  },
  wrapDesc: {
    fontWeight: '400',
    fontSize: 16,
    color: COLORS.BLACK_2,
  },
  boxImage: {
    borderColor: COLORS.GRAY_5,
    borderRadius: 5,
    borderWidth: 1,
    margin: 5,
  },
  image: {
    borderRadius: 5,
    height: 150,
    width: '100%',
  },
});

export default styles;
