import React, { useState } from "react"
import AlleredeSvart from "../../components/AlleredeSvart"
import { PAGE_ID } from "./HvaMotetSkalHandleOmSporsmal"
import { feilmelding } from "../../components/util/text-area-utils"
import { Button, GuidePanel, Textarea, TextField } from "@navikt/ds-react"
import AvbrytButton from "../../components/AvbrytButton"

interface Props {
  loading: boolean
  onSubmit: (arg: string) => void
  answered: boolean
}

const initTextState: string = ""
const maksLengde = 500

export const SPORSMAL = "Hva ønsker du å snakke om?"
const customFeil = "Du kan ikke sende en tom melding."

function HvaMotetSkalHandleOmView(props: Props) {
  const [temaSvar, setTemaSvar] = useState(initTextState)
  const [tidspunktSvar, setTidspunktSvar] = useState(initTextState)
  const [feilState, setFeil] = useState(false)

  const feil = feilmelding(feilState, maksLengde, temaSvar, customFeil)

  return (
    <div className="space-y-8">
      <GuidePanel>
        I samtalen ønsker veilederen å bli bedre kjent med situasjonen din, og å
        snakke om jobbmulighetene dine.
      </GuidePanel>
      <AlleredeSvart visible={props.answered} />
      <Textarea
        label="Hva ønsker du å snakke om? (valgfritt)"
        description="Skriv gjerne noen stikkord til samtalen"
        disabled={props.loading}
        maxLength={maksLengde}
        error={feil}
        value={temaSvar}
        onChange={(e) => setTemaSvar(e.target.value)}
      />
      <TextField
        label="Er det tidspunkt som ikke passer? (valgfritt)"
        description="Vi vil prøve å ta hensyn til dine ønsker"
        disabled={props.loading}
        value={tidspunktSvar}
        error={feil}
        onChange={(e) => setTidspunktSvar((e.target as HTMLInputElement).value)}
      />
      <div>
        <Button
          className="mr-4"
          disabled={props.loading}
          variant="secondary"
          onClick={() => props.onSubmit("")}
        >
          Hopp over
        </Button>
        <Button
          loading={props.loading}
          disabled={props.loading}
          onClick={() => {
            if (temaSvar === "" || temaSvar.length >= maksLengde) {
              setFeil(true)
            } else {
              setFeil(false)
              props.onSubmit(temaSvar)
            }
          }}
        >
          Send
        </Button>
      </div>
      <AvbrytButton pageId={PAGE_ID} />
    </div>
  )
}

export default HvaMotetSkalHandleOmView
