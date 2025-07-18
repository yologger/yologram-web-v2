import { Global } from '@emotion/react';
import { ConfigProvider } from 'antd';
import koKR from 'antd/locale/ko_KR';
import Layout from './components/templates/Layout';
import Router from './Router';
import { global } from './styles/global';
import { reset } from './styles/reset';

export default function App() {
  return (
    <ConfigProvider locale={koKR}>
      <Global styles={reset} />
      <Global styles={global} />
      <Layout>
        <Router />
      </Layout>
    </ConfigProvider>
  );
}
