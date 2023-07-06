const URL_MAP = 'https://tamthanh2.vnextglobal.com/checkLandPlaning?';

const KIND_REALTY = {
  exclusiveRealEstate: 'exclusiveRealEstate', //Độc quyền
  privateRealEstate: 'privateRealEstate', //Riêng tư
  buySellRealEstate: 'buySellRealEstate', //Mua bán
  realEstateRental: 'realEstateRental', //Cho thue
};

const kindRealty = ({
  is_hot,
  demand_id,
}: {
  is_hot?: number;
  demand_id?: number;
}) => {
  return is_hot
    ? KIND_REALTY.exclusiveRealEstate
    : demand_id === 1
    ? KIND_REALTY.buySellRealEstate
    : KIND_REALTY.realEstateRental;
};

export { KIND_REALTY, URL_MAP, kindRealty };
