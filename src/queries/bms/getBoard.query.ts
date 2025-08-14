import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { getBoard, type GetBoardResponse } from '../../apis/bms';
import type { BoardData } from '../../models/board.model';

export const useGetBoardQuery = (bid: number, options?: { enabled?: boolean }) => {
  return useQuery<GetBoardResponse, AxiosError, BoardData>({
    queryFn: () => getBoard(bid),
    queryKey: ['board', bid],
    select: (data) => data.data, // API 응답에서 필요한 부분만 추출
    enabled: options?.enabled ?? true,
  });
};
