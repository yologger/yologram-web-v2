import bmsAPI from '.';

export type GetBoardResponse = {
  bid: number;
  title: string;
  content: string;
  writer: {
    uid: string;
    name: string;
    nickname: string;
    avatar?: string;
  };
  createdDate: string;
  modifiedDate: string;
  categories?: string[];
  tags?: string[];
  metrics: {
    commentCount: number;
    likeCount: number;
    viewCount: number;
  };
};

export const getBoard = async (bid: number): Promise<GetBoardResponse> => {
  const response = await bmsAPI.get<GetBoardResponse>(`/board/${bid}`);
  return response.data;
};
