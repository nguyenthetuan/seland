import {
  GET_LIST_NEWS,
  GET_LIST_PROJECTS,
  GET_LIST_REAL_ESTATE_BY_LOCATION,
} from '../constants';
import { get } from '../utils';

export const requestGetListRealEstateByLocation = () =>
  get(GET_LIST_REAL_ESTATE_BY_LOCATION);

export const requestGetListNews = () => get(GET_LIST_NEWS);

export const requestGetListProjects = () => get(GET_LIST_PROJECTS);
