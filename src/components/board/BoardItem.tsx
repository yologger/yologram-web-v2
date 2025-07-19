import {
  ClockCircleOutlined,
  EyeOutlined,
  HeartOutlined,
  MessageOutlined,
} from '@ant-design/icons';
import styled from '@emotion/styled';
import { Avatar, Card, Space, Tag, Typography } from 'antd';
import Title from 'antd/es/typography/Title';
import type { Board } from '../../models/board.model';

const { Text, Paragraph } = Typography;

interface IProps {
  board: Board;
}

export default function BoardItem({ board }: IProps) {
  return (
    <StyledCard>
      {/* Header Section */}
      <HeaderSection>
        <Space>
          <Avatar size={20} src={board.author.avatar} />
          <AuthorName>{board.author.name}</AuthorName>
          <TimeInfo>
            <ClockCircleOutlined style={{ marginRight: 4 }} />
            {board.createdAt}
          </TimeInfo>
        </Space>
      </HeaderSection>

      {/* Content Section */}
      <ContentSection>
        <Title level={4} ellipsis={{ rows: 1 }}>
          {board.title}
        </Title>
        <StyledParagraph ellipsis={{ rows: 2, expandable: true, symbol: '더보기' }}>
          {board.content}
        </StyledParagraph>
      </ContentSection>

      {/* Footer Section */}
      <FooterSection>
        <LeftSection>
          <Space wrap>
            {board.categories.map((category) => (
              <Tag key={category} color="blue">
                {category}
              </Tag>
            ))}
            {board.tags.map((tag) => (
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
              <Text type="secondary">{board.stats.views}</Text>
            </StatItem>
            <StatItem>
              <HeartOutlined />
              <Text type="secondary">{board.stats.likes}</Text>
            </StatItem>
            <StatItem>
              <MessageOutlined />
              <Text type="secondary">{board.stats.comments}</Text>
            </StatItem>
          </Space>
        </RightSection>
      </FooterSection>
    </StyledCard>
  );
}

const StyledCard = styled(Card)`
  width: 100%;
  margin-bottom: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

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

const StyledParagraph = styled(Paragraph)`
  color: #8c8c8c;
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
