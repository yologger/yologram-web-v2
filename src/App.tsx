import { Global } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider } from 'antd';
import koKR from 'antd/locale/ko_KR';
import Layout from './components/common/Layout';
import Router from './Router';
import { global } from './styles/global';
import { reset } from './styles/reset';

// QueryClient 인스턴스 생성
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5분
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider locale={koKR}>
        <Global styles={reset} />
        <Global styles={global} />
        <Layout>
          <Router />
        </Layout>
      </ConfigProvider>
    </QueryClientProvider>
  );
}
