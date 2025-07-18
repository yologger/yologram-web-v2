import styled from '@emotion/styled';
import { Modal, message } from 'antd';
import { useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import BoardEditForm from '../../components/organisms/BoardEditForm';

const BoardEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  if (!id || !/^\d+$/.test(id)) {
    return <Navigate to="/notfound" replace />;
  }

  // Mock data - in real app, you would fetch this based on the ID
  const mockBoardData = {
    id: id,
    title: 'Sample Board Title - This is a detailed view of the board post',
    content:
      'This is a sample board content. It can be very long and contain multiple paragraphs. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: {
      name: 'John Doe',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    },
    createdAt: '2024-01-15T10:30:00Z',
    categories: ['Technology', 'Programming'],
    tags: ['React', 'TypeScript', 'Frontend'],
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      message.success('게시글이 성공적으로 수정되었습니다.');
      navigate(`/boards/${id}`);
    } catch {
      message.error('게시글 수정에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setIsCancelModalOpen(true);
  };

  const handleCancelConfirm = () => {
    setIsCancelModalOpen(false);
    navigate(`/boards/${id}`);
  };

  const handleCancelCancel = () => {
    setIsCancelModalOpen(false);
  };

  return (
    <Container>
      <BoardEditForm
        initialValues={{
          title: mockBoardData.title,
          content: mockBoardData.content,
          categories: mockBoardData.categories,
          tags: mockBoardData.tags,
        }}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        loading={loading}
        author={mockBoardData.author}
        boardId={id}
      />

      {/* Cancel Confirmation Modal */}
      <Modal
        title="수정 취소"
        open={isCancelModalOpen}
        onOk={handleCancelConfirm}
        onCancel={handleCancelCancel}
        okText="취소"
        cancelText="계속 수정"
      >
        <p>수정을 취소하시겠습니까?</p>
        <p style={{ color: '#8c8c8c', fontSize: '14px' }}>
          저장하지 않은 변경사항은 모두 사라집니다.
        </p>
      </Modal>
    </Container>
  );
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
    background-color: #ffffff;
  }
`;

export default BoardEditPage;
