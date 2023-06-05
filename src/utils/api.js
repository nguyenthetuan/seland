import axios from 'axios';
import Toast from 'react-native-simple-toast';

import { BASE_URL } from '../constants';
import { store } from '../redux';
import i18n from './i18n';

const { t } = i18n;

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
});

export const getHeaders = customHeaders => {
  const headers = { ...customHeaders };

  const { token } = store.getState().auth;

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return { ...headers };
};

const successHandler = response => {
  const { data, status } = response;

  if (!data || status !== 200) {
    return {};
  }

  return data;
};

const errorHandler = error => {
  if (['ERR_NETWORK', 'ECONNABORTED'].includes(error.code)) {
    return Toast.show(t('error.network'));
  }

  const resData = error.response?.data;

  throw resData;
};

api.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error)
);

const get = async (url, params, customHeaders, responseType) => {
  const headers = getHeaders(customHeaders);

  return api.get(url, { params, headers, responseType });
};

const post = async (url, data, customHeaders) => {
  const headers = getHeaders(customHeaders);
  return api.post(url, data, { headers });
};

export { get, post };
