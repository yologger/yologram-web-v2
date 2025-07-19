import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { getBoard, type GetBoardResponse } from '../../apis/bms';

export const useGetBoard = (bid: number, options?: { enabled?: boolean }) => {
  return useQuery<GetBoardResponse, AxiosError, GetBoardResponse>({
    queryFn: () => getBoard(bid),
    queryKey: ['board', bid],
    enabled: options?.enabled ?? true,
  });
};
