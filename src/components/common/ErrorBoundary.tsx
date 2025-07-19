import styled from '@emotion/styled';
import { Button, Result } from 'antd';
import type { ErrorInfo, ReactNode } from 'react';
import { Component } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // 에러가 발생하면 상태를 업데이트하여 다음 렌더링에서 fallback UI를 보여줍니다
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // 에러 로깅
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      // 커스텀 fallback이 있으면 사용
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // 기본 에러 UI
      return (
        <ErrorContainer>
          <Result
            status="error"
            title="문제가 발생했습니다"
            subTitle="죄송합니다. 예상치 못한 오류가 발생했습니다."
            extra={[
              <Button type="primary" key="reload" onClick={this.handleReload}>
                페이지 새로고침
              </Button>,
              <Button key="home" onClick={this.handleGoHome}>
                홈으로 이동
              </Button>,
            ]}
          />
          {import.meta.env.MODE === 'development' && this.state.error && (
            <ErrorDetails>
              <h4>개발 모드 - 에러 상세 정보:</h4>
              <pre>{this.state.error.toString()}</pre>
              <h4>스택 트레이스:</h4>
              <pre>{this.state.error.stack}</pre>
            </ErrorDetails>
          )}
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

const ErrorContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f5f5f5;
`;

const ErrorDetails = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;

  pre {
    background: #f6f8fa;
    padding: 12px;
    border-radius: 4px;
    overflow-x: auto;
    font-size: 12px;
    line-height: 1.4;
  }
`;

export default ErrorBoundary;
