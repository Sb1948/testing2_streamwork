/// <reference types="vite/client" />
interface ImportMetaEnv{
    readonly VITE_API_HOST_URL: string,
    readonly VITE_STATIC_HOST_URL: string
    readonly VITE_APP_TITLE: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
  }