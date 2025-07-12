function App() {
  const appEnv = import.meta.env.VITE_APP_ENV;
  const appApi = import.meta.env.VITE_APP_API;
  const userAuthTokenKey = import.meta.env.VITE_APP_USER_AUTH_TOKEN_KEY;
  return (
    <>
      <div>VITE_APP_ENV: {appEnv}</div>
      <div>VITE_APP_API: {appApi}</div>
      <div>VITE_APP_USER_AUTH_TOKEN_KEY: {userAuthTokenKey}</div>
    </>
  );
}

export default App;
