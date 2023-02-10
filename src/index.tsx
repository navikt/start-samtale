import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createRoot } from 'react-dom/client'

if (import.meta.env.DEV) {
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
