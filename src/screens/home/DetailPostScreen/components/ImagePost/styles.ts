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
    width: deviceWidth,
    height: deviceHeight,
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
    // alignItems: 'center',
    // justifyContent: 'flex-start',
    backgroundColor: COLORS.BLACK_1,
  },
  modalDetailImage: {
    width: deviceWidth,
    height: deviceHeight,
    backgroundColor: COLORS.BLACK_1,
  },
  slider: {
    width: deviceWidth,
    height: deviceHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    position: 'absolute',
  },
  text: {
    color: COLORS.WHITE,
    position: 'absolute',
    bottom: 30,
    textAlign: 'center',
    alignSelf: 'center',
  },
  pre: {
    backgroundColor: COLORS.BLACK_2,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  next: {
    backgroundColor: COLORS.BLACK_2,
    borderRadius: 30,
    justifyContent: 'center',
  },
  close: {
    marginTop: 40,
    position: 'absolute',
    top: 5,
    left: 10,
    backgroundColor: COLORS.BLACK_2,
    borderRadius: 30,
  },
});

export default styles;
