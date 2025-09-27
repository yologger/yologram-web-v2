import styled from '@emotion/styled';
import { message } from 'antd';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import BoardNewForm from '../../components/board/BoardNewForm';
import { useCreateBoardMutation } from '../../queries/bms';
import { useAuthStore } from '../../stores/auth.store';

interface BoardFormValues {
  title: string;
  content: string;
  categories: string[];
  tags: string[];
}

const BoardNewPage = () => {
  const navigate = useNavigate();
  const { mutate: createBoard } = useCreateBoardMutation();
  const [authState] = useAuthStore();
  const hasRedirected = useRef(false);

  // 컴포넌트 마운트 시 로그인 상태 체크
  useEffect(() => {
    if (!authState && !hasRedirected.current) {
      hasRedirected.current = true;
      message.info('로그인이 필요합니다.');
      navigate('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authState]);

  const handleSubmit = (values: BoardFormValues) => {
    createBoard({
      uid: authState!.uid,
      title: values.title,
      content: values.content,
    });
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <Container>
      <BoardNewForm onSubmit={handleSubmit} onCancel={handleCancel} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    padding: 0;
    align-items: flex-start;
    background-color: #ffffff;
  }
`;

export default BoardNewPage;
