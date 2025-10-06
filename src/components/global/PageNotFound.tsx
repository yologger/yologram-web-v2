import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

interface PageNotFoundProps {
  onBack?: () => void;
}

const PageNotFound = ({ onBack }: PageNotFoundProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate('/');
    }
  };

  return (
    <Result
      status="404"
      title="페이지를 찾을 수 없습니다"
      subTitle="요청하신 페이지가 존재하지 않거나 삭제되었습니다."
      extra={
        <Button type="primary" onClick={handleBack}>
          홈으로 돌아가기
        </Button>
      }
    />
  );
};

export default PageNotFound;
