import styled from '@emotion/styled';
import type { AxiosError } from 'axios';
import { useCallback } from 'react';
import BoardList from '../components/board/BoardList';
import ErrorComponent from '../components/global/ErrorComponent';
import { useGetRecentBoardsQuery } from '../queries/bms/getRecentBoards.query';

export default function HomePage() {
  const {
    data: boardData,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isError,
    error,
  } = useGetRecentBoardsQuery();

  const boardList = boardData?.pages ?? [];

  const loadMore = useCallback(async () => {
    if (hasNextPage && !isFetching) {
      await fetchNextPage();
    }
  }, [hasNextPage, isFetching, fetchNextPage]);

  if (isError) {
    return buildErrorComponent(error as AxiosError);
  }

  return (
    <Container>
      <BoardList boardList={boardList} hasMore={hasNextPage} loadMore={loadMore} />
    </Container>
  );
}

const buildErrorComponent = (error: AxiosError) => {
  const errorStatus = error?.response?.status;
  const errorMessage = error?.message;

  switch (errorStatus) {
    case 404:
      return (
        <ErrorComponent
          status="404"
          title="게시글을 찾을 수 없습니다"
          subTitle="요청하신 게시글이 존재하지 않거나 삭제되었습니다."
        />
      );
    case 403:
      return (
        <ErrorComponent
          status="403"
          title="접근 권한이 없습니다"
          subTitle="이 게시글에 접근할 권한이 없습니다."
        />
      );
    case 500:
      return (
        <ErrorComponent
          status="500"
          title="서버 오류가 발생했습니다"
          subTitle="잠시 후 다시 시도해주세요."
        />
      );
    default:
      return (
        <ErrorComponent
          status="500"
          title="오류가 발생했습니다"
          subTitle={errorMessage || '알 수 없는 오류가 발생했습니다.'}
        />
      );
  }
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 20px;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    padding: 0;
    align-items: flex-start;
    background-color: #f5f5f5;
  }
`;
