import { Route, Routes } from 'react-router-dom';
import AntdPage from './pages/AntdPage';
import BoardNewPage from './pages/BoardNewPage';
import HomePage from './pages/HomePage';
import JoinPage from './pages/JoinPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import SettingsPage from './pages/Settings';
import TestPage from './pages/TestPage';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/board/new" element={<BoardNewPage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/antd" element={<AntdPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
