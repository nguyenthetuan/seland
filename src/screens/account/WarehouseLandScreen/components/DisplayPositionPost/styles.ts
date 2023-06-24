import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../../constants';

const styles = StyleSheet.create({
  posotionInfoPost: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  posotionPostWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.GRAY_10,
    paddingTop: 5,
    paddingBottom: 10,
    paddingHorizontal: 15,
  },
  posotionPost: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  position: {
    width: '10%',
    height: 4,
    borderLeftWidth: 1,
    borderLeftColor: COLORS.WHITE,
  },
  positionFirst: {
    width: '10%',
    height: 4,
    borderLeftWidth: 1,
    borderLeftColor: COLORS.WHITE,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  positionLast: {
    width: '10%',
    height: 4,
    borderLeftWidth: 1,
    borderLeftColor: COLORS.WHITE,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  addressPost: {
    width: '66%',
  },
  addressText: {
    fontSize: 12,
    lineHeight: 16,
  },
  addressTextActive: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '700',
  },
  tooltip: {
    backgroundColor: COLORS.WHITE,
    shadowColor: COLORS.BLACK_1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 65,
    marginBottom: 2,
    borderRadius: 4,
    position: 'absolute',
    top: 0,
    paddingHorizontal: 5,
    marginLeft: -10,
  },
  popupPage: {
    color: COLORS.GREEN_6,
    fontSize: 12,
    marginBottom: -6,
  },
  popupPosition: {
    color: COLORS.GRAY_11,
    fontSize: 10,
  },
  positionFlex: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '33.33%',
    position: 'relative',
    minHeight: 55,
  },
  arrow: {
    position: 'absolute',
    bottom: -4,
    width: 10,
    height: 4,
    left: 10,
    backgroundColor: COLORS.WHITE,
  },
  infoPost: {
    marginRight: 2,
    width: '33.33%',
    backgroundColor: COLORS.GRAY_10,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    marginRight: 5,
    fontSize: 12,
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
  },
  infoPostLast: {
    width: '33.33%',
    backgroundColor: COLORS.GRAY_10,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
});

export default styles;
