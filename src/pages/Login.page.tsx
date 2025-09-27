import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import type { LoginRequest } from '../apis/auth';
import LoginForm from '../components/user/LoginForm';
import { useLoginMutation } from '../queries/ums/useLogin.mutation';

const LoginPage = () => {
  const navigate = useNavigate();
  const { mutate: login, isPending } = useLoginMutation();

  const handleSubmit = (request: LoginRequest) => {
    login(request);
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <Container>
      <LoginForm onSubmit={handleSubmit} onCancel={handleCancel} loading={isPending} />
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

export default LoginPage;
