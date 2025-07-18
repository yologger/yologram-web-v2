import styled from '@emotion/styled';
import { Button, Card, Form, Input, Space, Typography } from 'antd';

const { Title } = Typography;

interface ProfileFormData {
  email: string;
  name: string;
  nickname: string;
}

interface UpdateProfileFormProps {
  onSave: (values: ProfileFormData) => void;
  onPasswordChange: () => void;
  loading?: boolean;
  initialValues?: ProfileFormData;
}

const MyProfileForm = ({
  onSave,
  onPasswordChange,
  loading = false,
  initialValues = {
    email: 'user@example.com',
    name: '홍길동',
    nickname: '길동이',
  },
}: UpdateProfileFormProps) => {
  const [form] = Form.useForm<ProfileFormData>();

  return (
    <StyledCard>
      <StyledSpace direction="vertical" size="large">
        <StyledTitle level={2}>프로필 설정</StyledTitle>

        <Form form={form} layout="vertical" onFinish={onSave} initialValues={initialValues}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: '이메일을 입력해주세요!' },
              { type: 'email', message: '올바른 이메일 형식을 입력해주세요!' },
            ]}
          >
            <Input size="large" placeholder="이메일을 입력하세요" />
          </Form.Item>

          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: '이름을 입력해주세요!' }]}
          >
            <Input size="large" placeholder="이름을 입력하세요" />
          </Form.Item>

          <Form.Item
            label="Nickname"
            name="nickname"
            rules={[{ required: true, message: '닉네임을 입력해주세요!' }]}
          >
            <Input size="large" placeholder="닉네임을 입력하세요" />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0, textAlign: 'center' }}>
            <ButtonGroup>
              <Button
                type="default"
                size="large"
                onClick={onPasswordChange}
                style={{ minWidth: '120px' }}
              >
                비밀번호 변경
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                loading={loading}
                style={{ minWidth: '120px' }}
              >
                저장
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
  max-width: 800px;
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

export default MyProfileForm;
