import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import AntdPage from './pages/AntdPage';
import HomePage from './pages/HomePage';
import JoinPage from './pages/JoinPage';
import NotFoundPage from './pages/NotFoundPage';
import TestPage from './pages/TestPage';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/antd" element={<AntdPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
