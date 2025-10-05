import { useMutation } from '@tanstack/react-query';
import { message, notification } from 'antd';
import type { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { login, type LoginRequest, type LoginResponse } from '../../apis/auth';
import { getApiErrorResponse } from '../../apis/base';
import { useAuthStore } from '../../stores/auth.store';

export const useLoginMutation = () => {
  const navigate = useNavigate();

  const [, setAuthStore] = useAuthStore();

  return useMutation<LoginResponse, AxiosError, LoginRequest>({
    mutationFn: (request: LoginRequest) => {
      return login(request);
    },
    onSuccess: (response: LoginResponse, request: LoginRequest) => {
      const { accessToken, uid, email, name, nickname } = response.data;

      setAuthStore({
        uid,
        accessToken,
        email,
        name,
        nickname,
      });

      message.success(nickname + '님, 반갑습니다.');
      navigate('/');
    },
    onError: (error: AxiosError) => {
      const { errorCode } = getApiErrorResponse(error);
      switch (errorCode) {
        case 'HTTP_REQUEST_ARGUMENT_INVALID':
          message.error('입력값이 유효하지 않습니다');
          break;
        case 'AUTH_WRONG_PASSWORD':
          message.error('잘못된 비밀번호입니다.');
          break;
        case 'USER_NOT_FOUND':
          message.error('사용자가 존재하지 않습니다');
          break;
        default:
          notification.error({
            message: '문제가 발생했습니다',
            description: '죄송합니다. 예상치 못한 오류가 발생했습니다.',
            placement: 'top',
            showProgress: true,
          });
          break;
      }
    },
  });
};
