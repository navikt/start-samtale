import { Button } from '@navikt/ds-react'
import React from 'react'

interface Props {
  href: string
  variant?: 'tertiary' | 'secondary'
  children?: React.ReactNode
}

const LenkeKnapp = ({ href, variant, children }: Props) => {
  return (
    <a className="flex" href={`${import.meta.env.BASE_URL}${href}`}>
      <Button variant={variant || 'tertiary'}>{children}</Button>
    </a>
  )
}

export default LenkeKnapp
