import { StyleSheet } from 'react-native';

import { COLORS } from '../../../constants';

const styles = StyleSheet.create({
  boxItem: {
    alignItems: 'center',
    borderColor: COLORS.BLACK_3,
    borderRadius: 10,
    borderWidth: 1,
    marginHorizontal: 5,
    width: 150,
  },
  boxLocation: {
    backgroundColor: COLORS.WHITE,
    borderColor: COLORS.GRAY_2,
    borderRadius: 5,
    borderWidth: 1,
    padding: 6,
  },
  boxNameBusiness: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  businessLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 28,
    marginBottom: 10,
    marginLeft: 10,
  },
  carousel: {
    marginTop: 10,
    paddingHorizontal: 5,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  containerScreen: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 50,
  },
  dot: {
    borderRadius: 7,
    height: 10,
    marginHorizontal: -15,
    margin: 0,
    padding: 0,
    width: 10,
  },
  igBusiness: {
    height: 60,
    width: 90,
  },
  inputContainer: {
    height: 40,
    width: '87%',
  },
  inputSearch: {
    backgroundColor: COLORS.WHITE,
    borderColor: COLORS.GRAY_2,
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    height: 40,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  row: {
    flexDirection: 'row',
  },
  scroll: {
    backgroundColor: COLORS.WHITE,
  },
  txtProject: {
    marginLeft: 5,
    marginTop: 5,
  },
  viewSearch: {
    alignItems: 'center',
    backgroundColor: COLORS.ORANGE_6,
    flexDirection: 'row',
    padding: 8,
  },
});

export default styles;
