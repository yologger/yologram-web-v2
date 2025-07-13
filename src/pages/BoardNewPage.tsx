import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import BoardNewForm from '../components/organisms/BoardNewForm';

interface BoardFormValues {
  title: string;
  content: string;
}

const BoardNewPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (values: BoardFormValues) => {
    console.log('Board form values:', values);
    // 여기에 게시글 작성 로직 추가
    // 작성 완료 시 홈페이지로 이동
    navigate('/');
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
`;

export default BoardNewPage;
