/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_DIR: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}