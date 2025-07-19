import styled from '@emotion/styled';
import { Button, Modal, Result, Space, Typography } from 'antd';
import type { ErrorInfo, ReactNode } from 'react';
import { Component } from 'react';

const { Text } = Typography;

interface Props {
  children: ReactNode;
  title?: string;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  isModalVisible: boolean;
}

class ErrorBoundaryModal extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      isModalVisible: false,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      isModalVisible: true,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // 에러 로깅
    console.error('Error caught by modal boundary:', error, errorInfo);

    // 부모 컴포넌트에 에러 알림
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  handleModalOk = () => {
    this.setState({ isModalVisible: false });
  };

  handleModalCancel = () => {
    this.setState({ isModalVisible: false });
  };

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: undefined,
      errorInfo: undefined,
      isModalVisible: false,
    });
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    return (
      <>
        {/* 자식 컴포넌트 렌더링 */}
        {this.props.children}

        {/* 에러 발생 시 모달 표시 */}
        <Modal
          title={this.props.title || '오류가 발생했습니다'}
          open={this.state.isModalVisible}
          onOk={this.handleModalOk}
          onCancel={this.handleModalCancel}
          footer={[
            <Button key="retry" type="primary" onClick={this.handleRetry}>
              다시 시도
            </Button>,
            <Button key="reload" onClick={this.handleReload}>
              페이지 새로고침
            </Button>,
            <Button key="close" onClick={this.handleModalCancel}>
              닫기
            </Button>,
          ]}
          width={600}
          centered
        >
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Result
              status="error"
              title="컴포넌트 오류"
              subTitle="이 컴포넌트에서 예상치 못한 오류가 발생했습니다."
            />

            {this.state.error && (
              <ErrorDetails>
                <Text strong>에러 메시지:</Text>
                <Text code>{this.state.error.message}</Text>

                {import.meta.env.NODE_ENV === 'development' && this.state.error.stack && (
                  <>
                    <Text strong style={{ marginTop: 16, display: 'block' }}>
                      개발 모드 - 스택 트레이스:
                    </Text>
                    <pre>{this.state.error.stack}</pre>
                  </>
                )}
              </ErrorDetails>
            )}
          </Space>
        </Modal>
      </>
    );
  }
}

const ErrorDetails = styled.div`
  background: #f6f8fa;
  padding: 16px;
  border-radius: 6px;
  border: 1px solid #e1e4e8;

  pre {
    background: #ffffff;
    padding: 12px;
    border-radius: 4px;
    overflow-x: auto;
    font-size: 11px;
    line-height: 1.4;
    border: 1px solid #d0d7de;
    margin-top: 8px;
  }
`;

export default ErrorBoundaryModal;
