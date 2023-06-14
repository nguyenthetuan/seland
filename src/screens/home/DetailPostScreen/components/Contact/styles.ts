import { StyleSheet } from 'react-native';
import { deviceWidth } from '../../../../../configs/theme/common';
import {
  COLOR_BLUE_1,
  COLOR_BLUE_2,
  COLOR_GRAY_3,
  COLOR_GRAY_4,
  COLOR_GRAY_5,
  COLOR_ORANGE_1,
  COLOR_ORANGE_4,
  COLOR_ORANGE_6,
  COLOR_WHITE,
} from '../../../../../constants';

const styles = StyleSheet.create({
  contactWrapper: {
    borderWidth: 1,
    borderColor: COLOR_GRAY_5,
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 12,
    marginHorizontal: 10,
  },
  contact: {
    borderBottomColor: COLOR_GRAY_5,
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  infoContact: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: COLOR_ORANGE_4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  textAvatar: {
    color: COLOR_ORANGE_1,
    fontWeight: '500',
    fontSize: 20,
  },
  contactName: {},
  contactNameText: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 28,
  },
  contactNameTextSdt: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
  },
  contactSee: {
    fontSize: 15,
    lineHeight: 20,
    color: COLOR_BLUE_2,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: deviceWidth - 50,
    marginBottom: 10,
  },
  callButton: {
    width: (deviceWidth - 50) / 2 - 5,
    borderColor: '#5B8C00',
  },
  zaloButton: {
    width: (deviceWidth - 50) / 2 - 5,
    borderColor: COLOR_BLUE_2,
  },
  callText: {
    color: '#5B8C00',
    marginLeft: 10,
  },
  zaloText: {
    color: COLOR_BLUE_2,
    marginLeft: 10,
  },
  adviseButton: {
    backgroundColor: COLOR_ORANGE_6,
    borderWidth: 1,
    borderColor: '#AD6800',
    marginBottom: 10,
  },
  adviseText: {
    color: COLOR_WHITE,
    fontWeight: '500',
    fontSize: 16,
    marginLeft: 11,
  },
  listAction: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  buttonActionItem: {
    width: (deviceWidth - 50) / 2 - 5,
    borderColor: COLOR_GRAY_4,
    marginBottom: 10,
  },
  titleActionItem: {
    color: '#262626',
  },
  reportMistake: {
    alignItems: 'flex-end',
    color: COLOR_GRAY_3,
    textDecorationLine: 'underline',
    alignSelf: 'flex-end',
  },
  cooperation: {
    paddingTop: 20,
  },
  cooperationTitle: {
    color: COLOR_BLUE_1,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 30,
  },
  cooperationText: {
    marginBottom: 15,
  },
  listFee: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  feeItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: COLOR_GRAY_5,
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  feeLabelFirst: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 18,
  },
  feeItemLast: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  buttonCollapse: {
    width: deviceWidth - 50,
    marginBottom: 10,
    borderColor: COLOR_BLUE_2,
  },
  titleCollapse: {
    color: COLOR_BLUE_2,
  },
});

export default styles;
