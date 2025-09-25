import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';
import type { JoinRequest } from '../apis/ums';
import JoinForm from '../components/user/JoinForm';
import { useJoinMutation } from '../queries/ums';

const JoinPage = () => {
  const navigate = useNavigate();
  const { mutate: join, isPending, isError, error } = useJoinMutation();

  // 회원가입 성공/실패는 useJoinMutation에서 처리됨
  // 자동 로그인 후 홈페이지로 리다이렉트됨

  const handleSubmit = (data: JoinRequest) => {
    join(data);
  };

  useEffect(() => {
    if (isError) {
      // JoinPage에서도 Error 처리 가능
      // console.error('회원가입 실패:', error);
    }
  }, [isError, error]);

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
