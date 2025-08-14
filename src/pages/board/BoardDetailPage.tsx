import styled from '@emotion/styled';
import { message, Modal, Spin } from 'antd';
import type { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import BoardDetailCard from '../../components/board/BoardDetailCard';
import type { BoardData } from '../../models/board.model';
import { useGetBoardQuery } from '../../queries/bms';

const BoardDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const bid = id ? parseInt(id) : 0;
  const {
    data,
    isSuccess,
    isError,
    error,
  }: {
    data: BoardData | undefined;
    isSuccess: boolean;
    isError: boolean;
    error: AxiosError | null;
  } = useGetBoardQuery(bid, {
    enabled: !!id && /^\d+$/.test(id), // id가 존재하고, id가 숫자로만 구성된 문자열일 때만 API 호출을 실행
  });

  useEffect(() => {
    if (isSuccess && data) {
      console.log('게시글 조회 성공 데이터:', data);
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (isError && error) {
      console.log('게시글 조회 실패 데이터:', error.response?.data);
    }
  }, [isError, error]);

  if (!id || !/^\d+$/.test(id)) {
    return <Navigate to="/notfound" replace />;
  }

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
      {data ? (
        <BoardDetailCard
          boardData={data}
          onBack={handleBack}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ) : (
        <LoadingContainer>
          <Spin size="large" tip="게시글을 불러오는 중..." />
        </LoadingContainer>
      )}

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

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    background-color: #ffffff;
  }
`;

export default BoardDetailPage;
