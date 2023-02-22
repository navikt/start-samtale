import { Button, Link } from '@navikt/ds-react'
import React from 'react'

interface Props {
  href: string
  variant?: 'tertiary' | 'secondary'
  children?: React.ReactNode
}

const LenkeKnapp = ({ href, variant, children }: Props) => {
  return (
    <Button variant={variant || 'tertiary'} as="a" href={href}>
      {children}
    </Button>
  )
}

export default LenkeKnapp
