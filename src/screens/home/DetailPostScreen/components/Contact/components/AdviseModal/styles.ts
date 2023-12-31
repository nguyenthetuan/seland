import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../../../../../../constants';
const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  modal: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: COLORS.BLACK_2,
    paddingBottom: '20%',
  },
  container: {
    width: width * 0.9,
  },
  youAre: {
    marginBottom: 16,
  },
  modalContentContainer: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
  },
  title: {
    color: COLORS.BLUE_1,
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 16,
  },
  subTitle: {
    color: COLORS.BLACK_1,
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 8,
  },
  label: {
    color: COLORS.GRAY_8,
    fontWeight: '500',
    fontSize: 14,
    width: '30%',
    marginTop: 7,
  },
  wrapTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInputContainer: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: COLORS.GRAY_1,
    paddingLeft: 4,
  },
  wrapItemContainer: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.GRAY_4,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 4,
    paddingBottom: 4,
    marginRight: 4,
    marginBottom: 4,
    width: '49%',
    alignContent: 'center',
    alignItems: 'center',
  },
  isChooseWrapItemContainer: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.BLUE_1,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 4,
    paddingBottom: 4,
    marginRight: 4,
    marginBottom: 4,
    width: '49%',
    alignContent: 'center',
    alignItems: 'center',
  },
  wrapButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginTop: 16,
  },
  wrapCancelButton: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: COLORS.GRAY_4,
    backgroundColor: COLORS.GRAY_6,
    width: '49%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    minHeight: 36,
  },
  cancelButtonTitle: {
    color: COLORS.GRAY_8,
    fontWeight: '500',
    fontSize: 14,
  },
  wrapAcceptButton: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: COLORS.GRAY_4,
    backgroundColor: COLORS.BLUE_1,
    width: '49%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    minHeight: 36,
  },
  acceptButtonTitle: {
    color: COLORS.WHITE,
    fontWeight: '500',
    fontSize: 14,
  },
});

export default styles;
