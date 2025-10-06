import styled from '@emotion/styled';
import { message, Modal, Spin } from 'antd';
import type { AxiosError } from 'axios';
import { useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import BoardDetailCard from '../../components/board/BoardDetailCard';
import ErrorComponent from '../../components/global/ErrorComponent';
import { useGetBoardQuery } from '../../queries/bms';

const BoardDetailPage = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // id 유효성 검사 (한 번만 검사)
  const isValidId = Boolean(id && /^\d+$/.test(id) && parseInt(id) > 0);
  const boardId = id ? parseInt(id) : 0;

  // Component 마운트되자마자 useGetBoardQuery → 조건부 API 호출
  const {
    data: boardData,
    isPending,
    // isSuccess,
    isError,
    error,
  } = useGetBoardQuery(boardId, {
    // 유효한 id일 때만 API 호출
    enabled: isValidId,
  });

  // 유효하지 않은 id인 경우 홈으로 이동
  if (!isValidId) {
    return <Navigate to="/" replace />;
  }

  if (isPending) {
    return (
      <LoadingContainer>
        <Spin size="large" tip="게시글을 불러오는 중..." />
      </LoadingContainer>
    );
  }

  if (isError) {
    const errorStatus = error?.response?.status;
    const errorMessage = error?.message;
    return buildErrorComponent(error);
  }

  const handleEdit = () => {
    navigate(`/boards/${id}/edit`);
  };

  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    setIsDeleting(true);
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      message.success('게시글이 성공적으로 삭제되었습니다.');
      navigate('/');
    } catch {
      message.error('게시글 삭제에 실패했습니다.');
    } finally {
      setIsDeleting(false);
      setShowDeleteModal(false);
    }
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
  };

  const handleBack = () => {
    navigate('/');
  };

  // 성공적으로 데이터를 받았을 때만 렌더링
  if (!boardData) {
    return (
      <ErrorComponent
        status="404"
        title="게시글을 찾을 수 없습니다"
        subTitle="요청하신 게시글이 존재하지 않거나 삭제되었습니다."
        showBackButton={true}
        showRefreshButton={true}
        onBack={handleBack}
        onRefresh={() => window.location.reload()}
      />
    );
  }

  return (
    <Container>
      <BoardDetailCard
        boardData={boardData}
        onBack={handleBack}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <Modal
        title="게시글 삭제"
        open={showDeleteModal}
        onOk={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
        confirmLoading={isDeleting}
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

export default BoardDetailPage;
