import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { JoinData } from '../apis/auth';
import JoinForm from '../components/user/JoinForm';
import { useJoin } from '../queries/useJoin.mutation';

const JoinPage = () => {
  const navigate = useNavigate();
  const { mutate, isPending, isError, isSuccess, data, error } = useJoin();

  useEffect(() => {
    if (isSuccess && data) {
      console.log('회원가입 성공 데이터:', data);
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (isError && error) {
      console.log('회원가입 실패 데이터:', error.response.data);
    }
  }, [isError, error]);

  const handleSubmit = (joinData: JoinData) => {
    mutate(joinData);
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <PageContainer>
      <JoinForm onSubmit={handleSubmit} onCancel={handleCancel} loading={isPending} />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    padding: 0;
    background-color: white;
  }
`;

export default JoinPage;
