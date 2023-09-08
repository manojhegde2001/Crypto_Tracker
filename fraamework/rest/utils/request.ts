import axios from 'axios';
import { getToken } from './get-token';

const request1 = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // TODO: take this api URL from env
  // timeout: 30000,
  maxBodyLength: Infinity,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// Change request data/error here
request1.interceptors.request.use( (config:any) => {
    const token = getToken();
    config.headers = { ...config.headers, Authorization: `Bearer ${token ? token : ''}`,};
    return config;
  },(error) => {
    return Promise.reject(error);
  }
);

export default request1;