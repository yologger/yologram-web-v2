import { Button, Divider, message, Space, Typography } from 'antd';

const { Title } = Typography;

const ToastPage = () => {
  // 기본 Toast 예시들
  const showSuccess = () => message.success('성공적으로 처리되었습니다!');
  const showError = () => message.error('에러가 발생했습니다!');
  const showWarning = () => message.warning('주의가 필요합니다!');
  const showInfo = () => message.info('정보를 확인해주세요!');
  const showLoading = () => message.loading('로딩 중...', 2.5);

  // 커스텀 지속 시간
  const showCustomDuration = () => message.success('5초 후 사라집니다!', 5);
  const showPermanent = () => message.loading('수동으로 닫아주세요!', 0);

  // 여러 개 동시 표시
  const showMultiple = () => {
    message.success('첫 번째 메시지!');
    setTimeout(() => message.info('두 번째 메시지!'), 500);
    setTimeout(() => message.warning('세 번째 메시지!'), 1000);
  };

  // Promise와 함께 사용
  const showPromise = () => {
    const hide = message.loading('처리 중...', 0);

    // 2초 후 성공으로 변경
    setTimeout(() => {
      hide();
      message.success('처리가 완료되었습니다!');
    }, 2000);
  };

  // 에러 처리 예시
  const showErrorWithDetails = () => {
    message.error({
      content: '에러가 발생했습니다!',
      duration: 5,
      style: {
        marginTop: '20vh',
      },
    });
  };

  return (
    <div style={{ padding: '24px' }}>
      <Title level={2}>Toast Examples</Title>

      <Title level={3}>기본 Toast 타입들</Title>
      <Space wrap>
        <Button type="primary" onClick={showSuccess}>
          Success Toast
        </Button>
        <Button type="default" onClick={showError}>
          Error Toast
        </Button>
        <Button type="default" onClick={showWarning}>
          Warning Toast
        </Button>
        <Button type="default" onClick={showInfo}>
          Info Toast
        </Button>
        <Button type="default" onClick={showLoading}>
          Loading Toast
        </Button>
      </Space>
      <Divider />

      <Title level={3}>커스텀 설정</Title>
      <Space wrap>
        <Button type="default" onClick={showCustomDuration}>
          커스텀 지속시간 (5초)
        </Button>
        <Button type="default" onClick={showPermanent}>
          수동 닫기
        </Button>
        <Button type="default" onClick={showErrorWithDetails}>
          커스텀 스타일
        </Button>
      </Space>
      <Divider />

      <Title level={3}>고급 기능</Title>
      <Space wrap>
        <Button type="default" onClick={showMultiple}>
          여러 개 동시 표시
        </Button>
        <Button type="default" onClick={showPromise}>
          Promise와 함께 사용
        </Button>
      </Space>
      <Divider />

      <Title level={3}>실제 사용 예시</Title>
      <Space wrap>
        <Button
          type="primary"
          onClick={() => {
            message.success('저장되었습니다!');
          }}
        >
          저장하기
        </Button>
        <Button
          type="default"
          onClick={() => {
            message.warning('정말 삭제하시겠습니까?');
          }}
        >
          삭제하기
        </Button>
        <Button
          type="default"
          onClick={() => {
            const hide = message.loading('업로드 중...', 0);
            setTimeout(() => {
              hide();
              message.success('업로드 완료!');
            }, 3000);
          }}
        >
          파일 업로드
        </Button>
      </Space>
    </div>
  );
};

export default ToastPage;
