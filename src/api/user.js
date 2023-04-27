import { GET_PROFILE_ROUTE } from '../constants';
import { get, getHeaders } from '../utils';

export const requestGetProfile = token =>
  get(GET_PROFILE_ROUTE, getHeaders(token));
