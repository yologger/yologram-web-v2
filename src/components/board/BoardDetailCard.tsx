import {
  ArrowLeftOutlined,
  ClockCircleOutlined,
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  HeartOutlined,
  MessageOutlined,
} from '@ant-design/icons';
import styled from '@emotion/styled';
import { Avatar, Button, Card, Divider, Space, Tag, Typography } from 'antd';
import type { GetBoardResponse } from '../../apis/bms';
import type { BoardData } from '../../models/board.model';

const { Text, Paragraph, Title } = Typography;

interface BoardDetailCardProps {
  boardData: BoardData | GetBoardResponse;
  onBack: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const BoardDetailCard = ({ boardData, onBack, onEdit, onDelete }: BoardDetailCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <StyledCard>
      {/* Header Section */}
      <HeaderSection>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <div
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}
          >
            <Button
              type="text"
              icon={<ArrowLeftOutlined />}
              onClick={onBack}
              style={{ marginBottom: 16 }}
            >
              목록으로
            </Button>
            <Space>
              <Button type="primary" icon={<EditOutlined />} onClick={onEdit}>
                수정
              </Button>
              <Button danger icon={<DeleteOutlined />} onClick={onDelete}>
                삭제
              </Button>
            </Space>
          </div>

          <div>
            <Title level={2} style={{ marginBottom: 16 }}>
              {boardData.title}
            </Title>
            <Space>
              <Avatar
                size={48}
                src={boardData.writer?.avatar || undefined}
                alt={boardData.writer?.name || 'User'}
              >
                {!boardData.writer?.avatar && boardData.writer?.name?.charAt(0)?.toUpperCase()}
              </Avatar>
              <div>
                <AuthorName>{boardData.writer?.name || 'Unknown User'}</AuthorName>
                <TimeInfo>
                  <ClockCircleOutlined style={{ marginRight: 4 }} />
                  {formatDate(boardData.createdDate)}
                </TimeInfo>
              </div>
            </Space>
          </div>
        </Space>
      </HeaderSection>

      <Divider />

      {/* Content Section */}
      <ContentSection>
        <Paragraph style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: 24 }}>
          {boardData.content}
        </Paragraph>
      </ContentSection>

      <Divider />

      {/* Footer Section */}
      <FooterSection>
        <LeftSection>
          <Space direction="vertical" size="small" style={{ width: '100%' }}>
            <div>
              <Text strong style={{ marginRight: 8 }}>
                Categories:
              </Text>
              <Space size="small">
                {(boardData.categories || ['카테고리1', '카테고리2']).map((category) => (
                  <Tag key={category} color="blue">
                    {category}
                  </Tag>
                ))}
              </Space>
            </div>
            <div>
              <Text strong style={{ marginRight: 8 }}>
                Tags:
              </Text>
              <Space size="small">
                {(boardData.tags || ['태그1', '태그2']).map((tag) => (
                  <Tag key={tag} color="default">
                    #{tag}
                  </Tag>
                ))}
              </Space>
            </div>
          </Space>
        </LeftSection>

        <RightSection>
          <Space size="large">
            <StatItem>
              <EyeOutlined />
              <Text type="secondary">{boardData.metrics.viewCount}</Text>
            </StatItem>
            <StatItem>
              <HeartOutlined />
              <Text type="secondary">{boardData.metrics.likeCount}</Text>
            </StatItem>
            <StatItem>
              <MessageOutlined />
              <Text type="secondary">{boardData.metrics.commentCount}</Text>
            </StatItem>
          </Space>
        </RightSection>
      </FooterSection>
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

const HeaderSection = styled.div`
  margin-bottom: 16px;
`;

const AuthorName = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #262626;
`;

const TimeInfo = styled.div`
  font-size: 12px;
  color: #8c8c8c;
  display: flex;
  align-items: center;
`;

const ContentSection = styled.div`
  margin-bottom: 16px;
`;

const FooterSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 12px;
`;

const LeftSection = styled.div`
  flex: 1;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
`;

export default BoardDetailCard;
