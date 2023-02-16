import React, { useEffect, useState } from 'react'
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
import { Alert, Loader } from '@navikt/ds-react'
import { invalidOppfolging, useOppfolging } from './components/useOppfolging'
import OnsketMoteFormSporsmal from './pages/onsket-moteform/OnsketMoteFormSporsmal'

const Router = (props: { basename: string; children?: React.ReactNode }) => {
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

const App = () => {
  const basename = stripTrailingSlash(import.meta.env.BASE_URL)

  useEffect(() => {
    logSkjemaStartet()
  }, [])

  const { lasterOppfolging: laster, oppfolging } = useOppfolging()

  if (laster) {
    return (
      <div className="flex justify-center mt-20">
        <Loader size="xlarge" />
      </div>
    )
  }

  if (invalidOppfolging(oppfolging)) {
    return (
      <div className="flex items-center flex-col mt-10">
        <Alert className="max-w-xl" variant="warning">
          Du har ikke tilgang til denne siden.
        </Alert>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center mt-6">
      <div className="max-w-xl m-4">
        <Tittel />
        <Router basename={basename}>
          <Routes>
            <Route path="/" element={<OnsketMoteFormSporsmal />} />
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
