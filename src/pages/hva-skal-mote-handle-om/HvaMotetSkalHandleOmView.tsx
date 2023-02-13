import React, { useState } from 'react'
import AlleredeSvart from '../../components/AlleredeSvart'
import { feilmelding } from '../../components/util/text-area-utils'
import { Button, GuidePanel, Textarea, TextField } from '@navikt/ds-react'
import AvbrytButton from '../../components/AvbrytButton'
import { useNavigate } from 'react-router-dom'

interface Props {
  loading: boolean
  onSubmit: (temaSvar?: string, tidspunktSvar?: string) => void
  answered: boolean
}

const initTextState: string = ''
const maksLengde = 400

export const SPORSMAL_TEMA = 'Hva ønsker du å snakke om?'
export const SPORSMAL_TIDSPUNKT = 'Er det tidspunkt som ikke passer?'

const customFeil = 'Du kan ikke sende en tom melding.'

function HvaMotetSkalHandleOmView(props: Props) {
  const [temaSvar, setTemaSvar] = useState(initTextState)
  const [tidspunktSvar, setTidspunktSvar] = useState(initTextState)
  const [feilState, setFeil] = useState(false)

  const navigate = useNavigate()

  const feil = feilmelding(feilState, maksLengde, temaSvar, customFeil)

  return (
    <div className="space-y-8">
      <GuidePanel>
        I samtalen ønsker veilederen å bli bedre kjent med situasjonen din, og å
        snakke om jobbmulighetene dine.
      </GuidePanel>
      <AlleredeSvart visible={props.answered} />
      <Textarea
        label={`${SPORSMAL_TEMA} (valgfritt)`}
        description="Skriv gjerne noen stikkord til samtalen"
        disabled={props.loading}
        maxLength={maksLengde}
        error={feil}
        value={temaSvar}
        onChange={(e) => setTemaSvar(e.target.value)}
      />
      <TextField
        label={`${SPORSMAL_TIDSPUNKT} (valgfritt)`}
        description="Vi vil prøve å ta hensyn til dine ønsker"
        disabled={props.loading}
        value={tidspunktSvar}
        error={feil}
        onChange={(e) => setTidspunktSvar((e.target as HTMLInputElement).value)}
      />
      <div className="flex">
        <Button
          variant="secondary"
          className="mr-4"
          onClick={() => {
            navigate(-1)
          }}
        >
          Forrige steg
        </Button>
        <Button
          loading={props.loading}
          disabled={props.loading}
          onClick={() => {
            if (temaSvar === '' || temaSvar.length >= maksLengde) {
              setFeil(true)
            } else {
              setFeil(false)
              props.onSubmit(temaSvar, tidspunktSvar)
            }
          }}
        >
          Send
        </Button>
      </div>
      <AvbrytButton />
    </div>
  )
}

export default HvaMotetSkalHandleOmView
