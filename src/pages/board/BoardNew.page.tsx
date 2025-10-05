import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import BoardNewForm from '../../components/board/BoardNewForm';
import { useCreateBoardMutation } from '../../queries/bms';

interface BoardFormValues {
  title: string;
  content: string;
  categories: string[];
  tags: string[];
}

const BoardNewPage = () => {
  const navigate = useNavigate();
  const { mutate: createBoard } = useCreateBoardMutation();

  const handleSubmit = (values: BoardFormValues) => {
    const uid = 1;
    createBoard({
      uid: uid,
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
