import styled from '@emotion/styled';
import { useCallback, useState } from 'react';
import BoardList from '../components/board/BoardList';
import type { BoardData } from '../models/board.model';

// Mock data generator
const generateMockData = (page: number, pageSize: number): BoardData[] => {
  const boardList: BoardData[] = [];
  const startIndex = (page - 1) * pageSize;

  for (let i = 0; i < pageSize; i++) {
    const index = startIndex + i;
    boardList.push({
      bid: index + 1,
      title: `안녕하세요! 이것은 ${index + 1}번째 게시글입니다. 오늘은 정말 좋은 날씨네요. 산책하기 딱 좋은 날씨입니다. 이런 날에는 커피 한 잔과 함께 책을 읽거나, 친구들과 만나서 이야기 나누는 것도 좋을 것 같아요. 여러분은 이런 날씨에 무엇을 하시나요?친구들과 만나서 이야기 나누는 것도 좋을 것 같아요. 여러분은 이런 날씨에 무엇을 하시나요?친구들과 만나서 이야기 나누는 것도 좋을 것 같아요. 여러분은 이런 날씨에 무엇을 하시나요? 여러분은 이런 날씨에 무엇을 하시나요?친구들과 만나서 이야기 나누는 것도 좋을 것 같아요. 여러분은 이런 날씨에 무엇을 하시나요?친구들과 만나서 이야기 나누는 것도 좋을 것 같아요. 여러분은 이런 날씨에 무엇을 하시나요?`,
      writer: {
        name: `사용자${index + 1}`,
        nickname: `사용자${index + 1}`,
        uid: `user${index + 1}`,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=User${index + 1}`,
      },
      content: `이것은 ${index + 1}번째 게시글입니다. 오늘은 정말 좋은 날씨네요. 산책하기 딱 좋은 날씨입니다. 이런 날에는 커피 한 잔과 함께 책을 읽거나, 친구들과 만나서 이야기 나누는 것도 좋을 것 같아요. 여러분은 이런 날씨에 무엇을 하시나요?여러분은 이런 날씨에 무엇을 하시나요?친구들과 만나서 이야기 나누는 것도 좋을 것 같아요. 여러분은 이런 날씨에 무엇을 하시나요?친구들과 만나서 이야기 나누는 것도 좋을 것 같아요. 여러분은 이런 날씨에 무엇을 하시나요?여러분은 이런 날씨에 무엇을 하시나요?친구들과 만나서 이야기 나누는 것도 좋을 것 같아요. 여러분은 이런 날씨에 무엇을 하시나요?친구들과 만나서 이야기 나누는 것도 좋을 것 같아요. 여러분은 이런 날씨에 무엇을 하시나요?`,
      createdDate: `${Math.floor(Math.random() * 24)}시간 전`,
      modifiedDate: `${Math.floor(Math.random() * 24)}시간 전`,
      categories: ['일상', '날씨'],
      tags: ['산책', '커피', '독서'],
      metrics: {
        viewCount: Math.floor(Math.random() * 1000) + 50,
        likeCount: Math.floor(Math.random() * 100) + 10,
        commentCount: Math.floor(Math.random() * 50) + 5,
      },
    });
  }

  return boardList;
};

export default function HomePage() {
  const [boardList, setBoardList] = useState<BoardData[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const loadMore = useCallback(
    async (pageNum: number) => {
      if (loading) return;

      setLoading(true);

      try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const pageSize = 10;
        const newData = generateMockData(pageNum, pageSize);

        setBoardList((prev) => [...prev, ...newData]);

        // Stop loading more when we reach 100 items
        if (pageNum * pageSize >= 100) {
          setHasMore(false);
        }
      } catch (error) {
        console.error('Failed to load more data:', error);
      } finally {
        setLoading(false);
      }
    },
    [loading],
  );

  return (
    <Container>
      <BoardList boardList={boardList} hasMore={hasMore} loadMore={loadMore} />
    </Container>
  );
}

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
