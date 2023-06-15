import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: COLORS.WHITE_1,
    flex: 1,
  },
  wrapHeader: {
    flexDirection: 'row',
    alignContent: 'center',
    marginBottom: 16,
  },
  wrapHeaderIcon: {
    alignSelf: 'center',
    height: 24,
    width: 24,
    justifyContent: 'center',
  },
  wrapBottomContainer: {
    position: 'absolute',
    bottom: 0,
    height: 80,
    width: '100%',
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: COLORS.WHITE_1,
    paddingTop: 8,
  },
  confirmPayContainer: {
    backgroundColor: COLORS.BLUE_1,
    height: 40,
    width: '100%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  selectedTitle: {
    fontWeight: '500',
    fontSize: 16,
    color: COLORS.WHITE_1,
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
    color: COLORS.BLACK_1,
  },
  description: {
    fontWeight: '700',
    fontSize: 16,
    color: COLORS.BLACK_1,
    marginBottom: 16,
  },
  labelStyle: {
    fontWeight: '700',
    fontSize: 16,
    color: COLORS.GRAY_7,
  },
});

export default styles;
