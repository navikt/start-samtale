/// <reference types="vitest" />
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [
      react(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            VITE_DEKORATOREN_URL: env.VITE_DEKORATOREN_URL,
          },
        },
      }),
    ],
    base: `https://cdn${env.PROD ? '' : '.dev'}.nav.no/dab/start-samtale/dist/`,
    server: {
      port: 3000,
    },
    test: {
      environment: 'happy-dom',
    },
  }
})
