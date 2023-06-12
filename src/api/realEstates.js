import {
  CREATE_REAL_ESTATE,
  GET_ALL_FILTER,
  GET_ALL_INFORMATION,
  GET_LIST_RANK,
  GET_LIST_REAL_ESTATES_ROUTE,
  POST_PAYMENT,
} from '../constants';
import { get, post } from '../utils';

export const requestGetListRealEstates = (params) => get(GET_LIST_REAL_ESTATES_ROUTE, params);

export const requestGetAllInformation = () => get(GET_ALL_INFORMATION);

export const requestGetAllFilter = () => get(GET_ALL_FILTER);

export const requestGetListRank = () => get(GET_LIST_RANK);

export const requestCreateRealEstates = params =>
  post(CREATE_REAL_ESTATE, params, {
    'Content-type': 'multipart/form-data',
  });

export const requestPostPayment = params => post(POST_PAYMENT, params);
