import axios from 'axios';
import { getDefaultStore } from 'jotai';
import { authAtom } from '../../stores/auth.store';

const API = import.meta.env.VITE_APP_API;
const AUTH_TOKEN_KEY = import.meta.env.VITE_APP_USER_AUTH_TOKEN_KEY || 'X-YOLOGRAM-USER-AUTH-TOKEN';

const authAPI = axios.create({
  baseURL: `${API}/api/ums/v1`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

authAPI.interceptors.request.use(
  (config) => {
    const store = getDefaultStore();
    const authState = store.get(authAtom);

    // 인증이 필수인 API들 확인
    const requiresAuth =
      // 게시글 작성/수정/삭제
      config.url?.includes('/logout') && config.method === 'post';
    // || (config.url?.includes('/validate_token') && config.method === 'post')

    if (requiresAuth) {
      // 인증이 필수인 path. 토큰 없으면 로그인 페이지로 이동
      if (!authState?.accessToken) {
        window.location.href = '/login';
        return Promise.reject(new Error('인증 정보가 없습니다.'));
      }
      config.headers[AUTH_TOKEN_KEY] = authState.accessToken;
    } else {
      // 인증이 선택인 path. 토큰이 있으면 헤더에 추가, 없으면 토큰을 추가하지 않고 그냥 호출
      if (authState?.accessToken) {
        config.headers[AUTH_TOKEN_KEY] = authState.accessToken;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export * from './login.api';
export * from './logout.api';

export default authAPI;
