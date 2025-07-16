import {
  ClockCircleOutlined,
  EyeOutlined,
  HeartOutlined,
  MessageOutlined,
} from '@ant-design/icons';
import styled from '@emotion/styled';
import { Avatar, Card, Space, Tag, Typography } from 'antd';

const { Text, Paragraph } = Typography;

interface BoardItemProps {
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  createdAt: string;
  categories: string[];
  tags: string[];
  stats: {
    views: number;
    likes: number;
    comments: number;
  };
}

export default function BoardItem({
  author,
  content,
  createdAt,
  categories,
  tags,
  stats,
}: BoardItemProps) {
  return (
    <StyledCard>
      {/* Header Section */}
      <HeaderSection>
        <Space>
          <Avatar size={40} src={author.avatar} />
          <div>
            <AuthorName>{author.name}</AuthorName>
            <TimeInfo>
              <ClockCircleOutlined style={{ marginRight: 4 }} />
              {createdAt}
            </TimeInfo>
          </div>
        </Space>
      </HeaderSection>

      {/* Content Section */}
      <ContentSection>
        <Paragraph ellipsis={{ rows: 3, expandable: true, symbol: '더보기' }}>{content}</Paragraph>
      </ContentSection>

      {/* Footer Section */}
      <FooterSection>
        <LeftSection>
          <Space wrap>
            {categories.map((category) => (
              <Tag key={category} color="blue">
                {category}
              </Tag>
            ))}
            {tags.map((tag) => (
              <Tag key={tag} color="default">
                #{tag}
              </Tag>
            ))}
          </Space>
        </LeftSection>

        <RightSection>
          <Space size="large">
            <StatItem>
              <EyeOutlined />
              <Text type="secondary">{stats.views}</Text>
            </StatItem>
            <StatItem>
              <HeartOutlined />
              <Text type="secondary">{stats.likes}</Text>
            </StatItem>
            <StatItem>
              <MessageOutlined />
              <Text type="secondary">{stats.comments}</Text>
            </StatItem>
          </Space>
        </RightSection>
      </FooterSection>
    </StyledCard>
  );
}

const StyledCard = styled(Card)`
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
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
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid #f0f0f0;
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
