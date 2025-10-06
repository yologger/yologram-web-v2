import { Button, Divider, message, Space, Typography } from 'antd';
import { useState } from 'react';
import TestFormModal from '../../../components/__temp__/TestFormModal';

const { Title } = Typography;

const ModalPage = () => {
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

  return (
    <div style={{ padding: '24px' }}>
      <Title level={2}>Test Modal</Title>

      <Title level={3}>TestFormModal</Title>
      <Space wrap>
        <Button type="primary" onClick={handleOpenModal}>
          Open TestFormModal
        </Button>
      </Space>
      <Divider />

      <TestFormModal open={isModalOpen} onCancel={handleCloseModal} onSubmit={handleSubmit} />
    </div>
  );
};

export default ModalPage;
