import React from 'react'
import App from './App'
import { createRoot } from 'react-dom/client'

const useMock = import.meta.env.DEV || import.meta.env.VITE_USE_HASH_ROUTER

if (useMock) {
  import('./mock')
    .then(({ default: startWorker }) => startWorker())
    .then(() => createRoot(document.getElementById('root')!!).render(<App />))
} else {
  createRoot(document.getElementById('root')!!).render(<App />)
}

if (import.meta.env.PROD) {
  import('./components/util/amplitude-utils').then((amplitude) =>
    amplitude.initAmplitude()
  )
}
