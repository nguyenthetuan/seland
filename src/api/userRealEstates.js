import { GET_LIST_REAL_ESTATES_USER_ROUTE } from '../constants';
import { get } from '../utils';

export const requestGetListRealEstatesUser = params =>
  get(GET_LIST_REAL_ESTATES_USER_ROUTE, params);
