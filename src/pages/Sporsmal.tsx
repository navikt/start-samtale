import React, { useEffect, useState } from 'react'
import OnsketMoteFormSporsmal from './onsket-moteform/OnsketMoteFormSporsmal'
import { getOppfolging } from '../components/api/api'
import { OppfolgingData } from '../components/api/dataTypes'
import { Alert, Loader } from '@navikt/ds-react'

function erProd() {
  //trengs da ingen av brukerne er registrert i krr i testmiljø
  return (
    window.location.hostname === 'www.nav.no' ||
    window.location.hostname === 'app.adeo.no'
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

function Sporsmal() {
  const [laster, setLaster] = useState(true)
  const [oppfolging, setOppfolging] = useState<undefined | OppfolgingData>()

  useEffect(() => {
    getOppfolging()
      .then((data) => {
        setOppfolging(data)
        setLaster(false)
      })
      .catch(() => setLaster(false))
  }, [setOppfolging, setLaster])

  if (laster) {
    return (
      <div className="flex justify-center mt-20">
        <Loader size="xlarge" />
      </div>
    )
  }

  if (invalidOppfolging(oppfolging)) {
    return <Alert variant="warning">Du har ikke tilgang til denne siden.</Alert>
  }

  return <OnsketMoteFormSporsmal />
}

export default Sporsmal
