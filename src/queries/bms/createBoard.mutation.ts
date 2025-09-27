import { useMutation, useQueryClient } from '@tanstack/react-query';
import { message, notification } from 'antd';
import type { AxiosError } from 'axios';
import { useNavigate } from 'react-router';
import { getApiErrorResponse } from '../../apis/base';
import {
  createBoard,
  type CreateBoardRequest,
  type CreateBoardResponse,
} from '../../apis/bms/createBoard.api';

export const useCreateBoardMutation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation<CreateBoardResponse, AxiosError, CreateBoardRequest>({
    mutationFn: (data: CreateBoardRequest) => createBoard(data.uid, data.title, data.content),
    onSuccess: (response: CreateBoardResponse, request: CreateBoardRequest) => {
      // 게시글 생성 성공 시 게시글 목록 캐시 무효화
      queryClient.invalidateQueries({ queryKey: ['boards'] });
      message.success('게시글이 작성되었습니다');
      navigate(`/boards/${response.data.bid}`);
    },
    onError: (error: AxiosError) => {
      const { errorCode } = getApiErrorResponse(error);
      switch (errorCode) {
        case 'USER_NOT_FOUND':
          message.error('사용자가 존재하지 않습니다');
          break;
        default:
          notification.error({
            message: '문제가 발생했습니다',
            description: '죄송합니다. 예상치 못한 오류가 발생했습니다.',
            placement: 'top',
            showProgress: true,
          });
          break;
      }
    },
  });
};
