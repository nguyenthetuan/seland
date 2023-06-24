import { StyleSheet } from 'react-native';
import COLORS from '../../../../../constants/colors';

const styles = StyleSheet.create({
  wrapButtonSave: {
    paddingLeft: 8,
    paddingRight: 8,
  },
  buttonSave: {
    height: 40,
    borderRadius: 5,
    minWidth: 125,
    paddingHorizontal: 0,
    marginHorizontal: 0,
  },
  container: {
    backgroundColor: COLORS.WHITE,
    flex: 1,
    paddingTop: 24,
    paddingBottom: 24,
    paddingHorizontal: 10,
  },
  flexRow: {
    flexDirection: 'row',
  },
  flex: {
    flex: 1,
  },
  inputContainer: {
    height: 40,
  },
  inputSearch: {
    backgroundColor: COLORS.WHITE,
    borderColor: COLORS.GRAY_2,
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    height: 40,
  },
  wrapInput: {
    flex: 1,
    marginRight: 8,
  },
  wrapTable: {},
  row: {
    flexDirection: 'row',
  },
  rowContent: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomColor: COLORS.GRAY_2,
    borderBottomWidth: 1,
  },
  wrapHeader: {
    backgroundColor: COLORS.GRAY_10,
    borderBottomColor: COLORS.GRAY_2,
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: 8,
  },
  headerName: {
    flex: 1,
    fontWeight: '500',
    fontSize: 13,
  },
  headerPhone: {
    fontWeight: '500',
    width: 100,
    fontSize: 13,
  },
  headerId: {
    fontWeight: '500',
    width: 72,
    fontSize: 13,
  },
  headerAction: {
    fontWeight: '500',
    width: 72,
    fontSize: 13,
  },
  wrapContent: {
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 10,
  },
  wrapContentName: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  contentName: {
    fontSize: 13,
    marginRight: 4,
  },
  contentPhone: {
    fontSize: 13,
    width: 100,
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  wrapContentId: {
    width: 72,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentId: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 72,
  },
  wrapContentAction: {
    flexDirection: 'row',
    width: 72,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default styles;
