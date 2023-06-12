export interface IItemWarehouse {
  id: number;
  code: string;
  status: number;
  status_name: string;
  main_direction_name: string;
  start_date: string;
  end_date: string;
  type: string;
  type_news: string;
  real_estate_type_id: number;
  real_estate_type_name: string;
  title: string;
  province_name: string;
  lat_long: string;
  province_id: string;
  district_id: string;
  district_name: string;
  ward_id: string;
  ward_name: number;
  location: string;
  price: number;
  price_unit_name: string;
  price_per_m: string;
  area: number;
  bedroom: string;
  bathroom: string;
  description: string;
  demand_id: number;
  demand_name: string;
  rank_id: number;
  rank_name: string;
  wish_list: number;
  contact: {
    name: string;
    phone: string;
  };
  show_detail_view: {
    show_list: number;
    watched: number;
    interested: number;
    page: number;
    position: number;
    location_post: number;
  };
  images: {
    thumbnail: {
      path_url: string;
    };
    images: [
      {
        path_url: string;
      },
      {
        path_url: string;
      }
    ];
    total: number;
  };
  video: string;
}
