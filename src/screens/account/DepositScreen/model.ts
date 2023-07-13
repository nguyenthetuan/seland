export type VNPayStatus = 'fail' | 'processing' | 'success';

export const PaymentStatus = {
  COMPLETED_STATUS: 1,
  PROCESSING_STATUS: 2,
  FAILED_STATUS: 3,
  CANCELLED_STATUS: 4,
};

export enum PaymentNote {
  'Chuyển khoản qua TCB' = 1,
  'Chuyển khoản qua VCB',
  'Nạp tiền qua VNPay',
  'Chuyển khoản qua ngân hàng',
}
