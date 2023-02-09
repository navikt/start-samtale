import React, { useEffect, useState } from "react"
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom"
import OnsketMoteFormSporsmal from "./onsket-moteform/OnsketMoteFormSporsmal"
import HvaMotetSkalHandleOmSporsmal, {
  PAGE_ID as HVA_PAGE_ID,
} from "./hva-skal-mote-handle-om/HvaMotetSkalHandleOmSporsmal"
import DinSituasjonSporsmal, {
  PAGE_ID as SITUASJON_PAGE_ID,
} from "./din-situasjon/DinSituasjonSporsmal"
import Oppsummering, {
  PAGE_ID as OPPSUMMERING_PAGE_ID,
} from "./oppsummering/Oppsummering"
import { getOppfolging } from "../components/api/api"
import { OppfolgingData } from "../components/api/dataTypes"
import { Alert, Loader } from "@navikt/ds-react"

function erProd() {
  //trengs da ingen av brukerne er registrert i krr i testmiljø
  return (
    window.location.hostname === "www.nav.no" ||
    window.location.hostname === "app.adeo.no"
  )
}

function invalidOppfolging(oppfolging: OppfolgingData | undefined) {
  if (!oppfolging) {
    return true
  }

  return (
    !oppfolging.underOppfolging ||
    (!oppfolging.kanVarsles && erProd()) ||
    oppfolging.manuell ||
    oppfolging.reservasjonKRR
  )
}

function StatusAdvarsel() {
  return <Alert variant="warning">Du har ikke tilgang til denne siden.</Alert>
}

function Router(props: { basename: string; children?: React.ReactNode }) {
  if (import.meta.env.USE_HASH_ROUTER === "true") {
    return <HashRouter>{props.children}</HashRouter>
  }
  return (
    <BrowserRouter basename={props.basename}>{props.children}</BrowserRouter>
  )
}

function Sporsmal() {
  const basename = import.meta.env.BASE_URL
  const [laster, setLaster] = useState(true)
  const [oppfolging, setOppfolging] = useState<undefined | OppfolgingData>()
  useEffect(() => {
    getOppfolging().then((data) => {
      setOppfolging(data)
      setLaster(false)
    })
  }, [setOppfolging, setLaster])

  if (laster) {
    return <Loader size="xlarge" />
  }

  if (invalidOppfolging(oppfolging)) {
    return <StatusAdvarsel />
  }

  return (
    <>
      <Router basename={basename}>
        <Routes>
          <Route path="/" element={<OnsketMoteFormSporsmal />} />
          <Route
            path={`/${HVA_PAGE_ID}`}
            element={<HvaMotetSkalHandleOmSporsmal />}
          />
          {/*
          <Route
            path={`/${NAR_PAGE_ID}`}
            element={<NarPasserMotetSporsmal />}
          />*/}
          <Route
            path={`/${SITUASJON_PAGE_ID}`}
            element={<DinSituasjonSporsmal />}
          />
          <Route path={`/${OPPSUMMERING_PAGE_ID}`} element={<Oppsummering />} />
          <Route path="/minside" element={<OnsketMoteFormSporsmal />} />
        </Routes>
      </Router>
    </>
  )
}

export default Sporsmal
