import { MenuOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { Button, Drawer, Modal } from 'antd';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../../queries/auth/useLogout.mutation';
import { useAuthStore } from '../../stores/auth.store';

export default function Header() {
  const [authStore, setAuthStore] = useAuthStore();
  const { mutate: logout } = useLogoutMutation();
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleLogout = () => setShowLogoutModal(true);

  const handleLogoutConfirm = () => {
    setShowLogoutModal(false);
    logout();
    navigate('/');
    handleMobileMenuClose(); // Drawer 닫기
  };

  const handleLogoutCancel = () => setShowLogoutModal(false);

  const handleMobileMenuOpen = () => setShowMobileMenu(true);

  const handleMobileMenuClose = () => setShowMobileMenu(false);

  const renderNavigationLinks = () => (
    <>
      <Link to="/" onClick={handleMobileMenuClose}>
        <Button type="text" block>
          Home
        </Button>
      </Link>
      <Link to="/boards/new" onClick={handleMobileMenuClose}>
        <Button type="text" block>
          Write
        </Button>
      </Link>
    </>
  );

  const renderTestLinks = () => (
    <>
      <Link to="/test" onClick={handleMobileMenuClose}>
        <Button type="text" block style={{ color: '#c7c7c7' }}>
          /test
        </Button>
      </Link>
      <Link to="/test/errorboundary" onClick={handleMobileMenuClose}>
        <Button type="text" block style={{ color: '#c7c7c7' }}>
          /test/errorboundary
        </Button>
      </Link>
      <Link to="/antd/buttons" onClick={handleMobileMenuClose}>
        <Button type="text" block style={{ color: '#c7c7c7' }}>
          /antd/buttons
        </Button>
      </Link>
      <Link to="/antd/modal" onClick={handleMobileMenuClose}>
        <Button type="text" block style={{ color: '#c7c7c7' }}>
          /antd/modal
        </Button>
      </Link>
      <Link to="/antd/notification" onClick={handleMobileMenuClose}>
        <Button type="text" block style={{ color: '#c7c7c7' }}>
          /antd/notification
        </Button>
      </Link>
      <Link to="/antd/toast" onClick={handleMobileMenuClose}>
        <Button type="text" block style={{ color: '#c7c7c7' }}>
          /antd/toast
        </Button>
      </Link>
    </>
  );

  const renderAuthButtonsDesktop = () => (
    <>
      {authStore ? (
        <>
          <UserInfo>
            <span>안녕하세요, {authStore?.nickname || authStore?.name || '사용자'}님</span>
          </UserInfo>
          <Button type="default" onClick={handleLogout}>
            Logout
          </Button>
          <Link to="/settings">
            <Button type="primary">Settings</Button>
          </Link>
        </>
      ) : (
        <>
          <Link to="/join">
            <Button type="primary">Join</Button>
          </Link>
          <Link to="/login">
            <Button type="default">Login</Button>
          </Link>
        </>
      )}
    </>
  );

  const renderAuthButtonsMobile = () => (
    <>
      {authStore ? (
        <>
          <UserInfo>
            <span>안녕하세요, {authStore?.nickname || authStore?.name || '사용자'}님</span>
          </UserInfo>
          <Link to="/settings" onClick={handleMobileMenuClose}>
            <Button type="primary" style={{ width: '100%' }}>
              Settings
            </Button>
          </Link>
          <Button type="default" onClick={handleLogout}>
            Logout
          </Button>
        </>
      ) : (
        <>
          <Link to="/join" onClick={handleMobileMenuClose}>
            <Button type="primary" style={{ width: '100%' }}>
              Join
            </Button>
          </Link>
          <Link to="/login" onClick={handleMobileMenuClose}>
            <Button type="default" style={{ width: '100%' }}>
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
          {import.meta.env.MODE === 'development' ? (
            <DesktopLinks>{renderTestLinks()}</DesktopLinks>
          ) : null}
        </Section>

        <Section>
          <DesktopLinks>{renderAuthButtonsDesktop()}</DesktopLinks>
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
        open={showMobileMenu}
        width="80%"
        maskClosable={true}
        keyboard={true}
      >
        <MobileMenuContainer>
          <MobileMenuSection>
            {/* <MobileMenuTitle>메뉴</MobileMenuTitle> */}
            {renderNavigationLinks()}
          </MobileMenuSection>

          <MobileMenuSection>
            {/* <MobileMenuTitle>계정</MobileMenuTitle> */}
            {renderAuthButtonsMobile()}
          </MobileMenuSection>
        </MobileMenuContainer>
      </Drawer>

      <Modal
        title="로그아웃"
        open={showLogoutModal}
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

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #595959;
  margin-right: 8px;

  @media (max-width: 768px) {
    display: none;
  }
`;
