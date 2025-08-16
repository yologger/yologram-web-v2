import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import {
  createBoard,
  type CreateBoardRequest,
  type CreateBoardResponse,
} from '../../apis/bms/createBoard.api';

export const useCreateBoardMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<CreateBoardResponse, AxiosError, CreateBoardRequest>({
    mutationFn: (data: CreateBoardRequest) => createBoard(data.uid, data.title, data.content),
    onSuccess: () => {
      // 게시글 생성 성공 시 게시글 목록 캐시 무효화
      queryClient.invalidateQueries({ queryKey: ['boards'] });
    },
  });
};
