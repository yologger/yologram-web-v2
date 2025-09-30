import bmsAPI from '.';
import type { BoardData } from '../../models/board.model';

export type GetRecentBoardsRequest = {
  size: number;
  nextCursor?: string | null;
};

export type GetRecentBoardsResponse = {
  data: BoardData[];
  nextCursor?: string | null;
};

export const getRecentBoards = async ({
  size,
  nextCursor,
}: GetRecentBoardsRequest): Promise<GetRecentBoardsResponse> => {
  const params: { size: number; nextCursor?: string } = { size };

  if (nextCursor && nextCursor !== null) {
    params.nextCursor = nextCursor;
  }

  const axiosResponse = await bmsAPI.get<GetRecentBoardsResponse>('/boards', {
    params,
  });
  return axiosResponse.data;
};
