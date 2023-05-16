import {
  GET_LIST_NEWS,
  GET_LIST_PROJECTS,
  GET_LIST_REAL_ESTATE_BY_LOCATION,
  GET_LIST_REAL_ESTATES_ROUTE,
} from '../constants';
import { get } from '../utils';

export const requestGetListRealEstateByLocation = () =>
  get(GET_LIST_REAL_ESTATE_BY_LOCATION);

export const requestGetListNews = () => get(GET_LIST_NEWS);

export const requestGetListProjects = () => get(GET_LIST_PROJECTS);

export const requestGetListRealEstatesHots = params =>
  get(GET_LIST_REAL_ESTATES_ROUTE, params);
