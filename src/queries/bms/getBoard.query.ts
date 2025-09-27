import { useQuery } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { getBoard, type GetBoardResponse } from '../../apis/bms';
import type { BoardData } from '../../models/board.model';

export const useGetBoardQuery = (boardId: number, options?: { enabled?: boolean }) => {
  return useQuery<GetBoardResponse, AxiosError, BoardData>({
    queryFn: () => {
      return getBoard(boardId);
    },
    queryKey: ['board', boardId],
    enabled: options?.enabled ?? true, // 조건부 쿼리 실행. enabled==true일 때만 API 호출이 실행
    select: (response: GetBoardResponse) => response.data, // API 응답에서 필요한 부분만 추출
  });
};
