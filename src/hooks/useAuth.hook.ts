import type { AxiosError } from 'axios';
import { useAtomValue, useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { useValidateTokenMutation } from '../queries/auth/useValidateToken.mutation';
import { authAtom } from '../stores/auth.store';

export const useAuth = () => {
  const [isAuthInitialized, setIsAuthInitialized] = useState(false);
  const authState = useAtomValue(authAtom);
  const setAuthState = useSetAtom(authAtom);

  const { mutate: validateTokenMutation } = useValidateTokenMutation();

  useEffect(() => {
    // 이미 초기화가 완료된 경우 실행하지 않음
    if (isAuthInitialized) return;

    if (authState) {
      validateTokenMutation(
        { accessToken: authState.accessToken },
        {
          onSuccess: (response) => {
            setIsAuthInitialized(true);
          },
          onError: (error: AxiosError) => {
            setAuthState(null);
            setIsAuthInitialized(true);
          },
        },
      );
    } else if (authState === null) {
      setIsAuthInitialized(true);
    } else {
      // authState가 undefined인 경우는 아직 로딩 중이므로 아무것도 하지 않음
    }
  }, [authState, isAuthInitialized]);

  return { isAuthInitialized, authState };
};
