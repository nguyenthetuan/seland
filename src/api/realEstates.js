import { CREATE_REAL_ESTATE, GET_LIST_REAL_ESTATES_ROUTE } from '../constants';
import { get, post } from '../utils';

export const requestGetListRealEstates = () => get(GET_LIST_REAL_ESTATES_ROUTE);

export const requestCreateRealEstates = params =>
  post(CREATE_REAL_ESTATE, params);
