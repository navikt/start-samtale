export type MoteForm = typeof MEET | typeof PHONE | typeof VIDEO | typeof WRITE

export const MEET = 'MEET'
export const PHONE = 'PHONE'
export const VIDEO = 'VIDEO'
export const WRITE = 'WRITE'

export const SPORSMAL = 'Hvor vil du starte samtalen? (obligatorisk)'

export function moteFormValue(form: MoteForm): string {
  switch (form) {
    case 'MEET':
      return 'I et møte på NAV-kontoret'
    case 'PHONE':
      return 'I en telefonsamtale'
    case 'VIDEO':
      return 'I et videomøte'
    case 'WRITE':
      return 'Jeg vil skrive her'
    default:
      return 'Ukjent'
  }
}
