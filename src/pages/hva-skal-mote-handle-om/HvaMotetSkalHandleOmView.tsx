import React, { useState } from 'react'
import { Button, GuidePanel, Textarea, TextField } from '@navikt/ds-react'
import { useNavigate } from 'react-router-dom'
import LenkeKnapp from '../../components/LenkeKnapp'

interface Props {
  loading: boolean
  onSubmit: (temaSvar?: string, tidspunktSvar?: string) => void
}

const initTextState: string = ''
const maksLengde = 400

export const SPORSMAL_TEMA = 'Hva ønsker du å snakke om?'
export const SPORSMAL_TIDSPUNKT = 'Er det tidspunkt som ikke passer?'

const HvaMotetSkalHandleOmView = (props: Props) => {
  const [temaSvar, setTemaSvar] = useState(initTextState)
  const [tidspunktSvar, setTidspunktSvar] = useState(initTextState)

  const navigate = useNavigate()

  return (
    <div className="space-y-8">
      <GuidePanel>
        I samtalen ønsker veilederen å bli bedre kjent med situasjonen din, og å
        snakke om jobbmulighetene dine.
      </GuidePanel>
      <Textarea
        label={`${SPORSMAL_TEMA} (valgfritt)`}
        description="Skriv gjerne noen stikkord til samtalen"
        disabled={props.loading}
        maxLength={maksLengde}
        value={temaSvar}
        onChange={(e) => setTemaSvar(e.target.value)}
      />
      <TextField
        label={`${SPORSMAL_TIDSPUNKT} (valgfritt)`}
        description="Vi vil prøve å ta hensyn til dine ønsker"
        disabled={props.loading}
        value={tidspunktSvar}
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
            props.onSubmit(temaSvar, tidspunktSvar)
          }}
        >
          Send
        </Button>
      </div>
      <LenkeKnapp href={import.meta.env.VITE_MIN_SIDE_URL}>Avbryt</LenkeKnapp>
    </div>
  )
}

export default HvaMotetSkalHandleOmView
