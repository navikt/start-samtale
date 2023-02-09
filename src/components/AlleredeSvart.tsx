import React from "react"
import { Alert } from "@navikt/ds-react"

interface Props {
  visible: boolean
  className?: string
}

const AlleredeSvart = (props: Props) =>
  true ? (
    <Alert variant="info" className={props.className || undefined}>
      Du har allerede sendt et svar. Du kan gjerne svare igjen hvis du ønsker
      det.
    </Alert>
  ) : null

export default AlleredeSvart
