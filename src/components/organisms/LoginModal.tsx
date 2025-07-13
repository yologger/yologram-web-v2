import { Button, Form, Input, Modal, Space, Typography } from 'antd';

const { Title } = Typography;

interface LoginModalProps {
  open: boolean;
  onCancel: () => void;
  onSubmit: (values: { email: string; password: string }) => void;
}

export default function LoginModal({ open, onCancel, onSubmit }: LoginModalProps) {
  return (
    <Modal open={open} onCancel={onCancel} footer={null}>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2} style={{ textAlign: 'center', margin: 0 }}>
          로그인
        </Title>

        <Form onFinish={onSubmit} layout="vertical">
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </Modal>
  );
}
