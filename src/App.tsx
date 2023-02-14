import React from 'react'
import '@navikt/ds-css'
import './index.css'
import Tittel from './components/banner/Tittel'
import Sporsmal from './pages/Sporsmal'
import { logSkjemaStartet } from './components/util/amplitude-utils'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import HvaMotetSkalHandleOmSporsmal, {
  PAGE_ID as HVA_PAGE_ID,
} from './pages/hva-skal-mote-handle-om/HvaMotetSkalHandleOmSporsmal'
import DinSituasjonSporsmal, {
  PAGE_ID as SITUASJON_PAGE_ID,
} from './pages/din-situasjon/DinSituasjonSporsmal'
import Oppsummering, {
  PAGE_ID as OPPSUMMERING_PAGE_ID,
} from './pages/oppsummering/Oppsummering'

function Router(props: { basename: string; children?: React.ReactNode }) {
  if (import.meta.env.VITE_USE_HASH_ROUTER) {
    return <HashRouter>{props.children}</HashRouter>
  }
  return (
    <BrowserRouter basename={props.basename}>{props.children}</BrowserRouter>
  )
}

const stripTrailingSlash = (url: string) => {
  return url.endsWith('/') ? url.slice(0, -1) : url
}

function App() {
  const basename = stripTrailingSlash(import.meta.env.BASE_URL)

  logSkjemaStartet()
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-xl">
        <Tittel />
        <Router basename={basename}>
          <Routes>
            <Route path="/" element={<Sporsmal />} />
            <Route
              path={`/${HVA_PAGE_ID}`}
              element={<HvaMotetSkalHandleOmSporsmal />}
            />
            <Route
              path={`/${SITUASJON_PAGE_ID}`}
              element={<DinSituasjonSporsmal />}
            />
            <Route
              path={`/${OPPSUMMERING_PAGE_ID}`}
              element={<Oppsummering />}
            />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App
