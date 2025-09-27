import umsAPI from '.';

export type JoinRequest = {
  email: string;
  name: string;
  nickname: string;
  password: string;
};

export type JoinResponse = {
  data: {
    uid: number;
  };
};

export const join = async (request: JoinRequest): Promise<JoinResponse> => {
  const response = await umsAPI.post<JoinResponse>('/user/join', request);
  return response.data;
};
