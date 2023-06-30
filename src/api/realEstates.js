import {
  CREATE_OR_UPDATE_WARE_HOUSE,
  CREATE_REAL_ESTATE,
  DELETE_REAL_ESTATE,
  EDIT_REAL_STATE,
  GET_AGENCY,
  GET_ALL_FILTER,
  GET_ALL_INFORMATION,
  GET_ALL_WAREHOUSES,
  GET_DETAIL_REAL_ESTATE,
  GET_LIST_RANK,
  GET_LIST_REAL_ESTATES_ROUTE,
  GET_REAL_ESTATEWAREHOUSES,
  POST_PAYMENT,
} from '../constants';
import { deleteBase, get, post } from '../utils';

export const requestGetListRealEstates = params =>
  get(GET_LIST_REAL_ESTATES_ROUTE, params);

export const requestGetAllInformation = () => get(GET_ALL_INFORMATION);

export const requestGetAllFilter = () => get(GET_ALL_FILTER);

export const requestGetListRank = () => get(GET_LIST_RANK);

export const requestCreateRealEstates = params =>
  post(CREATE_REAL_ESTATE, params, {
    'Content-type': 'multipart/form-data',
  });

export const requestPostPayment = params => post(POST_PAYMENT, params);
export const requestGetAllWareHouse = () => get(GET_ALL_WAREHOUSES);
export const requestGetAgency = () => get(GET_AGENCY);
export const requestGetRealEstateWarehouses = params =>
  get(GET_REAL_ESTATEWAREHOUSES, params);

export const requestGetDetailRealEstates = id =>
  get(`${GET_DETAIL_REAL_ESTATE}/${id}`);

export const requestDeleteRealEstates = id =>
  deleteBase(`${DELETE_REAL_ESTATE}/${id}`);

export const editRealStates = params =>
  post(`${EDIT_REAL_STATE}/${params.id}`, params.formData, {
    'Content-type': 'multipart/form-data',
  });

export const requestCreateWareHouse = params =>
  post(CREATE_OR_UPDATE_WARE_HOUSE, params);
