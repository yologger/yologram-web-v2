import styled from '@emotion/styled';
import { Button, Form, Input, Modal, Space, Typography } from 'antd';

const { Title } = Typography;

interface LoginModalProps {
  open: boolean;
  onCancel: () => void;
  onSubmit: (values: { email: string; password: string }) => void;
}

export default function LoginModal({ open, onCancel, onSubmit }: LoginModalProps) {
  return (
    <StyledModal open={open} onCancel={onCancel} footer={null} centered width={600}>
      <StyledSpace direction="vertical" size="large">
        <StyledTitle level={2}>로그인</StyledTitle>

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
      </StyledSpace>
    </StyledModal>
  );
}

const StyledModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 8px;
  }
`;

const StyledSpace = styled(Space)`
  width: 100%;
`;

const StyledTitle = styled(Title)`
  text-align: center;
  margin: 0 !important;
`;
