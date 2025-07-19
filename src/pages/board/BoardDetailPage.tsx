import styled from '@emotion/styled';
import { Modal, message } from 'antd';
import { useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import BoardDetailCard from '../../components/board/BoardDetailCard';
import type { BoardData } from '../../types/board';

const BoardDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  if (!id || !/^\d+$/.test(id)) {
    return <Navigate to="/notfound" replace />;
  }

  // Mock data - in real app, you would fetch this based on the ID
  const mockBoardData: BoardData = {
    id: id,
    title: 'Sample Board Title - This is a detailed view of the board post',
    content:
      'This is a sample board content. It can be very long and contain multiple paragraphs. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: {
      name: 'John Doe',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    },
    createdAt: '2024-01-15T10:30:00Z',
    categories: ['Technology', 'Programming'],
    tags: ['React', 'TypeScript', 'Frontend', 'Web Development'],
    stats: {
      views: 1234,
      likes: 56,
      comments: 23,
    },
  };

  const handleEdit = () => {
    navigate(`/boards/${id}/edit`);
  };

  const handleDelete = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    setDeleteLoading(true);
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      message.success('게시글이 성공적으로 삭제되었습니다.');
      navigate('/');
    } catch {
      message.error('게시글 삭제에 실패했습니다.');
    } finally {
      setDeleteLoading(false);
      setIsDeleteModalOpen(false);
    }
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <Container>
      <BoardDetailCard
        boardData={mockBoardData}
        onBack={handleBack}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Delete Confirmation Modal */}
      <Modal
        title="게시글 삭제"
        open={isDeleteModalOpen}
        onOk={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
        confirmLoading={deleteLoading}
        okText="삭제"
        cancelText="취소"
        okButtonProps={{ danger: true }}
      >
        <p>정말로 이 게시글을 삭제하시겠습니까?</p>
        <p style={{ color: '#8c8c8c', fontSize: '14px' }}>삭제된 게시글은 복구할 수 없습니다.</p>
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

export default BoardDetailPage;
