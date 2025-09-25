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

// // 요청 인터셉터 (토큰 추가 등)
// umsAPI.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('auth');
//     if (token) {
//       try {
//         const authData = JSON.parse(token);
//         if (authData?.token) {
//           config.headers.Authorization = `Bearer ${authData.token}`;
//         }
//       } catch (error) {
//         console.error('Failed to parse auth data:', error);
//       }
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

// // 응답 인터셉터 (에러 처리 등)
// umsAPI.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response?.status === 401) {
//       // 토큰 만료 시 로그인 페이지로 리다이렉트
//       localStorage.removeItem('auth');
//       window.location.href = '/login';
//     }
//     return Promise.reject(error);
//   },
// );

export default bmsAPI;
