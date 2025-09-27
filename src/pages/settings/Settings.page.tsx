import styled from '@emotion/styled';
import { Tabs } from 'antd';
import MyBoardListPage from './MyBoardList.page';
import EditProfilePage from './MyProfile.page';

const SettingsPage = () => {
  const tabItems = [
    {
      key: 'profile',
      label: '내 프로필',
      children: <EditProfilePage />,
    },
    {
      key: 'boards',
      label: '내 게시글',
      children: <MyBoardListPage />,
    },
  ];

  return (
    <Container>
      <StyledTabs
        type="line"
        defaultActiveKey="profile"
        items={tabItems}
        size="large"
        centered
        animated
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 0;
    align-items: flex-start;
  }
`;

const StyledTabs = styled(Tabs)`
  width: 100%;
  .ant-tabs-nav {
    margin-bottom: 0px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export default SettingsPage;
