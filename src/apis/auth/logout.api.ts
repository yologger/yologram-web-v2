import authAPI from '.';

export type LogoutResponse = {
  data: {
    uid: number;
  };
};

const path = '/auth/logout';

export const logout = async (): Promise<LogoutResponse> => {
  const axiosResponse = await authAPI.post<LogoutResponse>(path);
  return axiosResponse.data;
};
