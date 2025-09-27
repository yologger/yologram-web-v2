import { Button, Result } from 'antd';
import type { ResultStatusType } from 'antd/es/result';
import { useNavigate } from 'react-router-dom';

interface ErrorComponentProps {
  status: ResultStatusType;
  title: string;
  subTitle: string;
  showBackButton?: boolean;
  showRefreshButton?: boolean;
  onBack?: () => void;
  onRefresh?: () => void;
}

const ErrorComponent = ({
  status,
  title,
  subTitle,
  showBackButton = true,
  showRefreshButton = true,
  onBack,
  onRefresh,
}: ErrorComponentProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate('/');
    }
  };

  const handleRefresh = () => {
    if (onRefresh) {
      onRefresh();
    } else {
      window.location.reload();
    }
  };

  const buttons = [];

  if (showRefreshButton) {
    buttons.push(
      <Button key="refresh" onClick={handleRefresh}>
        새로고침
      </Button>,
    );
  }

  if (showBackButton) {
    buttons.push(
      <Button key="back" type="primary" onClick={handleBack}>
        홈으로 돌아가기
      </Button>,
    );
  }

  return (
    <Result
      status={status}
      title={title}
      subTitle={subTitle}
      extra={buttons.length > 0 ? buttons : undefined}
    />
  );
};

export default ErrorComponent;
