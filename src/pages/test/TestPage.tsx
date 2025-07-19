import styled from '@emotion/styled';
import { Button } from 'antd';
import { Counter } from '../../components/test/Counter';

const TestPage = () => {
  return (
    <Container>
      <h1>TestPage</h1>
      <Counter />
      <Button type="primary">Click me</Button>
    </Container>
  );
};

export default TestPage;

const Container = styled.div`
  background-color: red;
`;
