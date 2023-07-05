import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
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
    borderColor: COLORS.GRAY_2,
    marginLeft: -8,
    marginRight: -8,
    padding: 8,
    marginTop: 20,
    marginBottom: 10,
    fontSize: 24,
    lineHeight: 32,
    color: '#000',
  },
  wrapAmountContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  amountContainer: {
    height: 40,
    backgroundColor: COLORS.WHITE,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.GRAY_2,
    borderWidth: 1,
    marginBottom: 16,
  },
  selectedAmountContainer: {
    height: 40,
    backgroundColor: COLORS.GREEN_1,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  selectedTitle: {
    fontWeight: '500',
    fontSize: 16,
    color: COLORS.WHITE,
  },
  wrapBottomContainer: {
    position: 'absolute',
    bottom: 32,
    width: '100%',
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: COLORS.WHITE,
    paddingTop: 8,
  },
  wrapConfirmPayContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  confirmPayContainer: {
    backgroundColor: COLORS.BLUE_1,
    height: 40,
    width: '100%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  cancelPayContainer: {
    backgroundColor: COLORS.WHITE,
    height: 40,
    width: '100%',
    borderRadius: 5,
    borderColor: COLORS.BLUE_1,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelText: {
    fontWeight: '500',
    fontSize: 16,
    color: COLORS.BLUE_1,
  },
  wrapBankContainer: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.GRAY_2,
    padding: 8,
    marginBottom: 10,
  },
  selectedPaymentContainer: {
    backgroundColor: COLORS.GRAY_6,
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
    backgroundColor: COLORS.WHITE,
    paddingTop: 24,
    paddingBottom: 24,
  },
  paymentContainer: {
    paddingBottom: 150,
  },
  headerTitle: {
    fontWeight: '500',
    fontSize: 16,
    color: COLORS.BLACK_1,
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
    color: COLORS.BLACK_1,
  },
  downloadQr: {
    marginTop: 10,
  },
  downloadQrText: {
    color: COLORS.BLUE_2,
    textDecorationLine: 'underline',
  },
  note: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    paddingVertical: 24,
  },
});

export default styles;
