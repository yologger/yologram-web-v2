import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

interface BoardNotFoundProps {
  onBack?: () => void;
  onRefresh?: () => void;
}

const BoardNotFound = ({ onBack, onRefresh }: BoardNotFoundProps) => {
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
      title="게시글을 찾을 수 없습니다"
      subTitle="요청하신 게시글이 존재하지 않거나 삭제되었습니다."
      extra={
        <Button type="primary" onClick={handleBack}>
          홈으로 돌아가기
        </Button>
      }
    />
  );
};

export default BoardNotFound;
