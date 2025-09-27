import styled from '@emotion/styled';
import { Button, Card, Form, Input, Space, Typography } from 'antd';
import type { JoinRequest } from '../../apis/ums';

const { Title } = Typography;

interface IProps {
  onSubmit: (data: JoinRequest) => void;
  onCancel: () => void;
  loading?: boolean;
}

export default function JoinForm({ onSubmit, onCancel, loading = false }: IProps) {
  const [form] = Form.useForm<JoinRequest>();

  const handleSubmit = (request: JoinRequest) => {
    onSubmit(request);
  };

  const handleCancel = () => {
    form.resetFields();
    onCancel();
  };

  return (
    <StyledCard>
      <StyledSpace direction="vertical" size="large">
        <StyledTitle level={2}>회원가입</StyledTitle>

        <Form
          form={form}
          onFinish={handleSubmit}
          layout="vertical"
          autoComplete="off"
          initialValues={{
            email: 'tester10000@example.com',
            name: 'tester10000',
            nickname: 'tester10000',
            password: '!2345Qwert',
            confirmPassword: '!2345Qwert',
          }}
        >
          <Form.Item
            label="이메일"
            name="email"
            rules={[
              { required: true, message: '이메일을 입력해주세요!' },
              { type: 'email', message: '올바른 이메일 형식이 아닙니다!' },
            ]}
          >
            <Input placeholder="example@email.com" />
          </Form.Item>

          <Form.Item
            label="이름"
            name="name"
            rules={[
              { required: true, message: '이름을 입력해주세요!' },
              { min: 2, message: '이름은 2자 이상 입력해주세요!' },
            ]}
          >
            <Input placeholder="홍길동" />
          </Form.Item>

          <Form.Item
            label="닉네임"
            name="nickname"
            rules={[
              { required: true, message: '닉네임을 입력해주세요!' },
              { min: 2, max: 20, message: '닉네임은 2-20자 사이로 입력해주세요!' },
            ]}
          >
            <Input placeholder="nickname123" />
          </Form.Item>

          <Form.Item
            label="비밀번호"
            name="password"
            rules={[
              { required: true, message: '비밀번호를 입력해주세요!' },
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
            label="비밀번호 확인"
            name="confirmPassword"
            dependencies={['password']}
            rules={[
              { required: true, message: '비밀번호를 다시 입력해주세요!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('비밀번호가 일치하지 않습니다!'));
                },
              }),
            ]}
          >
            <Input.Password placeholder="비밀번호를 다시 입력해주세요" />
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
                회원가입
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
