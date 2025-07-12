import { Counter } from './components/counter';

function App() {
  const appEnv = import.meta.env.VITE_APP_ENV;
  const appApi = import.meta.env.VITE_APP_API;
  const userAuthTokenKey = import.meta.env.VITE_APP_USER_AUTH_TOKEN_KEY;

  return (
    <>
      <div style={{ padding: '10px', backgroundColor: '#f0f0f0', marginBottom: '20px' }}>
        <h3>Environment Variables:</h3>
        <div>VITE_APP_ENV: {appEnv}</div>
        <div>VITE_APP_API: {appApi}</div>
        <div>VITE_APP_USER_AUTH_TOKEN_KEY: {userAuthTokenKey}</div>
      </div>

      <Counter />
    </>
  );
}

export default App;
