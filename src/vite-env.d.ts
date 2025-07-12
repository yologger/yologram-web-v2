/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_ENV: string;
  readonly VITE_APP_API: string;
  readonly VITE_APP_USER_AUTH_TOKEN_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
