import styled from '@emotion/styled';
import BoardItem from '../components/organisms/BoardItem';

export default function HomePage() {
  const samplePost = {
    author: {
      name: '김철수',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kim',
    },
    content:
      '안녕하세요! 오늘은 정말 좋은 날씨네요. 산책하기 딱 좋은 날씨입니다. 이런 날에는 커피 한 잔과 함께 책을 읽거나, 친구들과 만나서 이야기 나누는 것도 좋을 것 같아요. 여러분은 이런 날씨에 무엇을 하시나요?',
    createdAt: '약 2시간 전',
    categories: ['일상', '날씨'],
    tags: ['산책', '커피', '독서'],
    stats: {
      views: 128,
      likes: 24,
      comments: 8,
    },
  };

  return (
    <Container>
      <BoardItem {...samplePost} />
    </Container>
  );
}

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
`;
