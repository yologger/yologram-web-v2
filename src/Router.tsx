import { Route, Routes } from 'react-router-dom';
import AntdPage from './pages/AntdPage';
import BoardDetailPage from './pages/board/BoardDetailPage';
import BoardEditPage from './pages/board/BoardEditPage';
import BoardNewPage from './pages/board/BoardNewPage';
import HomePage from './pages/HomePage';
import JoinPage from './pages/JoinPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import SettingsPage from './pages/Settings';
import TestPage from './pages/TestPage';

export default function Router() {
  console.log('Router component rendered');
  console.log('Current location:', window.location.pathname);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/boards/new" element={<BoardNewPage />} />
      <Route path="/boards/:id/edit" element={<BoardEditPage />} />
      <Route path="/boards/:id" element={<BoardDetailPage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/antd" element={<AntdPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
