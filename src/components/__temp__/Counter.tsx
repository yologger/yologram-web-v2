import { Card } from 'antd';
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
    <Card title="Counter" style={{ marginBottom: 16 }}>
      <div>{count}</div>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </Card>
  );
};
