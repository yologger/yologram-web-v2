import styled from '@emotion/styled';
import React, { useState } from 'react';

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <Container>
      <h2>Counter</h2>
      <div>{count}</div>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff3de;
`;
