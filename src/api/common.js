import {
  GET_DISTRICTS_ROUTE,
  GET_PROVINCES_ROUTE,
  GET_WARDS_ROUTE,
} from '../constants';
import { get } from '../utils';

export const requestGetProvinces = () => get(GET_PROVINCES_ROUTE);

export const requestGetDistricts = params => get(GET_DISTRICTS_ROUTE, params);

export const requestGetWards = params => get(GET_WARDS_ROUTE, params);
