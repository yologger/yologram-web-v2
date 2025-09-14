import { Button, Divider, Space, Typography } from 'antd';
import { useState } from 'react';
import TestFormModal from '../../components/test/TestFormModal';

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
    console.log('Form submitted with values:', values);
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

      <Title level={3}>Button Types</Title>
      <Space wrap>
        <Button type="primary">Primary Button</Button>
      </Space>
      <Divider />
    </div>
  );
};

export default ModalPage;
