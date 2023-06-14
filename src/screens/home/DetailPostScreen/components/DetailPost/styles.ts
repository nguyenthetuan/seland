import { StyleSheet } from 'react-native';
import { deviceWidth } from '../../../../../configs/theme/common';
import { COLORS } from '../../../../../constants';

const styles = StyleSheet.create({
  detailPost: {
    borderWidth: 1,
    borderColor: COLORS.GRAY_5,
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  detailPostWrapper: {
    marginHorizontal: 10,
  },
  title: {
    fontSize: 16,
    lineHeight: 30,
    fontWeight: '700',
    marginBottom: 10,
  },
  listInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  itemInfo: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.GRAY_5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    // width: '100%',
  },
  oneItem: {
    minWidth: 180,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerItem: {
    marginLeft: 8,
    marginTop: -5,
  },
  textLabel: {
    fontSize: 15,
  },
  textValue: {
    fontSize: 16,
    fontWeight: '700',
  },
  icon: {
    minWidth: 20,
  },
  utilitiesItem: {
    marginBottom: 10,
  },
  listContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: deviceWidth - 50,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    width: (deviceWidth - 50) / 2 - 15,
  },
  itemDot: {
    width: 3,
    height: 3,
    borderRadius: 100,
    marginRight: 5,
    backgroundColor: COLORS.BLACK_1,
  },
  itemContentText: {
    fontSize: 15,
  },
});

export default styles;
