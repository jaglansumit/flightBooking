import {APP_URL} from '../utils/config';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.npoint.io/',
  headers: {
    'Content-Type': 'application/json',
    timeout: 1000,
  },
});

export const ApiInstance = axios.create({
  baseURL: 'https://api.npoint.io/',
  headers: {
    //  Authorization: `<Your Auth Token>`,
    'Content-Type': 'application/json',
    timeout: 1000,
  },
  // .. other options
});

ApiInstance.interceptors.response.use(
  response => {
    console.log('working_fine____', response.data);
    return response;
  },
  error => {
    return null;
  },
);
