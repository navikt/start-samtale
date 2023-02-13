import { Button } from '@navikt/ds-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const AvbrytButton = () => {
  const navigate = useNavigate()

  return (
    <Button
      variant="tertiary"
      onClick={() => {
        navigate('/minside')
      }}
    >
      Avbryt
    </Button>
  )
}

export default AvbrytButton
