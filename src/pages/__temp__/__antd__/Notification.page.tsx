import { Button, Divider, message, notification, Space, Typography } from 'antd';
import { useState } from 'react';

const { Title } = Typography;

const NotificationPage = () => {
  const [api, contextHolder] = notification.useNotification();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (values: { email: string; password: string }) => {
    message.success('폼이 성공적으로 제출되었습니다!');
    setIsModalOpen(false);
  };

  // 기본 Notification 예시들
  const showSuccessNotification = () => {
    notification.success({
      message: '성공!',
      description: '작업이 성공적으로 완료되었습니다.',
      placement: 'topRight',
    });
  };

  const showErrorNotification = () => {
    notification.error({
      message: '에러 발생!',
      description: '작업 중 오류가 발생했습니다. 다시 시도해주세요.',
      placement: 'topRight',
    });
  };

  const showWarningNotification = () => {
    notification.warning({
      message: '경고!',
      description: '이 작업은 되돌릴 수 없습니다.',
      placement: 'topRight',
    });
  };

  const showInfoNotification = () => {
    notification.info({
      message: '정보',
      description: '새로운 업데이트가 있습니다.',
      placement: 'topRight',
    });
  };

  // 커스텀 Notification
  const showCustomNotification = () => {
    notification.open({
      message: '커스텀 알림',
      description: '이것은 커스텀 스타일의 알림입니다.',
      placement: 'topRight',
      duration: 0, // 자동으로 사라지지 않음
      style: {
        backgroundColor: '#f6ffed',
        border: '1px solid #b7eb8f',
      },
    });
  };

  // 아이콘과 함께
  const showNotificationWithIcon = () => {
    notification.success({
      message: '파일 업로드 완료',
      description: 'profile.jpg 파일이 성공적으로 업로드되었습니다.',
      placement: 'topRight',
      icon: '📁',
    });
  };

  // 여러 개 동시 표시
  const showMultipleNotifications = () => {
    notification.success({
      message: '첫 번째 알림',
      description: '첫 번째 작업이 완료되었습니다.',
      placement: 'topRight',
    });

    setTimeout(() => {
      notification.info({
        message: '두 번째 알림',
        description: '두 번째 작업이 완료되었습니다.',
        placement: 'topRight',
      });
    }, 500);

    setTimeout(() => {
      notification.warning({
        message: '세 번째 알림',
        description: '세 번째 작업이 완료되었습니다.',
        placement: 'topRight',
      });
    }, 1000);
  };

  // 버튼이 있는 Notification
  const showNotificationWithButton = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button
        type="primary"
        size="small"
        onClick={() => {
          notification.destroy();
          message.success('알림을 확인했습니다!');
        }}
      >
        확인
      </Button>
    );

    notification.open({
      message: '새로운 메시지',
      description: '읽지 않은 메시지가 3개 있습니다.',
      btn,
      key,
      placement: 'topRight',
      duration: 0,
    });
  };

  // 모든 알림 닫기
  const closeAllNotifications = () => {
    notification.destroy();
    message.info('모든 알림이 닫혔습니다.');
  };

  return (
    <div style={{ padding: '24px' }}>
      <Title level={2}>Notification Examples</Title>

      <Title level={3}>기본 Notification 타입들</Title>
      <Space wrap>
        <Button type="primary" onClick={showSuccessNotification}>
          Success Notification
        </Button>
        <Button type="default" onClick={showErrorNotification}>
          Error Notification
        </Button>
        <Button type="default" onClick={showWarningNotification}>
          Warning Notification
        </Button>
        <Button type="default" onClick={showInfoNotification}>
          Info Notification
        </Button>
      </Space>
      <Divider />

      <Title level={3}>커스텀 Notification</Title>
      <Space wrap>
        <Button type="default" onClick={showCustomNotification}>
          커스텀 스타일
        </Button>
        <Button type="default" onClick={showNotificationWithIcon}>
          아이콘과 함께
        </Button>
        <Button type="default" onClick={showNotificationWithButton}>
          버튼이 있는 알림
        </Button>
      </Space>
      <Divider />

      <Title level={3}>고급 기능</Title>
      <Space wrap>
        <Button type="default" onClick={showMultipleNotifications}>
          여러 개 동시 표시
        </Button>
        <Button type="default" onClick={closeAllNotifications}>
          모든 알림 닫기
        </Button>
      </Space>
      <Divider />

      <Title level={3}>실제 사용 예시</Title>
      <Space wrap>
        <Button
          type="primary"
          onClick={() => {
            notification.success({
              message: '저장 완료',
              description: '설정이 성공적으로 저장되었습니다.',
              placement: 'topRight',
            });
          }}
        >
          설정 저장
        </Button>
        <Button
          type="default"
          onClick={() => {
            notification.warning({
              message: '로그아웃',
              description: '5분 후 자동으로 로그아웃됩니다.',
              placement: 'topRight',
              duration: 0,
            });
          }}
        >
          자동 로그아웃 경고
        </Button>
      </Space>
      <Divider />
    </div>
  );
};

export default NotificationPage;
