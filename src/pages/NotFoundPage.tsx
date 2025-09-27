import styled from '@emotion/styled';
import PageNotFound from '../components/error/PageNotFound';

const NotFoundPage = () => {
  return <PageNotFound />;
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

export default NotFoundPage;
