import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyBoardList from '../components/organisms/MyBoardList';
import MyProfileForm from '../components/organisms/MyProfileForm';

interface ProfileFormData {
  email: string;
  name: string;
  nickname: string;
}

const SettingsPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSave = async (values: ProfileFormData) => {
    setLoading(true);
    try {
      // TODO: API 호출 로직 추가
      console.log('저장할 데이터:', values);
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
      <MyBoardList />
    </Container>
  );
};

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

export default SettingsPage;
