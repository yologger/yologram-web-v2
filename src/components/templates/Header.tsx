import { MenuOutlined, SettingOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { Button, Drawer, Modal } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const isLoggedIn = false;
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    setIsLogoutModalOpen(true);
  };

  const handleLogoutConfirm = () => {
    // TODO: Implement actual logout logic
    console.log('User logged out');
    setIsLogoutModalOpen(false);
  };

  const handleLogoutCancel = () => {
    setIsLogoutModalOpen(false);
  };

  const handleMobileMenuOpen = () => {
    setIsMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  const renderNavigationLinks = () => (
    <>
      <Link to="/">
        <Button type="text" block>
          Home
        </Button>
      </Link>
      <Link to="/board/new">
        <Button type="text" block>
          Write
        </Button>
      </Link>
    </>
  );

  const renderAuthButtons = () => (
    <>
      {isLoggedIn ? (
        <>
          <Button type="default" onClick={handleLogout} block>
            Logout
          </Button>
          <Link to="/settings">
            <Button type="primary" icon={<SettingOutlined />} block />
          </Link>
        </>
      ) : (
        <>
          <Link to="/join">
            <Button type="primary" block>
              Join
            </Button>
          </Link>
          <Link to="/login">
            <Button type="default" block>
              Login
            </Button>
          </Link>
        </>
      )}
    </>
  );

  return (
    <>
      <Container>
        <Section>
          <LogoLink to="/">Yologram</LogoLink>
          <DesktopLinks>{renderNavigationLinks()}</DesktopLinks>
        </Section>

        <Section>
          <DesktopLinks>{renderAuthButtons()}</DesktopLinks>
          <MobileMenuButton>
            <Button type="text" icon={<MenuOutlined />} onClick={handleMobileMenuOpen} />
          </MobileMenuButton>
        </Section>
      </Container>

      {/* Mobile Menu Drawer */}
      <Drawer
        // title="메뉴"
        placement="left"
        onClose={handleMobileMenuClose}
        open={isMobileMenuOpen}
        width="80%"
      >
        <MobileMenuContainer>
          <MobileMenuSection>
            <MobileMenuTitle>메뉴</MobileMenuTitle>
            {renderNavigationLinks()}
          </MobileMenuSection>

          <MobileMenuSection>
            <MobileMenuTitle>계정</MobileMenuTitle>
            {renderAuthButtons()}
          </MobileMenuSection>
        </MobileMenuContainer>
      </Drawer>

      <Modal
        title="로그아웃"
        open={isLogoutModalOpen}
        onOk={handleLogoutConfirm}
        onCancel={handleLogoutCancel}
        okText="로그아웃"
        cancelText="취소"
        centered
      >
        <p>정말 로그아웃하시겠습니까?</p>
      </Modal>
    </>
  );
}

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  height: 64px;
  background-color: #ffffff;
  border-bottom: 1px solid #f0f0f0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
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

const DesktopLinks = styled.nav`
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const MobileMenuSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const MobileMenuTitle = styled.h3`
  margin: 0 0 16px 0;
  font-size: 16px;
  font-weight: 600;
  color: #262626;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 8px;
`;
