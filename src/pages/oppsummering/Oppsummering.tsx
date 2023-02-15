import React from 'react'
import { useLocation } from 'react-router-dom'
import { logSkjemaFullfoert } from '../../components/util/amplitude-utils'
import { Alert, BodyLong, Heading, Link } from '@navikt/ds-react'
import LenkeKnapp from '../../components/LenkeKnapp'

export const PAGE_ID = 'oppsummering'

const Oppsummering = () => {
  const location = useLocation()

  const dialogId = location.state.dialogId

  logSkjemaFullfoert()

  return (
    <div className="space-y-8">
      <Heading level="2" size="medium">
        Takk for tilbakemelding
      </Heading>
      <Alert variant="success">
        <BodyLong>
          Svarene er delt med veilederen din i dialogen dere har sammen.
          <Link href={`${import.meta.env.VITE_DIALOG_URL}/${dialogId}`}>
            Du kan lese svaret ditt der.
          </Link>
          &nbsp;
        </BodyLong>
        <BodyLong className="pt-2">
          Veilederen vil kontakte deg i løpet av noen dager.
        </BodyLong>
      </Alert>
      <LenkeKnapp href={import.meta.env.VITE_MIN_SIDE_URL} variant="secondary">
        Jeg er ferdig
      </LenkeKnapp>
    </div>
  )
}

export default Oppsummering
