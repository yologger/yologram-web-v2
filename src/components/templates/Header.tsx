import { SettingOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { Button, Modal } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const isLoggedIn = true;
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

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

  return (
    <>
      <Container>
        <Section>
          <LogoLink to="/">Yologram</LogoLink>
          <Links>
            <Link to="/">
              <Button type="text">Home</Button>
            </Link>
            <Link to="/board/new">
              <Button type="text">Write</Button>
            </Link>
          </Links>
        </Section>

        <Section>
          <Links>
            {isLoggedIn ? (
              <>
                <Button type="default" onClick={handleLogout}>
                  Logout
                </Button>
                <Link to="/settings">
                  <Button type="primary" icon={<SettingOutlined />} />
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
          </Links>
        </Section>
      </Container>

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

const Links = styled.nav`
  display: flex;
  gap: 24px;
`;
