interface ImportMetaEnv {
  readonly MODE: string
  readonly BASE_URL: string
  readonly USE_HASH_ROUTER: string
  readonly DEV: boolean
  readonly PROD: boolean
  readonly SSR: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
