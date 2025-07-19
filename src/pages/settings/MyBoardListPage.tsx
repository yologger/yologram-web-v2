import styled from '@emotion/styled';
import MyBoardList from '../../components/MyBoardList';

const MyBoardListPage = () => {
  return (
    <Container>
      <MyBoardList />
    </Container>
  );
};

export default MyBoardListPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    padding: 0;
    align-items: flex-start;
    padding: 0;
    background-color: #ffffff;
  }
`;
