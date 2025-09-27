import styled from '@emotion/styled';
import { message } from 'antd';
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
    console.log('Board form values:', values);

    const uid = 999;
    createBoard(
      { uid, title: values.title, content: values.content },
      {
        onSuccess: (data) => {
          message.success('게시글이 성공적으로 작성되었습니다.');
          console.log('게시글 작성 성공:', data);
          navigate('/');
        },
        onError: (error) => {
          message.error('게시글 작성에 실패했습니다.');
          console.error('게시글 작성 실패:', error);
        },
      },
    );
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
