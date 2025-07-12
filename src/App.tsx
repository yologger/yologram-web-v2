import { Button, Layout } from 'antd';
import 'antd/dist/reset.css';
import styles from './App.module.css';

const { Header } = Layout;

export default function App() {
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.title}>My App</div>
        <Button type="primary" onClick={() => alert('Clicked!')}>
          Antd Button
        </Button>
      </Header>
    </Layout>
  );
}
