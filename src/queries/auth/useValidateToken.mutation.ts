import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import {
  validateToken,
  type ValidateTokenRequest,
  type ValidateTokenResponse,
} from '../../apis/auth/validateToken.api';

export const useValidateTokenMutation = () => {
  return useMutation<ValidateTokenResponse, AxiosError, ValidateTokenRequest>({
    mutationFn: async (request: ValidateTokenRequest) => validateToken(request),
    onSuccess: (response: ValidateTokenResponse) => {
      // console.log('Token validation result:', response);
    },
    onError: (error: AxiosError) => {
      // console.error('Token validation failed:', error);
    },
  });
};
