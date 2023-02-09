import React, { useState } from "react"
import AlleredeSvart from "../../components/AlleredeSvart"
import { PAGE_ID } from "./NarPasserMotetSporsmal"
import { Button, Label, Link, TextField } from "@navikt/ds-react"
import AvbrytButton from "../../components/AvbrytButton"

export const SPORSMAL = "Er det noe tidspunkt som ikke passer?"

interface Props {
  loading: boolean
  onSubmit: (arg: string) => void
  answered: boolean
}

const inputState: string = ""

function NarPasserMotetView(props: Props) {
  const [value, setValue] = useState(inputState)
  const [feilState, setFeil] = useState(false)

  const feil = feilState ? "Du kan ikke sende en tom melding" : undefined

  return (
    <>
      <Label>
        Hvis det er tidspunkt som ikke passer, kan du skrive det under. Vi
        prøver å ta hensyn til det.
      </Label>
      <AlleredeSvart visible={props.answered} />
      <TextField
        label="Er det noe tidspunkt som ikke passer?"
        disabled={props.loading}
        value={value}
        placeholder="Det passer ikke på..."
        error={feil}
        onChange={(e) => setValue((e.target as HTMLInputElement).value)}
      />
      <div>
        <Button
          variant="secondary"
          className="mr-4"
          disabled={props.loading}
          onClick={() => props.onSubmit("")}
        >
          Hopp over
        </Button>
        <Button
          loading={props.loading}
          disabled={props.loading}
          onClick={() => {
            if (value === "") {
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
      <AvbrytButton pageId={PAGE_ID} />
    </>
  )
}

export default NarPasserMotetView
