import { Button } from '@navikt/ds-react'
import React from 'react'

export const AvbrytButton = () => {
  return (
    <Button
      variant="tertiary"
      onClick={() => {
        window.location.href = `${import.meta.env.BASE_URL}minside`
      }}
    >
      Avbryt
    </Button>
  )
}

export default AvbrytButton
