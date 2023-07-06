import { StyleSheet } from 'react-native';
import { deviceHeight, deviceWidth } from '../../../../../configs/theme/common';
import { COLORS } from '../../../../../constants';

const styles = StyleSheet.create({
  boxImage: {
    width: '100%',
    height: 200,
    position: 'relative',
  },
  image: {
    width: deviceWidth - 130,
    height: deviceHeight / 2,
  },
  headerAction: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    width: '100%',
  },
  iconHeader: {
    padding: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    borderRadius: 100,
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 10,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconHeaderRight: {
    width: 31,
    height: 31,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    borderRadius: 100,
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 10,
  },
  dot: {
    borderRadius: 7,
    height: 10,
    marginHorizontal: -15,
    margin: 0,
    padding: 0,
    width: 10,
  },
  sliderWrapper: {
    width: deviceWidth,
    height: deviceHeight,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: COLORS.BLACK_1,
  },
  modalDetailImage: {
    width: deviceWidth,
    height: deviceHeight,
    backgroundColor: COLORS.BLACK_1,
  },
  slider: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  text: {
    color: COLORS.WHITE,
  },
  pre: {
    width: 50,
    marginRight: 5,
    height: 50,
  },
  next: {
    width: 50,
    marginLeft: 5,
    alignItems: 'flex-end',
    height: 50,
  },
  close: {
    marginBottom: 10,
    marginTop: 50,
  },
});

export default styles;
