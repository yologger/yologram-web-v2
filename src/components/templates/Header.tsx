import styled from '@emotion/styled';
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
      <HeaderContainer>
        <LeftSection>
          <LogoLink to="/">Yologram</LogoLink>
          <NavLinks>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
          </NavLinks>
        </LeftSection>

        <RightSection>
          <AuthButton onClick={showLoginModal}>로그인</AuthButton>
          <JoinButton to="/join">회원가입</JoinButton>
        </RightSection>
      </HeaderContainer>

      <LoginModal
        open={isLoginModalOpen}
        onCancel={handleLoginCancel}
        onSubmit={handleLoginSubmit}
      />
    </>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  height: 64px;
  background-color: #ffffff;
  border-bottom: 1px solid #f0f0f0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const LogoLink = styled(Link)`
  font-size: 20px;
  font-weight: 700;
  color: #1890ff;
  text-decoration: none;

  &:hover {
    color: #40a9ff;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 24px;
`;

const NavLink = styled(Link)`
  color: #595959;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: #1890ff;
  }
`;

const AuthButton = styled.button`
  background: none;
  border: none;
  color: #595959;
  font-weight: 500;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 6px;
  transition: all 0.2s ease;

  &:hover {
    color: #1890ff;
    background-color: #f0f8ff;
  }
`;

const JoinButton = styled(Link)`
  background-color: #1890ff;
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background-color: #40a9ff;
    color: white;
  }
`;
