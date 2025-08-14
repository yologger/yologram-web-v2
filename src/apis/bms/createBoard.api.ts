import bmsAPI from '.';
import type { BoardData } from '../../models/board.model';

export type CreateBoardRequest = {
  uid: number;
  title: string;
  content: string;
};

export type CreateBoardResponse = {
  data: BoardData;
};

export const createBoard = async (
  uid: number,
  title: string,
  content: string,
): Promise<CreateBoardResponse> => {
  const requestBody: CreateBoardRequest = {
    uid,
    title,
    content,
  };

  const axiosResponse = await bmsAPI.post<CreateBoardResponse>('/board', requestBody);
  const response = axiosResponse.data;
  return response;
};
