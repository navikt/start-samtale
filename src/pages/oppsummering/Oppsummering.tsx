import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import queryString from "query-string"
import { logSkjemaFullført } from "../../components/util/amplitude-utils"
import { Alert, BodyLong, Button, Heading, Link } from "@navikt/ds-react"

export const PAGE_ID = "oppsummering"

function Oppsummering() {
  const location = useLocation()
  const parsed = queryString.parse(location.search)
  const navigate = useNavigate()

  const dialogIdLink = parsed.dialogId ? `/${parsed.dialogId}` : ""
  const href = `${import.meta.env.BASE_URL}/arbeidsrettet-dialog${dialogIdLink}`
  logSkjemaFullført()

  return (
    <div className="space-y-8">
      <Heading level="2" size="medium">
        Takk for tilbakemelding
      </Heading>
      <Alert variant="success">
        <BodyLong>
          Svarene er&nbsp;
          <Link href={`${href}`}>
            delt med veilederen din. Du kan lese svaret ditt der.
          </Link>
          &nbsp;
        </BodyLong>
        <BodyLong className="pt-2">
          Veilederen vil kontakte deg i løpet av noen dager.
        </BodyLong>
      </Alert>
      <Button
        variant="secondary"
        onClick={() => {
          navigate(`${import.meta.env.BASE_URL}minside`)
        }}
      >
        Jeg er ferdig
      </Button>
    </div>
  )
}

export default Oppsummering
