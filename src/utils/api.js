import axios from 'axios';

import { BASE_URL } from '../constants';

export const api = axios.create({
  baseURL: BASE_URL,
});

export const getHeaders = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
