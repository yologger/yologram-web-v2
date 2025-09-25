import axios from 'axios';
const API = import.meta.env.VITE_APP_API;

const umsAPI = axios.create({
  baseURL: `${API}/api/ums/v1`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export * from './join.api';

export default umsAPI;
