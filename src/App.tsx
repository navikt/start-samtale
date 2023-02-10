import React from 'react'
import '@navikt/ds-css'
import './index.css'
import Tittel from './components/banner/Tittel'
import Sporsmal from './pages/Sporsmal'
import { logSkjemaStartet } from './components/util/amplitude-utils'

function App() {
  logSkjemaStartet()
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-xl">
        <Tittel />
        <Sporsmal />
      </div>
    </div>
  )
}

export default App
