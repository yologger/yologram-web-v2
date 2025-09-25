import authAPI from '.';

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  data: {
    uid: number;
    accessToken: string;
    email: string;
    name: string;
    nickname: string;
  };
};

const path = '/auth/login';

export const login = async (request: LoginRequest): Promise<LoginResponse> => {
  const response = await authAPI.post<LoginResponse>(path, request);
  return response.data;
};
