import { useMutation } from '@tanstack/react-query';
import { message, notification } from 'antd';
import type { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { logout, type LogoutResponse } from '../../apis/auth';
import { getApiErrorResponse } from '../../apis/base';
import { useAuthStore } from '../../stores/auth.store';

export const useLogoutMutation = () => {
  const navigate = useNavigate();

  const [, setAuthStore] = useAuthStore();

  return useMutation<LogoutResponse, AxiosError>({
    mutationFn: () => {
      return logout();
    },
    onSuccess: (response: LogoutResponse) => {
      setAuthStore(null);
      message.success('로그아웃 되었습니다.');
    },
    onError: (error: AxiosError) => {
      const { errorCode } = getApiErrorResponse(error);
      switch (errorCode) {
        case 'HTTP_REQUEST_ARGUMENT_INVALID':
          message.error('입력값이 유효하지 않습니다');
          break;
        case 'USER_NOT_FOUND':
          message.error('사용자가 존재하지 않습니다');
          break;
        case 'AUTH_EXPIRED_TOKEN':
        case 'AUTH_INVALID_TOKEN':
        case 'AUTH_INVALID_TOKEN_OWNER':
          message.error('토큰이 유효하지 않습니다.');
          setAuthStore(null);
          message.success('로그아웃 되었습니다.');
          navigate('/');
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
