import {
  CHANGE_PASSWORD_ROUTE,
  FORGOT_PASSWORD_ROUTE,
  GENERATE_OTP_ROUTE,
  LOGIN_ROUTE,
  LOGOUT_ROUTE,
  SIGNUP_ROUTE,
  VERIFY_OTP_ROUTE,
} from '../constants';
import { post } from '../utils';

export const requestSignup = data => post(SIGNUP_ROUTE, data);

export const requestLogin = data => post(LOGIN_ROUTE, data);

export const requestLogout = () => post(LOGOUT_ROUTE, {});

export const requestGenerateOtp = data => post(GENERATE_OTP_ROUTE, data);

export const requestVerifyOtp = data => post(VERIFY_OTP_ROUTE, data);

export const requestForgotPassword = data => post(FORGOT_PASSWORD_ROUTE, data);

export const requestChangePassword = data => post(CHANGE_PASSWORD_ROUTE, data);
