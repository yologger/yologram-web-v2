import axios from 'axios';
const API = import.meta.env.VITE_APP_API;

const authAPI = axios.create({
  baseURL: `${API}/api/ums/v1`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export * from './login.api';

export default authAPI;
