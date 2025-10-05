import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyProfileForm from '../../components/MyProfileForm';

interface ProfileFormData {
  email: string;
  name: string;
  nickname: string;
}

const EditProfilePage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSave = async (values: ProfileFormData) => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // API 호출 시뮬레이션
    } catch (error) {
      console.error('저장 실패:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordChange = () => {
    navigate('/change-password');
  };

  return (
    <Container>
      <MyProfileForm
        onSave={handleSave}
        onPasswordChange={handlePasswordChange}
        loading={loading}
      />
    </Container>
  );
};

export default EditProfilePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
