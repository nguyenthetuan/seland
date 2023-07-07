import moment from 'moment';

export const generateVNPayUrl = () => {
  const date = moment().format('yyyyMMDDHHmmss');
  console.log(date);
  return `https://sandbox.vnpayment.vn/paymentv2/vpcpay.html?vnp_Amount=1806000&vnp_Command=pay&vnp_CreateDate=${date}&vnp_CurrCode=VND&vnp_IpAddr=127.0.0.1&vnp_Locale=vn&vnp_OrderInfo=Thanh+toan+don+hang+%3A5&vnp_OrderType=other&vnp_ReturnUrl=https%3A%2F%2Fdomainmerchant.vn%2FReturnUrl&vnp_TmnCode=10O5SVZ6&vnp_TxnRef=10&vnp_Version=2.1.0&vnp_SecureHash=IJGFYDWUPNDZWVNOCTNXDRRFPOTACZWS`;
};
