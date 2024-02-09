/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // Add the variables you defined here.
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
