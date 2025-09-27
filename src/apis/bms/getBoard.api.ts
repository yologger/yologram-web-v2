import bmsAPI from '.';
import type { BoardData } from '../../models/board.model';

export type GetBoardResponse = {
  data: BoardData;
};

export const getBoard = async (boardId: number): Promise<GetBoardResponse> => {
  const axiosResponse = await bmsAPI.get<GetBoardResponse>(`/board/${boardId}`);
  console.log('axiosResponse', axiosResponse);
  return axiosResponse.data;
};
