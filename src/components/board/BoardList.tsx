import styled from '@emotion/styled';
import { Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import type { Board } from '../../models/board.model';
import BoardItem from './BoardItem';

interface IProps {
  boardList: Board[];
  hasMore: boolean;
  loadMore: (pageNum: number) => void;
}

export default function BoardList({ boardList, hasMore, loadMore }: IProps) {
  return (
    <Container>
      <InfiniteScroll
        pageStart={1}
        loadMore={loadMore}
        hasMore={hasMore}
        loader={
          <Loading key="loading">
            <Spin size="large" />
          </Loading>
        }
        threshold={100}
      >
        {boardList.map((board) => (
          <BoardItem key={board.id} board={board} />
        ))}
      </InfiniteScroll>

      {!hasMore && boardList.length > 0 && <EndMessage>모든 게시글을 불러왔습니다.</EndMessage>}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  border-radius: 8px;
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`;

const EndMessage = styled.div`
  text-align: center;
  padding: 20px 0;
  color: #8c8c8c;
  font-size: 14px;
`;
