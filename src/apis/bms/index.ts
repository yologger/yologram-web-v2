import axios from 'axios';
const API = import.meta.env.VITE_APP_API;

const bmsAPI = axios.create({
  baseURL: `${API}/api/bms/v1`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export * from './getBoard.api';

export default bmsAPI;
