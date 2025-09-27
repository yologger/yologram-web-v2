import { Route, Routes } from 'react-router-dom';
import ButtonsPage from './pages/antd/Buttons.page';
import ModalPage from './pages/antd/Modal.page';
import NotificationPage from './pages/antd/Notification.page';
import ToastPage from './pages/antd/Toast.page';
import BoardDetailPage from './pages/board/BoardDetail.page';
import BoardEditPage from './pages/board/BoardEdit.page';
import BoardNewPage from './pages/board/BoardNew.page';
import HomePage from './pages/Home.page';
import JoinPage from './pages/Join.page';
import LoginPage from './pages/Login.page';
import NotFoundPage from './pages/NotFound.page';
import ChangePasswordPage from './pages/settings/ChangePassword.page';
import SettingsPage from './pages/settings/Settings.page';
import ErrorBoundaryPage from './pages/test/ErrorBoundary.page';
import TestPage from './pages/test/Test.page';

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
      <Route path="/test/errorboundary" element={<ErrorBoundaryPage />} />
      <Route path="/antd/buttons" element={<ButtonsPage />} />
      <Route path="/antd/modal" element={<ModalPage />} />
      <Route path="/antd/notification" element={<NotificationPage />} />
      <Route path="/antd/toast" element={<ToastPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
