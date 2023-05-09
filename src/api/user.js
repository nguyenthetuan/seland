import { GET_PROFILE_ROUTE } from '../constants';
import { get } from '../utils';

export const requestGetProfile = () => get(GET_PROFILE_ROUTE);
