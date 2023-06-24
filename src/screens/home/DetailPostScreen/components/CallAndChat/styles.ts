import { StyleSheet } from 'react-native';
import { deviceWidth } from '../../../../../configs/theme/common';
import { COLORS } from '../../../../../constants';

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  callButton: {
    width: deviceWidth / 2,
    backgroundColor: '#5B8C00',
    borderWidth: 0,
    height: 50,
  },
  zaloButton: {
    width: deviceWidth / 2,
    backgroundColor: COLORS.BLUE_2,
    borderWidth: 0,
    height: 50,
  },
  callText: {
    color: COLORS.WHITE,
    marginLeft: 12,
  },
  zaloText: {
    color: COLORS.WHITE,
    marginLeft: 12,
  },
});

export default styles;
