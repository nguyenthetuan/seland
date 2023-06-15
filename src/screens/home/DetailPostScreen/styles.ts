import { StyleSheet, Platform } from 'react-native';
import { COLORS } from '../../../constants';
const styles = StyleSheet.create({
  detailPost: {
    position: 'relative',
  },
  callAndChat: {
    position: 'absolute',
    bottom: 0,
    paddingBottom: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: 'white',
  },
  detailPostWrapper: {
    backgroundColor: COLORS.WHITE,
  },
  spinnerTextStyle: {
    color: COLORS.BLUE_1,
    fontSize: 16,
    lineHeight: 24,
  },
});

export default styles;
