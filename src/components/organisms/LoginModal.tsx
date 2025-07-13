import { Button, Form, Input, Modal } from 'antd';

interface LoginModalProps {
  open: boolean;
  onCancel: () => void;
  onSubmit: (values: { email: string; password: string }) => void;
}

export default function LoginModal({ open, onCancel, onSubmit }: LoginModalProps) {
  return (
    <Modal title="Login" open={open} onCancel={onCancel} footer={null}>
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
    </Modal>
  );
}
