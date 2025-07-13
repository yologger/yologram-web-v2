import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <Container>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/join">Join</Link>
      </Container>
    </>
  );
}

const Container = styled.header`
  display: flex;
  gap: 16px;
  padding: 8px;
  border-bottom: 1px solid #0a312b;
`;
