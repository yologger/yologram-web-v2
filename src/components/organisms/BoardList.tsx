import styled from '@emotion/styled';
import { Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import BoardItem from './BoardItem';

interface BoardData {
  id: number;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  createdAt: string;
  categories: string[];
  tags: string[];
  stats: {
    views: number;
    likes: number;
    comments: number;
  };
}

interface BoardListProps {
  boardData: BoardData[];
  hasMore: boolean;
  loadMore: (pageNum: number) => void;
}

export default function BoardList({ boardData, hasMore, loadMore }: BoardListProps) {
  return (
    <>
      <InfiniteScroll
        pageStart={1}
        loadMore={loadMore}
        hasMore={hasMore}
        loader={
          <LoadingContainer key="loading">
            <Spin size="large" />
          </LoadingContainer>
        }
        threshold={100}
      >
        {boardData.map((item) => (
          <BoardItem key={item.id} {...item} />
        ))}
      </InfiniteScroll>

      {!hasMore && boardData.length > 0 && <EndMessage>모든 게시글을 불러왔습니다.</EndMessage>}
    </>
  );
}

const LoadingContainer = styled.div`
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
