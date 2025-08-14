import bmsAPI from '.';
import type { BoardData } from '../../models/board.model';

export type GetBoardResponse = {
  data: BoardData;
};

export const getBoard = async (bid: number): Promise<GetBoardResponse> => {
  const axiosResponse = await bmsAPI.get<GetBoardResponse>(`/board/${bid}`);
  const response = axiosResponse.data;
  return response;
};
