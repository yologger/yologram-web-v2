import styled from '@emotion/styled';
import JoinForm from '../components/organisms/JoinForm';

interface JoinFormValues {
  email: string;
  name: string;
  nickname: string;
  password: string;
  confirmPassword: string;
}

const JoinPage = () => {
  const handleSubmit = (values: JoinFormValues) => {
    console.log('Join form values:', values);
    // 여기에 회원가입 로직 추가
  };

  return (
    <Container>
      <JoinForm onSubmit={handleSubmit} />
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

export default JoinPage;
