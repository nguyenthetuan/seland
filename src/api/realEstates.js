import {
  CREATE_REAL_ESTATE,
  GET_ALL_INFORMATION,
  GET_LIST_RANK,
  GET_LIST_REAL_ESTATES_ROUTE,
} from '../constants';
import { get, post } from '../utils';

export const requestGetListRealEstates = () => get(GET_LIST_REAL_ESTATES_ROUTE);

export const requestGetAllInformation = () => get(GET_ALL_INFORMATION);

export const requestGetListRank = () => get(GET_LIST_RANK);

export const requestCreateRealEstates = params =>
  post(CREATE_REAL_ESTATE, params, {
    'content-type': 'multipart/form-data',
  });
