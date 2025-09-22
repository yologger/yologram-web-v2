import styled from '@emotion/styled';
import { Button, Card, Space, Typography } from 'antd';
import { useState } from 'react';
import ErrorBoundary from '../../components/common/ErrorBoundary';
import ErrorBoundaryModal from '../../components/common/ErrorBoundaryModal';

const { Title } = Typography;

// 에러를 발생시키는 컴포넌트
const ErrorComponent = () => {
  const [shouldError, setShouldError] = useState(false);

  if (shouldError) {
    // 의도적으로 에러 발생
    throw new Error('이것은 테스트 에러입니다!');
  }

  return (
    <Card title="Error가 발생하는 컴포넌트" style={{ marginBottom: 16 }}>
      <Space direction="vertical">
        <Button danger onClick={() => setShouldError(true)}>
          에러 발생시키기
        </Button>
      </Space>
    </Card>
  );
};

const ErrorBoundaryPage = () => {
  const handleError = (error: Error) => {
    console.log('팝업 에러 발생:', error.message);
  };

  return (
    <Container>
      <Title level={2}>ErrorBoundaryPage</Title>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        {/* 기존 ErrorBoundary (전체 화면 에러) */}
        <ErrorBoundary>
          <ErrorComponent />
        </ErrorBoundary>

        {/* 새로운 팝업 ErrorBoundary */}
        <ErrorBoundaryModal title="커스텀 에러 제목" onError={handleError}>
          <ErrorComponent />
        </ErrorBoundaryModal>

        {/* 서버 에러 시뮬레이션 */}
      </Space>
    </Container>
  );
};

export default ErrorBoundaryPage;

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #f5f5f5;
  min-height: 100vh;
`;
