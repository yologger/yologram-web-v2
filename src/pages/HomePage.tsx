import styled from '@emotion/styled';
import { useCallback, useState } from 'react';
import BoardList from '../components/organisms/BoardList';

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

// Mock data generator
const generateMockData = (page: number, pageSize: number): BoardData[] => {
  const data: BoardData[] = [];
  const startIndex = (page - 1) * pageSize;

  for (let i = 0; i < pageSize; i++) {
    const index = startIndex + i;
    data.push({
      id: index + 1,
      author: {
        name: `사용자${index + 1}`,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=User${index + 1}`,
      },
      content: `안녕하세요! 이것은 ${index + 1}번째 게시글입니다. 오늘은 정말 좋은 날씨네요. 산책하기 딱 좋은 날씨입니다. 이런 날에는 커피 한 잔과 함께 책을 읽거나, 친구들과 만나서 이야기 나누는 것도 좋을 것 같아요. 여러분은 이런 날씨에 무엇을 하시나요?`,
      createdAt: `${Math.floor(Math.random() * 24)}시간 전`,
      categories: ['일상', '날씨'],
      tags: ['산책', '커피', '독서'],
      stats: {
        views: Math.floor(Math.random() * 1000) + 50,
        likes: Math.floor(Math.random() * 100) + 10,
        comments: Math.floor(Math.random() * 50) + 5,
      },
    });
  }

  return data;
};

export default function HomePage() {
  const [boardData, setBoardData] = useState<BoardData[]>([]);
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

        setBoardData((prev) => [...prev, ...newData]);

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
      <BoardList boardData={boardData} hasMore={hasMore} loadMore={loadMore} />;
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
    background-color: #ffffff;
  }
`;
