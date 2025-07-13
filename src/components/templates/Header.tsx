import styled from '@emotion/styled';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
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
          <Link to="/join">
            <Button type="primary">Join</Button>
          </Link>
          <Link to="/login">
            <Button type="default">Login</Button>
          </Link>
        </Links>
      </Section>
    </Container>
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
