import { Button } from '@navikt/ds-react'
import React from 'react'

interface Props {
  text?: string
  variant?: 'tertiary' | 'secondary'
}

export const AvsluttKnapp = ({ text, variant }: Props) => {
  return (
    <a className="flex" href="/minside">
      <Button variant={variant || 'tertiary'}>{text || 'Avbryt'}</Button>
    </a>
  )
}

export default AvsluttKnapp
