import styled from '@emotion/styled';
import { Card, List, Pagination, Space, Spin } from 'antd';
import { useEffect, useState } from 'react';
import type { BoardData } from '../../models/board.model';
import BoardItem from './BoardItem';

// const { Title } = Typography;

interface IProps {
  pageSize?: number;
}

// Mock data generator
const generateMockData = (page: number, pageSize: number): BoardData[] => {
  const boardList: BoardData[] = [];
  const startIndex = (page - 1) * pageSize;

  for (let i = 0; i < pageSize; i++) {
    const index = startIndex + i;
    boardList.push({
      bid: index + 1,
      title: `안녕하세요! 이것은 ${index + 1}번째 게시글입니다. 오늘은 정말 좋은 날씨네요. 산책하기 딱 좋은 날씨입니다. 이런 날에는 커피 한 잔과 함께 책을 읽거나, 친구들과 만나서 이야기 나누는 것도 좋을 것 같아요. 여러분은 이런 날씨에 무엇을 하시나요?친구들과 만나서 이야기 나누는 것도 좋을 것 같아요. 여러분은 이런 날씨에 무엇을 하시나요?친구들과 만나서 이야기 나누는 것도 좋을 것 같아요. 여러분은 이런 날씨에 무엇을 하시나요? 여러분은 이런 날씨에 무엇을 하시나요?친구들과 만나서 이야기 나누는 것도 좋을 것 같아요. 여러분은 이런 날씨에 무엇을 하시나요?친구들과 만나서 이야기 나누는 것도 좋을 것 같아요. 여러분은 이런 날씨에 무엇을 하시나요?`,
      content: `이것은 ${index + 1}번째 게시글입니다. 오늘은 정말 좋은 날씨네요. 산책하기 딱 좋은 날씨입니다. 이런 날에는 커피 한 잔과 함께 책을 읽거나, 친구들과 만나서 이야기 나누는 것도 좋을 것 같아요. 여러분은 이런 날씨에 무엇을 하시나요?여러분은 이런 날씨에 무엇을 하시나요?친구들과 만나서 이야기 나누는 것도 좋을 것 같아요. 여러분은 이런 날씨에 무엇을 하시나요?친구들과 만나서 이야기 나누는 것도 좋을 것 같아요. 여러분은 이런 날씨에 무엇을 하시나요?여러분은 이런 날씨에 무엇을 하시나요?친구들과 만나서 이야기 나누는 것도 좋을 것 같아요. 여러분은 이런 날씨에 무엇을 하시나요?친구들과 만나서 이야기 나누는 것도 좋을 것 같아요. 여러분은 이런 날씨에 무엇을 하시나요?`,
      writer: {
        uid: `user${index + 1}`,
        nickname: `사용자${index + 1}`,
        name: `사용자${index + 1}`,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=User${index + 1}`,
      },
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

const MyBoardList = ({ pageSize = 5 }: IProps) => {
  const [boardList, setBoardList] = useState<BoardData[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);

  const loadData = async (page: number) => {
    setLoading(true);
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      const newBoardList = generateMockData(page, pageSize);
      setBoardList(newBoardList);

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
    <Container>
      <StyledSpace direction="vertical" size="large">
        {/* <StyledTitle level={2}>내 게시글</StyledTitle> */}

        {loading ? (
          <LoadingContainer>
            <Spin size="large" />
          </LoadingContainer>
        ) : (
          <>
            <List
              dataSource={boardList}
              renderItem={(item) => (
                <List.Item style={{ padding: 0, border: 'none' }}>
                  <BoardItem board={item} />
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
                />
              </PaginationContainer>
            )}
          </>
        )}
      </StyledSpace>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  border-radius: 8px;
`;

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

// const StyledTitle = styled(Title)`
//   text-align: center;
//   margin: 0 !important;
// `;

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
