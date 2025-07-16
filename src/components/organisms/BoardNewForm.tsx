import styled from '@emotion/styled';
import { Button, Card, Form, Input, Space, Typography } from 'antd';

const { Title } = Typography;
const { TextArea } = Input;

interface BoardFormValues {
  title: string;
  content: string;
}

interface IProps {
  onSubmit: (values: BoardFormValues) => void;
  onCancel: () => void;
}

const BoardNewForm = ({ onSubmit, onCancel }: IProps) => {
  const [form] = Form.useForm();

  const handleCancel = () => {
    form.resetFields();
    onCancel();
  };

  return (
    <StyledCard>
      <StyledSpace direction="vertical" size="large">
        <StyledTitle level={2}>새 게시글 작성</StyledTitle>

        <Form form={form} layout="vertical" onFinish={onSubmit} autoComplete="off">
          <Form.Item
            label="제목"
            name="title"
            rules={[
              { required: true, message: '제목을 입력해주세요' },
              { max: 100, message: '제목은 100자 이내로 입력해주세요' },
            ]}
          >
            <Input placeholder="게시글 제목을 입력하세요" size="large" />
          </Form.Item>

          <Form.Item
            label="내용"
            name="content"
            rules={[
              { required: true, message: '내용을 입력해주세요' },
              { min: 10, message: '내용은 최소 10자 이상 입력해주세요' },
            ]}
          >
            <TextArea placeholder="게시글 내용을 입력하세요" rows={10} showCount maxLength={2000} />
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
              <Button type="primary" htmlType="submit" size="large" style={{ minWidth: '120px' }}>
                작성하기
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

export default BoardNewForm;
