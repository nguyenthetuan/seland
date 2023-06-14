import { StyleSheet, Platform } from 'react-native';
import { COLOR_WHITE } from '../../../constants';
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
    backgroundColor: COLOR_WHITE,
  },
});

export default styles;
