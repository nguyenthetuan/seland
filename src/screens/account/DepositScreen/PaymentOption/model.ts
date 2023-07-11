export type TPrefixAmount = {
  id: number;
  value: number;
};

export type TBankInfo = {
  id: number;
  type: string;
  bankNumber: string;
  bankAccount: string;
};

export const prefixAmount: TPrefixAmount[] = [
  {
    id: 1,
    value: 100000,
  },
  {
    id: 2,
    value: 500000,
  },
  {
    id: 3,
    value: 1000000,
  },
];
export const listBankAccount: TBankInfo[] = [
  {
    id: 1,
    type: 'VNPay',
    bankNumber: '123456789',
    bankAccount: 'Mr. Abc',
  },
  {
    id: 2,
    type: 'Techcombank',
    bankNumber: '66668888',
    bankAccount: 'Mr. Abc',
  },
  {
    id: 3,
    type: 'Vietcombank',
    bankNumber: '99999999',
    bankAccount: 'Mr. Abc',
  },
];
