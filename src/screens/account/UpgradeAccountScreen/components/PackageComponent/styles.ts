import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../../constants';

const styles = StyleSheet.create({
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  container: {
    backgroundColor: COLORS.WHITE_4,
    borderBottomColor: COLORS.GRAY_2,
    borderBottomWidth: 1,
    elevation: 4,
    padding: 40,
    shadowColor: COLORS.WHITE_4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    alignItems: 'center',
  },
  itemFeature: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
  },
  wrapImage: {
    alignItems: 'center',
  },
  title: {
    textTransform: 'uppercase',
    marginTop: 16,
    marginBottom: 8,
    color: COLORS.GRAY_3,
    fontWeight: '400',
    fontSize: 16,
  },
  price: {
    color: COLORS.ORANGE_6,
    fontSize: 30,
    fontWeight: '500',
    lineHeight: 40,
    textTransform: 'uppercase',
    marginBottom: 32,
  },
  textItem: {
    fontSize: 16,
    fontWeight: '400',
    color: COLORS.BLACK_1,
    marginLeft: 16,
    lineHeight: 28,
  },
});

export default styles;
