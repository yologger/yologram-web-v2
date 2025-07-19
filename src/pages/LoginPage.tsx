import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/user/LoginForm';

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (values: LoginFormValues) => {
    console.log('Login form values:', values);
    // 여기에 로그인 로직 추가
    // 로그인 성공 시 홈페이지로 이동
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <Container>
      <LoginForm onSubmit={handleSubmit} onCancel={handleCancel} />
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
