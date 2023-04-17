import axios from 'axios';

import {
  BASE_URL,
  LOGIN_ROUTE,
  LOGOUT_ROUTE,
  SIGNUP_ROUTE,
} from '../constants';

const instance = axios.create({
  baseURL: BASE_URL,
});

const getHeaders = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const requestSignup = data => instance.post(SIGNUP_ROUTE, data);

export const requestLogin = data => instance.post(LOGIN_ROUTE, data);

export const requestLogout = token =>
  instance.post(LOGOUT_ROUTE, {}, getHeaders(token));
