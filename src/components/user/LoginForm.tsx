import styled from '@emotion/styled';
import { Button, Card, Form, Input, Space, Typography } from 'antd';
import type { LoginRequest } from '../../apis/ums';

const { Title } = Typography;

interface IProps {
  onSubmit: (values: LoginRequest) => void;
  onCancel: () => void;
  loading?: boolean;
}

const LoginForm = ({ onSubmit, onCancel, loading = false }: IProps) => {
  const [form] = Form.useForm();

  const handleSubmit = (request: LoginRequest) => {
    onSubmit(request);
  };

  const handleCancel = () => {
    form.resetFields();
    onCancel();
  };

  return (
    <StyledCard>
      <StyledSpace direction="vertical" size="large">
        <StyledTitle level={2}>로그인</StyledTitle>

        <Form
          form={form}
          onFinish={handleSubmit}
          layout="vertical"
          autoComplete="off"
          initialValues={{
            email: 'tester1000@example.com',
            password: '!2345Qwert',
          }}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: '이메일을 입력해주세요!' }]}
          >
            <Input size="large" placeholder="이메일을 입력하세요" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: '비밀번호를 입력해주세요!' }]}
          >
            <Input.Password size="large" placeholder="비밀번호를 입력하세요" />
          </Form.Item>
          <Form.Item style={{ marginBottom: 0, textAlign: 'center' }}>
            <ButtonGroup>
              <Button
                type="default"
                size="large"
                onClick={handleCancel}
                disabled={loading}
                style={{ minWidth: '120px' }}
              >
                취소
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                loading={loading}
                style={{ minWidth: '120px' }}
              >
                로그인
              </Button>
            </ButtonGroup>
          </Form.Item>
        </Form>
      </StyledSpace>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  @media (max-width: 768px) {
    max-width: 100%;
    border-radius: 0;
    box-shadow: none;
    border: none;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

const StyledSpace = styled(Space)`
  width: 100%;

  @media (max-width: 768px) {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const StyledTitle = styled(Title)`
  text-align: center;
  margin: 0 !important;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;

export default LoginForm;
