import styled from '@emotion/styled';
import { useState } from 'react';
import ProfileForm from '../components/organisms/ProfileForm';

interface ProfileFormData {
  email: string;
  name: string;
  nickname: string;
}

const SettingsPage = () => {
  const [loading, setLoading] = useState(false);

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
    // TODO: 비밀번호 변경 페이지로 이동 또는 모달 열기
    console.log('비밀번호 변경');
  };

  return (
    <Container>
      <ProfileForm onSave={handleSave} onPasswordChange={handlePasswordChange} loading={loading} />
    </Container>
  );
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
    align-items: flex-start;
    background-color: #ffffff;
  }
`;

export default SettingsPage;
