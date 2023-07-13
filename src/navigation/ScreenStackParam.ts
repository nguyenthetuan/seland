export type ScreenStackParamList = {
  BuyPackageResult: {
    paymentCode: number;
    balance: string;
    balancePromotion: string;
  };
  BuyPackage: {
    packageId: number;
    price: string;
    name: string;
    end_date: string | undefined;
  };
};
