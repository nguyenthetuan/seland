import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../../constants';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.ORANGE_6,
  },
  itemContainer: {
    marginBottom: 24,
  },
  wrapTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    backgroundColor: COLORS.ORANGE_6,
    height: 5,
    width: 5,
    borderRadius: 99,
    marginRight: 8,
  },
  title: {
    fontWeight: '700',
    fontSize: 14,
    color: COLORS.BLACK_1,
    paddingLeft: 4,
  },
  description: {
    paddingLeft: 24,
    fontWeight: '400',
    fontSize: 12,
    color: COLORS.GRAY_7,
  },
});

export default styles;
