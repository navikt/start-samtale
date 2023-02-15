import { useEffect, useState } from 'react'
import { OppfolgingData } from './api/dataTypes'
import { getOppfolging } from './api/api'

export const useOppfolging = () => {
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
  return { lasterOppfolging: laster, oppfolging }
}

function erProd() {
  //trengs da ingen av brukerne er registrert i krr i testmiljø
  return import.meta.env.PROD
}
export function invalidOppfolging(oppfolging: OppfolgingData | undefined) {
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
