import authAPI from '.';

export type ValidateTokenRequest = {
  accessToken: string;
};

export type ValidateTokenResponse = {
  data: {
    uid: number;
    accessToken: string;
    email: string;
    name: string;
    nickname: string;
  };
};

const path = '/auth/validate_token';

export const validateToken = async (
  request: ValidateTokenRequest,
): Promise<ValidateTokenResponse> => {
  const axiosResponse = await authAPI.post<ValidateTokenResponse>(path, request);
  return axiosResponse.data;
};
