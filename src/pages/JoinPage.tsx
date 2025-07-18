import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import JoinForm from '../components/organisms/JoinForm';

interface JoinFormValues {
  email: string;
  name: string;
  nickname: string;
  password: string;
  confirmPassword: string;
}

const JoinPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (values: JoinFormValues) => {
    console.log('Join form values:', values);
    // 여기에 회원가입 로직 추가
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <Container>
      <JoinForm onSubmit={handleSubmit} onCancel={handleCancel} />
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

export default JoinPage;
