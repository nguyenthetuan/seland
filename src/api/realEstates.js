import { GET_LIST_REAL_ESTATES } from '../constants';
import { get } from '../utils';

export const requestGetListRealEstates = () => get(GET_LIST_REAL_ESTATES);
