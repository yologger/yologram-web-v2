import styled from '@emotion/styled';
import { Card, List, Pagination, Space, Spin, Typography } from 'antd';
import { useEffect, useState } from 'react';
import BoardItem from './BoardItem';

const { Title } = Typography;

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

interface MyBoardListProps {
  pageSize?: number;
}

const MyBoardList = ({ pageSize = 10 }: MyBoardListProps) => {
  const [boardData, setBoardData] = useState<BoardData[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);

  // Mock data generator
  const generateMockData = (page: number, size: number): BoardData[] => {
    const data: BoardData[] = [];
    const startIndex = (page - 1) * size;

    for (let i = 0; i < size; i++) {
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

  const loadData = async (page: number) => {
    setLoading(true);
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      const newData = generateMockData(page, pageSize);
      setBoardData(newData);

      // Set total to 100 for demo purposes
      setTotal(100);
    } catch (error) {
      console.error('Failed to load data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData(currentPage);
  }, [currentPage, pageSize]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <StyledCard>
      <StyledSpace direction="vertical" size="large">
        <StyledTitle level={2}>내 게시글</StyledTitle>

        {loading ? (
          <LoadingContainer>
            <Spin size="large" />
          </LoadingContainer>
        ) : (
          <>
            <List
              dataSource={boardData}
              renderItem={(item) => (
                <List.Item style={{ padding: 0, border: 'none' }}>
                  <BoardItem {...item} />
                </List.Item>
              )}
              locale={{
                emptyText: '작성한 게시글이 없습니다.',
              }}
            />

            {total > 0 && (
              <PaginationContainer>
                <Pagination
                  current={currentPage}
                  total={total}
                  pageSize={pageSize}
                  onChange={handlePageChange}
                  showSizeChanger={false}
                  // showTotal={(total, range) => `${range[0]}-${range[1]} / 총 ${total}개`}
                />
              </PaginationContainer>
            )}
          </>
        )}
      </StyledSpace>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 800px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-top: 20px;

  @media (max-width: 768px) {
    max-width: 100%;
    border-radius: 0;
    box-shadow: none;
    border: none;
    margin-top: 0;
  }
`;

const StyledSpace = styled(Space)`
  width: 100%;

  @media (max-width: 768px) {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const StyledTitle = styled(Title)`
  text-align: center;
  margin: 0 !important;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export default MyBoardList;
