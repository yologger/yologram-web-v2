import styled from '@emotion/styled';
import { Button, Form, Input, Modal, Space, Typography } from 'antd';

const { Title } = Typography;
const { TextArea } = Input;

interface BoardFormValues {
  title: string;
  content: string;
}

interface BoardNewFormProps {
  open: boolean;
  onCancel: () => void;
  onSubmit: (values: BoardFormValues) => void;
}

const BoardNewForm = ({ open, onCancel, onSubmit }: BoardNewFormProps) => {
  const [form] = Form.useForm();

  const handleCancel = () => {
    form.resetFields();
    onCancel();
  };

  const handleSubmit = (values: BoardFormValues) => {
    onSubmit(values);
    form.resetFields();
  };

  return (
    <StyledModal open={open} onCancel={handleCancel} footer={null} centered width={800}>
      <StyledSpace direction="vertical" size="large">
        <StyledTitle level={2}>새 게시글 작성</StyledTitle>

        <Form form={form} layout="vertical" onFinish={handleSubmit} autoComplete="off">
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
    </StyledModal>
  );
};

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

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;

export default BoardNewForm;
