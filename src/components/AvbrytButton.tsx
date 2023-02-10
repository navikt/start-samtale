import { avbrytMetrikk } from './util/frontendlogger'
import { Button } from '@navikt/ds-react'
import React from 'react'

interface Props {
  pageId: string
}
export const AvbrytButton = ({ pageId }: Props) => {
  return (
    <Button
      variant="tertiary"
      onClick={() => {
        avbrytMetrikk(pageId)
        window.location.href = `${import.meta.env.BASE_URL}minside`
      }}
    >
      Avbryt
    </Button>
  )
}

export default AvbrytButton
