import React, { useState } from 'react'
import { feilmelding } from '../../components/util/text-area-utils'
import { Button, GuidePanel, Textarea } from '@navikt/ds-react'

import { useNavigate } from 'react-router-dom'
import LenkeKnapp from '../../components/LenkeKnapp'

const initTextState: string = ''

interface Props {
  loading: boolean
  onSubmit: (arg: string) => void
}

export const SPORSMAL_DIN_SITUASJON = 'Fortell'
const customFeil = 'Du må skrive noe for å starte en samtale'
const maksLengde = 400

const DinSituasjonView = (props: Props) => {
  const navigate = useNavigate()
  const [value, setValue] = useState(initTextState)
  const [feilState, setFeil] = useState(false)

  const feil = feilmelding(feilState, maksLengde, value, customFeil)
  return (
    <div className="space-y-8">
      <GuidePanel>
        Fortell gjerne om hva slags jobb du ønsker deg, og om hva som kan hindre
        deg i å jobbe.
      </GuidePanel>
      <Textarea
        label={'Skriv til veilederen din (obligatorisk)'}
        maxLength={maksLengde}
        value={value}
        disabled={props.loading}
        onChange={(e) => setValue(e.target.value)}
        error={feil}
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
            if (value === '' || value.length > maksLengde) {
              setFeil(true)
            } else {
              setFeil(false)
              props.onSubmit(value)
            }
          }}
        >
          Send
        </Button>
      </div>
      <LenkeKnapp href={import.meta.env.VITE_MIN_SIDE_URL}>Avbryt</LenkeKnapp>
    </div>
  )
}

export default DinSituasjonView
