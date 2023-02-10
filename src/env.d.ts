interface ImportMetaEnv {
  readonly MODE: string
  readonly BASE_URL: string
  readonly DEV: boolean
  readonly PROD: boolean
  readonly SSR: boolean
  readonly VITE_USE_HASH_ROUTER: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
