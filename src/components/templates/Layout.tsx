import { useLocation } from 'react-router-dom';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  // Header를 숨길 페이지들의 경로
  const hideHeaderPaths = ['/join', '/login', '/boards/new', '/change-password'];
  const shouldHideHeader = hideHeaderPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideHeader && <Header />}
      <div>{children}</div>
    </>
  );
};

export default Layout;
