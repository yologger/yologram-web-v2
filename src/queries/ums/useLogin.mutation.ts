import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { login, type LoginRequest, type LoginResponse } from '../../apis/ums';
import { useAuthStore } from '../../stores/auth.store';

export const useLoginMutation = () => {
  const navigate = useNavigate();

  const [, setAuthStore] = useAuthStore();

  return useMutation<LoginResponse, AxiosError, LoginRequest>({
    mutationFn: (data: LoginRequest) => login(data),
    onSuccess: (data: LoginResponse) => {
      const { accessToken, uid, email, name, nickname } = data.data;

      setAuthStore({
        uid,
        accessToken,
        email,
        name,
        nickname,
      });

      navigate('/');
    },
    onError: (error: AxiosError) => {
      console.error('Login failed:', error);

      const errorMessage =
        error.response?.data &&
        typeof error.response.data === 'object' &&
        'message' in error.response.data
          ? (error.response.data as { message: string }).message
          : '로그인에 실패했습니다.';
      alert(errorMessage);
    },
  });
};
