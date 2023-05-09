import axios from 'axios';

import { BASE_URL } from '../constants';
import { store } from '../redux';

export const api = axios.create({
  baseURL: BASE_URL,
});

export const getHeaders = customHeaders => {
  const headers = { ...customHeaders };
  const { token } = store.getState().auth;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return { ...headers };
};

let isRefreshing = false;
const refreshSubscribers = [];
function subscribeTokenRefresh(cb) {
  refreshSubscribers.push(cb);
}

const onRefresh = token => {
  refreshSubscribers.map(cb => cb(token));
};

const successHandler = response => {
  if (__DEV__) {
    console.log(`Response success API: ${response.config.url}`, response.data);
  }
  const { data, status } = response;
  if (!data || status !== 200) {
    return;
  }
  return data;
};

const errorHandler = error => {
  const resData = error.response?.data;
  if (__DEV__) {
    console.log(`Response error API:`, resData);
  }
  const originalRequest = error.config;

  // check code = UNAUTHORIZED or token expired
  if (error.response?.status === 201) {
    if (!isRefreshing) {
      isRefreshing = true;
      // xử lý refresh token
    }
    const retryOrigReq = new Promise((resolve, reject) => {
      subscribeTokenRefresh(async token => {
        originalRequest.headers.Authorization = `Bearer ${token}`;
        resolve(api.request(originalRequest));
      });
    });
    return retryOrigReq;
  }

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
  return api.post(url, { ...data }, { headers });
};

export { get, post };
