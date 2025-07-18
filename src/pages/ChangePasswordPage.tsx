import styled from '@emotion/styled';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import ChangePasswordForm from '../components/organisms/ChangePasswordForm';

interface ChangePasswordFormValues {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export default function ChangePasswordPage() {
  const navigate = useNavigate();

  const handleSubmit = async (values: ChangePasswordFormValues) => {
    try {
      // TODO: API 호출 로직 구현
      console.log('비밀번호 변경 요청:', values);

      // 임시로 성공 메시지 표시
      message.success('비밀번호가 성공적으로 변경되었습니다.');
      navigate('/settings');
    } catch (error) {
      console.error('비밀번호 변경 실패:', error);
      message.error('비밀번호 변경에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const handleCancel = () => {
    navigate('/settings');
  };

  return (
    <PageContainer>
      <ChangePasswordForm onSubmit={handleSubmit} onCancel={handleCancel} loading={false} />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    padding: 0;
    background-color: white;
  }
`;
