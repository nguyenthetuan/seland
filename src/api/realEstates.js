import { GET_LIST_REAL_ESTATES_ROUTE } from '../constants';
import { get } from '../utils';

export const requestGetListRealEstates = params =>
  get(GET_LIST_REAL_ESTATES_ROUTE, params);
