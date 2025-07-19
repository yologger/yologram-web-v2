import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { join, type JoinRequest, type JoinResponse } from '../apis/ums';

export const useJoin = () => {
  return useMutation<JoinResponse, AxiosError, JoinRequest>({
    mutationFn: join,
    onSuccess: (data: JoinResponse) => {
      // 로그인 페이지로 이동
    },
    onError: (error: AxiosError) => {
      // Show Error Message
    },
  });
};
