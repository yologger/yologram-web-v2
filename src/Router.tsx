import { Route, Routes } from 'react-router-dom';
import ButtonsPage from './pages/antd/ButtonsPage';
import ModalPage from './pages/antd/ModalPage';
import BoardDetailPage from './pages/board/BoardDetailPage';
import BoardEditPage from './pages/board/BoardEditPage';
import BoardNewPage from './pages/board/BoardNewPage';
import HomePage from './pages/HomePage';
import JoinPage from './pages/JoinPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import ChangePasswordPage from './pages/settings/ChangePasswordPage';
import SettingsPage from './pages/settings/Settings';
import TestPage from './pages/test/TestPage';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/change-password" element={<ChangePasswordPage />} />
      <Route path="/boards/new" element={<BoardNewPage />} />
      <Route path="/boards/:id/edit" element={<BoardEditPage />} />
      <Route path="/boards/:id" element={<BoardDetailPage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/antd/buttons" element={<ButtonsPage />} />
      <Route path="/antd/modal" element={<ModalPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
