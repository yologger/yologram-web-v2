import { Spin } from 'antd';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from './hooks/useAuth.hook';
import ButtonsPage from './pages/__temp__/__antd__/Buttons.page';
import ModalPage from './pages/__temp__/__antd__/Modal.page';
import NotificationPage from './pages/__temp__/__antd__/Notification.page';
import ToastPage from './pages/__temp__/__antd__/Toast.page';
import ErrorBoundaryPage from './pages/__temp__/__test__/ErrorBoundary.page';
import TestPage from './pages/__temp__/__test__/Test.page';
import BoardDetailPage from './pages/board/BoardDetail.page';
import BoardEditPage from './pages/board/BoardEdit.page';
import BoardNewPage from './pages/board/BoardNew.page';
import HomePage from './pages/Home.page';
import JoinPage from './pages/Join.page';
import LoginPage from './pages/Login.page';
import NotFoundPage from './pages/NotFound.page';
import ChangePasswordPage from './pages/settings/ChangePassword.page';
import SettingsPage from './pages/settings/Settings.page';

export default function Router() {
  const { isAuthInitialized } = useAuth();

  // 인증 초기화가 완료될 때까지 로딩 표시
  if (!isAuthInitialized) return <Spin size="large" tip="인증 정보 확인 중..." />;

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
