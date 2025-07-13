import { Global } from '@emotion/react';
import Layout from './components/templates/Layout';
import Router from './Router';
import { global } from './styles/global';
import { reset } from './styles/reset';

export default function App() {
  return (
    <>
      <Global styles={reset} />
      <Global styles={global} />
      <Layout>
        <Router />
      </Layout>
    </>
  );
}
