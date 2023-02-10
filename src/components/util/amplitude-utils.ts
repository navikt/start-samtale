import amplitude from 'amplitude-js'
import { Eventnavn, LovligEvent, SkjemaProps } from './constants'

export const initAmplitude = (): void => {
  amplitude.getInstance().init('default', '', {
    apiEndpoint: 'amplitude.nav.no/collect-auto',
    saveEvents: false,
    includeUtm: true,
    includeReferrer: true,
    platform: window.location.toString(),
  })
}

interface LogProps {
  skjemanavn: string
  skjemaId: string
  steg?: number
}

const log = (eventNavn: LovligEvent, skjemaProps: LogProps): void => {
  setTimeout(() => {
    try {
      amplitude.getInstance().logEvent(eventNavn, skjemaProps)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`Kunne ikke logge ${eventNavn} til Amplitude: `, error)
    }
  })
}

export const logSkjemaStartet = (): void =>
  log(Eventnavn.SKJEMA_STARTET, SkjemaProps)

export const logSkjemastegFullfoert = (steg: number): void =>
  log(Eventnavn.SKJEMASTEG_FULLFORT, { ...SkjemaProps, steg })

export const logSkjemaFullfoert = (): void =>
  log(Eventnavn.SKJEMA_FULLFORT, SkjemaProps)
