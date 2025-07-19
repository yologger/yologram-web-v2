import { Global } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider } from 'antd';
import koKR from 'antd/locale/ko_KR';
import Layout from './components/common/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import Router from './Router';
import { global } from './styles/global';
import { reset } from './styles/reset';

// QueryClient 인스턴스 생성 (react-query useQuery 사용 시 필요)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // 실패 시 1번만 재시도
      refetchOnWindowFocus: false, // 창 포커스 시 자동 재요청 비활성화
      staleTime: 5 * 60 * 1000, // 5분 동안 데이터를 캐시에서 사용
    },
  },
});

export default function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider locale={koKR}>
          <Global styles={reset} />
          <Global styles={global} />
          <Layout>
            <Router />
          </Layout>
        </ConfigProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
