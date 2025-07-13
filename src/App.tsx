import { Global } from '@emotion/react';
import Layout from './components/layout/Layout';
import Router from './Router';
import { global } from './styles/global';
import { reset } from './styles/reset';

const App = () => {
  return (
    <>
      <Global styles={reset} />
      <Global styles={global} />
      <Layout>
        <Router />
      </Layout>
    </>
  );
};

export default App;
