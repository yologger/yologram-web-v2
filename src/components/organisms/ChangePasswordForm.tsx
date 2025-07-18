import styled from '@emotion/styled';
import { Button, Card, Form, Input, Space, Typography } from 'antd';

const { Title } = Typography;

interface ChangePasswordFormValues {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface ChangePasswordFormProps {
  onSubmit: (values: ChangePasswordFormValues) => void;
  onCancel: () => void;
  loading?: boolean;
}

export default function ChangePasswordForm({
  onSubmit,
  onCancel,
  loading = false,
}: ChangePasswordFormProps) {
  const [form] = Form.useForm<ChangePasswordFormValues>();

  const handleSubmit = (values: ChangePasswordFormValues) => {
    onSubmit(values);
  };

  const handleCancel = () => {
    form.resetFields();
    onCancel();
  };

  return (
    <StyledCard>
      <StyledSpace direction="vertical" size="large">
        <StyledTitle level={2}>비밀번호 변경</StyledTitle>

        <Form form={form} onFinish={handleSubmit} layout="vertical" autoComplete="off">
          <Form.Item
            label="현재 비밀번호"
            name="currentPassword"
            rules={[{ required: true, message: '현재 비밀번호를 입력해주세요!' }]}
          >
            <Input.Password placeholder="현재 비밀번호를 입력하세요" />
          </Form.Item>

          <Form.Item
            label="신규 비밀번호"
            name="newPassword"
            rules={[
              { required: true, message: '새 비밀번호를 입력해주세요!' },
              { min: 8, message: '비밀번호는 8자 이상 입력해주세요!' },
              {
                pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
                message: '비밀번호는 영문, 숫자, 특수문자를 포함해야 합니다!',
              },
            ]}
          >
            <Input.Password placeholder="8자 이상, 영문/숫자/특수문자 포함" />
          </Form.Item>

          <Form.Item
            label="신규 비밀번호 확인"
            name="confirmPassword"
            dependencies={['newPassword']}
            rules={[
              { required: true, message: '새 비밀번호를 다시 입력해주세요!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('newPassword') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('비밀번호가 일치하지 않습니다!'));
                },
              }),
            ]}
          >
            <Input.Password placeholder="새 비밀번호를 다시 입력해주세요" />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0, textAlign: 'center' }}>
            <ButtonGroup>
              <Button
                type="default"
                size="large"
                onClick={handleCancel}
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
                비밀번호 변경
              </Button>
            </ButtonGroup>
          </Form.Item>
        </Form>
      </StyledSpace>
    </StyledCard>
  );
}

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
