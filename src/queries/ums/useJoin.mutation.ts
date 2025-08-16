import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { join, login, type JoinRequest, type JoinResponse } from '../../apis/ums';
import { useAuthStore } from '../../stores/auth.store';

export const useJoinMutation = () => {
  const navigate = useNavigate();
  const [, setAuth] = useAuthStore();

  return useMutation<JoinResponse, AxiosError, JoinRequest>({
    mutationFn: join,
    onSuccess: async (data: JoinResponse, variables: JoinRequest) => {
      console.log('회원가입 성공:', data);

      try {
        // 회원가입 성공 후 같은 정보로 자동 로그인
        const loginResponse = await login({
          email: variables.email,
          password: variables.password,
        });

        const { accessToken, uid, email, name, nickname } = loginResponse.data;

        // auth store 업데이트 (localStorage와 자동 동기화됨)
        setAuth({
          uid,
          accessToken,
          email,
          name,
          nickname,
        });

        console.log('자동 로그인 성공');

        // 홈페이지로 리다이렉트
        navigate('/');
      } catch (loginError) {
        console.error('자동 로그인 실패:', loginError);
        // 자동 로그인 실패 시 로그인 페이지로 이동
        navigate('/login');
      }
    },
    onError: (error: AxiosError) => {
      console.error('회원가입 실패:', error);

      // 에러 메시지 표시 (추후 toast나 alert 컴포넌트로 대체 가능)
      const errorMessage =
        error.response?.data &&
        typeof error.response.data === 'object' &&
        'message' in error.response.data
          ? (error.response.data as { message: string }).message
          : '회원가입에 실패했습니다.';
      alert(errorMessage);
    },
  });
};
