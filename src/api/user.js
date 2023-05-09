import { GET_PROFILE_ROUTE, UPDATE_PROFILE_ROUTE } from '../constants';
import { get, post } from '../utils';

export const requestGetProfile = () => get(GET_PROFILE_ROUTE);

export const requestUpdateProfile = data => post(UPDATE_PROFILE_ROUTE, data);
