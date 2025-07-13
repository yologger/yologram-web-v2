import styled from '@emotion/styled';
import { Button } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from '../organisms/LoginModal';

export default function Header() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const showLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const handleLoginCancel = () => {
    setIsLoginModalOpen(false);
  };

  const handleLoginSubmit = (values: { email: string; password: string }) => {
    console.log('Login form values:', values);
    // 여기에 로그인 로직 추가
    setIsLoginModalOpen(false);
  };

  return (
    <>
      <Container>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/join">Join</Link>
        <Button type="link" onClick={showLoginModal}>
          Login
        </Button>
      </Container>

      <LoginModal
        open={isLoginModalOpen}
        onCancel={handleLoginCancel}
        onSubmit={handleLoginSubmit}
      />
    </>
  );
}

const Container = styled.header`
  display: flex;
  gap: 16px;
  padding: 8px;
  border-bottom: 1px solid #0a312b;
`;
