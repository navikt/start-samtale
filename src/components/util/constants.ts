const SKJEMANAVN = 'start-samtale-skjema'
const SKJEMAID = '31415926'

export const SkjemaProps = {
  skjemanavn: SKJEMANAVN,
  skjemaId: SKJEMAID,
}

export type LovligEvent =
  | 'skjema startet'
  | 'skjema steg fullført'
  | 'skjema fullf\u00F8rt'

export const Eventnavn: { [key: string]: LovligEvent } = {
  SKJEMA_STARTET: 'skjema startet',
  SKJEMASTEG_FULLFORT: 'skjema steg fullført',
  SKJEMA_FULLFORT: 'skjema fullf\u00F8rt',
}
