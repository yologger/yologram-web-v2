import styled from '@emotion/styled';
import { Button, Card, Space, Typography, message } from 'antd';
import { useState } from 'react';
import ErrorBoundary from '../../components/common/ErrorBoundary';
import ErrorBoundaryModal from '../../components/common/ErrorBoundaryModal';
import { Counter } from '../../components/test/Counter';

const { Title, Text } = Typography;

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
        <Text type="secondary">
          💡 이 에러들은 React Query나 try-catch로 처리하는 것이 좋습니다.
        </Text>
      </Space>
    </Card>
  );
};

// 에러를 발생시키는 컴포넌트
const BuggyComponent = () => {
  const [shouldError, setShouldError] = useState(false);

  if (shouldError) {
    // 의도적으로 에러 발생
    throw new Error('이것은 테스트 에러입니다! 🐛');
  }

  return (
    <Card title="🐛 버그가 있는 컴포넌트" style={{ marginBottom: 16 }}>
      <Space direction="vertical">
        <Text>이 버튼을 누르면 에러가 발생합니다!</Text>
        <Button danger onClick={() => setShouldError(true)}>
          에러 발생시키기
        </Button>
      </Space>
    </Card>
  );
};

// 팝업 에러를 발생시키는 컴포넌트
const BuggyModalComponent = () => {
  const [shouldError, setShouldError] = useState(false);

  if (shouldError) {
    // 의도적으로 에러 발생
    throw new Error('팝업으로 표시될 에러입니다! 🎯');
  }

  return (
    <Card title="🎯 팝업 에러 컴포넌트" style={{ marginBottom: 16 }}>
      <Space direction="vertical">
        <Text>이 버튼을 누르면 팝업으로 에러가 표시됩니다!</Text>
        <Button type="primary" onClick={() => setShouldError(true)}>
          팝업 에러 발생시키기
        </Button>
      </Space>
    </Card>
  );
};

// 정상적인 컴포넌트
const NormalComponent = () => {
  return (
    <Card title="✅ 정상 컴포넌트" style={{ marginBottom: 16 }}>
      <Text>이 컴포넌트는 정상적으로 작동합니다!</Text>
    </Card>
  );
};

const TestPage = () => {
  const handleError = (error: Error) => {
    console.log('팝업 에러 발생:', error.message);
  };

  return (
    <Container>
      <Title level={2}>ErrorBoundary 테스트 페이지</Title>

      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        {/* 기존 ErrorBoundary (전체 화면 에러) */}
        <Card title="🔄 전체 화면 ErrorBoundary">
          <ErrorBoundary>
            <BuggyComponent />
          </ErrorBoundary>
        </Card>

        {/* 새로운 팝업 ErrorBoundary */}
        <Card title="🎯 팝업 ErrorBoundary">
          <ErrorBoundaryModal title="커스텀 에러 제목" onError={handleError}>
            <BuggyModalComponent />
          </ErrorBoundaryModal>
        </Card>

        {/* 정상 컴포넌트 */}
        <NormalComponent />

        {/* 기존 Counter 컴포넌트도 ErrorBoundary로 감싸기 */}
        <ErrorBoundary>
          <Card title="🔢 Counter 컴포넌트">
            <Counter />
          </Card>
        </ErrorBoundary>

        {/* 서버 에러 시뮬레이션 */}
        <ServerErrorComponent />

        <Card title="📝 ErrorBoundary 사용법 비교">
          <Space direction="vertical">
            <Text strong>🔄 전체 화면 ErrorBoundary:</Text>
            <Text code>{'<ErrorBoundary><BuggyComponent /></ErrorBoundary>'}</Text>
            <Text type="secondary">- 에러 시 전체 화면이 에러 화면으로 변경</Text>

            <Text strong style={{ marginTop: 16 }}>
              🎯 팝업 ErrorBoundary:
            </Text>
            <Text code>{'<ErrorBoundaryModal><BuggyComponent /></ErrorBoundaryModal>'}</Text>
            <Text type="secondary">- 에러 시 팝업으로 표시, 다른 컴포넌트는 정상 작동</Text>

            <Text strong style={{ marginTop: 16 }}>
              🌐 서버 에러 처리 (권장):
            </Text>
            <Text code>
              {'// React Query 사용\nconst { data, error, isLoading } = useQuery(...)'}
            </Text>
            <Text type="secondary">- 비동기 에러는 React Query나 try-catch로 처리</Text>
            <Text type="secondary">- ErrorBoundary는 동기 에러(렌더링 에러)에만 사용</Text>

            <Text type="secondary" style={{ marginTop: 16 }}>
              💡 두 가지 방식을 모두 테스트해보세요!
            </Text>
          </Space>
        </Card>
      </Space>
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
