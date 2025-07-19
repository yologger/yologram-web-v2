import { SaveOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { Avatar, Button, Card, Divider, Form, Input, Select, Space, Typography } from 'antd';

const { TextArea } = Input;
const { Title, Text } = Typography;

interface BoardEditFormValues {
  title: string;
  content: string;
  categories: string[];
  tags: string[];
}

interface BoardEditFormProps {
  initialValues: BoardEditFormValues;
  onSubmit: (values: BoardEditFormValues) => void;
  onCancel: () => void;
  loading?: boolean;
  author: {
    name: string;
    avatar: string;
  };
  boardId: string;
}

const BoardEditForm = ({
  initialValues,
  onSubmit,
  onCancel,
  loading = false,
  author,
  boardId,
}: BoardEditFormProps) => {
  const [form] = Form.useForm();

  const handleSubmit = async (values: BoardEditFormValues) => {
    onSubmit(values);
  };

  return (
    <StyledCard>
      {/* Header Section */}
      <HeaderSection>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <div>
            <Title level={2} style={{ marginBottom: 16 }}>
              게시글 수정
            </Title>
            <Space>
              <Avatar size={48} src={author.avatar} />
              <div>
                <AuthorName>{author.name}</AuthorName>
                <Text type="secondary" style={{ fontSize: '12px' }}>
                  게시글 ID: {boardId}
                </Text>
              </div>
            </Space>
          </div>
        </Space>
      </HeaderSection>

      <Divider />

      {/* Form Section */}
      <FormSection>
        <Form form={form} layout="vertical" initialValues={initialValues} onFinish={handleSubmit}>
          <Form.Item
            name="title"
            label="제목"
            rules={[{ required: true, message: '제목을 입력해주세요.' }]}
          >
            <Input placeholder="제목을 입력하세요" size="large" style={{ fontSize: '16px' }} />
          </Form.Item>

          <Form.Item
            name="content"
            label="내용"
            rules={[{ required: true, message: '내용을 입력해주세요.' }]}
          >
            <TextArea
              rows={12}
              placeholder="내용을 입력하세요"
              showCount
              maxLength={5000}
              style={{ fontSize: '14px', lineHeight: '1.6' }}
            />
          </Form.Item>

          <Form.Item
            name="categories"
            label="카테고리"
            rules={[{ required: true, message: '카테고리를 선택해주세요.' }]}
          >
            <Select
              mode="multiple"
              placeholder="카테고리를 선택하세요"
              size="large"
              options={[
                { value: 'Technology', label: 'Technology' },
                { value: 'Programming', label: 'Programming' },
                { value: 'Design', label: 'Design' },
                { value: 'Business', label: 'Business' },
                { value: 'Lifestyle', label: 'Lifestyle' },
              ]}
            />
          </Form.Item>

          <Form.Item name="tags" label="태그">
            <Select
              mode="tags"
              placeholder="태그를 입력하세요"
              size="large"
              style={{ width: '100%' }}
            />
          </Form.Item>

          <Form.Item>
            <ButtonSection>
              <Space size="middle">
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  icon={<SaveOutlined />}
                  size="large"
                >
                  수정하기
                </Button>
                <Button onClick={onCancel} size="large">
                  취소
                </Button>
              </Space>
            </ButtonSection>
          </Form.Item>
        </Form>
      </FormSection>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 800px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  @media (max-width: 768px) {
    border-radius: 0;
    box-shadow: none;
    border: none;
  }
`;

const HeaderSection = styled.div`
  margin-bottom: 16px;
`;

const AuthorName = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #262626;
`;

const FormSection = styled.div`
  margin-bottom: 16px;
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 24px;
  border-top: 1px solid #f0f0f0;
`;

export default BoardEditForm;
