import { useMutation } from '@tanstack/react-query';
import { message, notification } from 'antd';
import type { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { login } from '../../apis/auth';
import { getApiErrorResponse } from '../../apis/base';
import { join, type JoinRequest, type JoinResponse } from '../../apis/ums';
import { useAuthStore } from '../../stores/auth.store';

export const useJoinMutation = () => {
  const navigate = useNavigate();
  const [, setAuth] = useAuthStore();

  return useMutation<JoinResponse, AxiosError, JoinRequest>({
    mutationFn: (request: JoinRequest) => join(request),
    onSuccess: async (joinResponse: JoinResponse, joinRequest: JoinRequest) => {
      try {
        // 회원가입 성공 시 (204)
        message.success('회원가입이 완료되었습니다.');

        // 회원가입 성공 후 같은 정보로 자동 로그인 시도
        const loginResponse = await login({
          email: joinRequest.email,
          password: joinRequest.password,
        });

        const { accessToken, uid, email, name, nickname } = loginResponse.data;

        // 로그인 성공(200) 시, auth store 업데이트
        setAuth({
          uid,
          accessToken,
          email,
          name,
          nickname,
        });

        message.success(nickname + '님, 반갑습니다.');

        // 홈으로 리다렉트
        navigate('/');
      } catch (loginError) {
        // 로그인 실패 시, error message 표시 후 로그인 페이지로 이동
        const { errorCode } = getApiErrorResponse(loginError as AxiosError);
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
        navigate('/login');
      }
    },
    onError: (error: AxiosError) => {
      // 회원가입 실패 시, 에러 처리
      const { errorCode } = getApiErrorResponse(error);
      switch (errorCode) {
        case 'HTTP_REQUEST_ARGUMENT_INVALID':
          message.error('입력값이 유효하지 않습니다');
          break;
        case 'USER_DUPLICATE':
          message.error('이미 존재하는 이메일입니다.');
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
