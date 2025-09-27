import styled from '@emotion/styled';
import { Button, Card, Space, Typography, message } from 'antd';
import { useState } from 'react';
import { Counter } from '../../components/test/Counter';

const { Title, Text } = Typography;

// 정상적인 컴포넌트
const NormalComponent = () => {
  return (
    <Card title="✅ 정상 컴포넌트" style={{ marginBottom: 16 }}>
      <Text>이 컴포넌트는 정상적으로 작동합니다!</Text>
    </Card>
  );
};

// 서버 에러를 시뮬레이션하는 컴포넌트
const ServerErrorComponent = () => {
  const [isLoading, setIsLoading] = useState(false);

  const simulateServerError = async () => {
    setIsLoading(true);
    try {
      // 서버 에러 시뮬레이션
      await new Promise((_, reject) => {
        setTimeout(() => {
          reject(new Error('서버 연결에 실패했습니다. (500 Internal Server Error)'));
        }, 1000);
      });
    } catch (error) {
      message.error('서버 에러가 발생했습니다!');
      console.error('서버 에러:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const simulateNetworkError = async () => {
    setIsLoading(true);
    try {
      // 네트워크 에러 시뮬레이션
      await new Promise((_, reject) => {
        setTimeout(() => {
          reject(new Error('네트워크 연결을 확인해주세요. (ERR_NETWORK)'));
        }, 1000);
      });
    } catch (error) {
      message.error('네트워크 에러가 발생했습니다!');
      console.error('네트워크 에러:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card title="🌐 서버 에러 시뮬레이션" style={{ marginBottom: 16 }}>
      <Space direction="vertical">
        <Text>서버 에러를 시뮬레이션해보세요!</Text>
        <Space>
          <Button type="primary" danger loading={isLoading} onClick={simulateServerError}>
            서버 에러 발생
          </Button>
          <Button type="default" loading={isLoading} onClick={simulateNetworkError}>
            네트워크 에러 발생
          </Button>
        </Space>
      </Space>
    </Card>
  );
};

const TestPage = () => {
  return (
    <Container>
      <Title level={2}>TestPage</Title>
      {/* Couter 컴포넌트 */}
      <Counter />

      {/* 정상 컴포넌트 */}
      <NormalComponent />

      {/* 서버 에러 시뮬레이션 */}
      <ServerErrorComponent />
    </Container>
  );
};

export default TestPage;

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #f5f5f5;
  min-height: 100vh;
`;
