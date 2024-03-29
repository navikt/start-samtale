import React, { useState } from 'react'
import { Button, Radio, RadioGroup } from '@navikt/ds-react'
import {
  SPORSMAL_KANAL,
  WRITE,
  MEET,
  PHONE,
  moteFormValue,
  MoteForm,
  VIDEO,
} from './moteFormUtil'
import LenkeKnapp from '../../components/LenkeKnapp'

interface Props {
  loading: boolean
  onSubmit: (arg: string) => void
}

const OnsketMoteFormView = (props: Props) => {
  const [value, setValue] = useState<string | undefined>(undefined)
  const [feilState, setFeil] = useState(false)

  const feil = feilState ? 'Du må oppgi hvor du vil starte samtalen' : undefined

  return (
    <div className="space-y-8">
      <RadioGroup
        legend={SPORSMAL_KANAL}
        onChange={(val: MoteForm) => setValue(val)}
        error={feil}
      >
        <Radio value={MEET} disabled={props.loading}>
          {moteFormValue(MEET)}
        </Radio>
        <Radio value={PHONE} disabled={props.loading}>
          {moteFormValue(PHONE)}
        </Radio>
        <Radio value={VIDEO} disabled={props.loading}>
          {moteFormValue(VIDEO)}
        </Radio>
        <Radio value={WRITE} disabled={props.loading}>
          {moteFormValue(WRITE)}
        </Radio>
      </RadioGroup>
      <div className="flex flex-col items-start space-y-8">
        <Button
          loading={props.loading}
          disabled={props.loading}
          onClick={() => {
            if (value === undefined) {
              setFeil(true)
            } else {
              setFeil(false)
              props.onSubmit(value)
            }
          }}
        >
          Neste steg
        </Button>
        <LenkeKnapp href={import.meta.env.VITE_MIN_SIDE_URL}>Avbryt</LenkeKnapp>
      </div>
    </div>
  )
}

export default OnsketMoteFormView
