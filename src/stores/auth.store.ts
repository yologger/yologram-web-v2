import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

type AuthState = {
  uid: number;
  email: string;
  name: string;
  nickname: string;
  accessToken: string;
};

const authAtom = atomWithStorage<AuthState | null>('auth', null);
export const useAuthStore = () => useAtom(authAtom);
