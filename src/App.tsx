import '@ant-design/v5-patch-for-react-19';
import { Global } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { App as AntdApp, ConfigProvider } from 'antd';
import koKR from 'antd/locale/ko_KR';
import ErrorBoundaryModal from './components/common/ErrorBoundaryModal';
import Layout from './components/common/Layout';
import Router from './Router';
import { global } from './styles/global.style';
import { reset } from './styles/reset.style';

// QueryClient 인스턴스 생성 (react-query useQuery 사용 시 필요)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // 실패 시 1번만 재시도
      // refetchOnWindowFocus: false, // 창 포커스 시 자동 재요청 비활성화
      // staleTime: 5 * 60 * 1000, // 5분 동안 데이터를 캐시에서 사용
      onError: (error: AxiosError) => {
        console.error('Query 에러:', error);
      },
    },
    mutations: {
      retry: 1, // 실패 시 1번만 재시도
    },
  },
});

export default function App() {
  return (
    <ErrorBoundaryModal>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider locale={koKR}>
          <AntdApp>
            <Global styles={reset} />
            <Global styles={global} />
            <Layout>
              <Router />
            </Layout>
          </AntdApp>
        </ConfigProvider>
      </QueryClientProvider>
    </ErrorBoundaryModal>
  );
}
