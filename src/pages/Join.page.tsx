import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import type { JoinRequest } from '../apis/ums';
import JoinForm from '../components/form/JoinForm';
import { useJoinMutation } from '../queries/ums';

const JoinPage = () => {
  const navigate = useNavigate();
  const { mutate: join, isPending } = useJoinMutation();

  const handleSubmit = (data: JoinRequest) => join(data);
  const handleCancel = () => navigate('/');

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
