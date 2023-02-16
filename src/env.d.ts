interface ImportMetaEnv {
  readonly MODE: string
  readonly BASE_URL: string
  readonly DEV: boolean
  readonly PROD: boolean
  readonly SSR: boolean
  readonly VITE_API_BASE_URL: string
  readonly VITE_ROUTER_BASENAME: string
  readonly VITE_USE_HASH_ROUTER: boolean
  readonly VITE_MIN_SIDE_URL: string
  readonly VITE_DIALOG_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
