export interface IModalFilterWarehouse {
  district: string;
  ward: string;
  address: string;
  typeHousing: [number] | [];
  priceRange: [string] | [];
  acreage: [number] | [];
  compass: [number] | [];
  legalDocuments: [number] | [];
  location: [number] | [];
  bedroom: [number] | [];
  bathroom: [number] | [];
  numberFloors: [number] | [];
  province_id: string;
  ward_id: string;
  district_id: string;
  demand_id: number;
}
