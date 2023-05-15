import {
  GET_LIST_REAL_ESTATE_BY_LOCATION,
  GET_LIST_REAL_ESTATES,
} from '../constants';
import { get } from '../utils';

export const requestGetListRealEstateByLocation = () =>
  get(GET_LIST_REAL_ESTATE_BY_LOCATION);

export const requestGetListNews = () => get(GET_LIST_REAL_ESTATES);

export const requestGetListProjects = () => get(GET_LIST_REAL_ESTATES);
