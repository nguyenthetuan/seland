import {
  CHANGE_PASSWORD_ROUTE,
  FORGOT_PASSWORD_ROUTE,
  GENERATE_OTP_ROUTE,
  LOGIN_ROUTE,
  LOGOUT_ROUTE,
  SIGNUP_ROUTE,
  VERIFY_OTP_ROUTE,
} from '../constants';
import { api, getHeaders } from '../utils';

export const requestSignup = data => api.post(SIGNUP_ROUTE, data);

export const requestLogin = data => api.post(LOGIN_ROUTE, data);

export const requestLogout = token =>
  api.post(LOGOUT_ROUTE, {}, getHeaders(token));

export const requestGenerateOtp = data => api.post(GENERATE_OTP_ROUTE, data);

export const requestVerifyOtp = data => api.post(VERIFY_OTP_ROUTE, data);

export const requestForgotPassword = data =>
  api.post(FORGOT_PASSWORD_ROUTE, data);

export const requestChangePassword = (data, token) =>
  api.post(CHANGE_PASSWORD_ROUTE, data, getHeaders(token));
