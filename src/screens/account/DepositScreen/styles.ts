import { StyleSheet } from 'react-native';
import {
  COLOR_BLACK_1,
  COLOR_WHITE,
  COLOR_GREEN_1,
  COLOR_GRAY_2,
  COLOR_BLUE_1,
  COLOR_GRAY_6,
} from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR_WHITE,
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
  },
  wrapHeader: {
    flexDirection: 'row',
    alignContent: 'center',
    marginBottom: 24,
  },
  wrapHeaderIcon: {
    alignSelf: 'center',
    marginRight: 8,
  },
  wrapInputContainer: {
    borderRadius: 1,
    borderWidth: 1,
    borderColor: COLOR_GREEN_1,
    marginLeft: -8,
    marginRight: -8,
    padding: 8,
    marginTop: 20,
    marginBottom: 10,
  },
  wrapAmountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  amountContainer: {
    width: '30%',
    height: 40,
    backgroundColor: COLOR_WHITE,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLOR_GRAY_2,
    borderWidth: 1,
  },
  selectedAmountContainer: {
    width: '30%',
    height: 40,
    backgroundColor: COLOR_GREEN_1,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedTitle: {
    fontWeight: '500',
    fontSize: 16,
    color: COLOR_WHITE,
  },
  wrapBottomContainer: {
    position: 'absolute',
    bottom: 32,
    width: '100%',
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: COLOR_WHITE,
    paddingTop: 8,
  },
  wrapConfirmPayContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  confirmPayContainer: {
    backgroundColor: COLOR_BLUE_1,
    height: 40,
    width: '100%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  cancelPayContainer: {
    backgroundColor: COLOR_WHITE,
    height: 40,
    width: '100%',
    borderRadius: 5,
    borderColor: COLOR_BLUE_1,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelText: {
    fontWeight: '500',
    fontSize: 16,
    color: COLOR_BLUE_1,
  },
  wrapBankContainer: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLOR_GRAY_2,
    padding: 8,
    marginBottom: 10,
  },
  selectedPaymentContainer: {
    backgroundColor: COLOR_GRAY_6,
    width: '100%',
    padding: 16,
    marginBottom: 24,
  },
  paymentTitleContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  wrapQRContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR_WHITE,
    paddingTop: 24,
    paddingBottom: 24,
  },
  paymentContainer: {
    paddingBottom: 150,
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
    color: COLOR_BLACK_1,
  },
});

export default styles;
