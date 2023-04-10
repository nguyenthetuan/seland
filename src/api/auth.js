import { LOGIN_ROUTE } from '../constants';
import instance from './instance';

export const requestLogin = data => instance.post(LOGIN_ROUTE, data);
