import amplitude from "amplitude-js";
import {Eventnavn, LovligEvent, SkjemaProps} from "./constants";

export const initAmplitude = (): void => {
    amplitude.getInstance().init('default', '', {
        apiEndpoint: 'amplitude.nav.no/collect-auto',
        saveEvents: false,
        includeUtm: true,
        includeReferrer: true,
        platform: window.location.toString(),
    });
};

const log = (eventNavn: LovligEvent): void => {
    setTimeout(() => {
        try {
            amplitude.getInstance().logEvent(eventNavn, SkjemaProps);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error(`Kunne ikke logge ${eventNavn} til Amplitude: `, error);
        }
    });
}

export const logSkjemaStartet = (): void => log(Eventnavn.SKJEMA_STARTET);
export const logSkjemaFullført = (): void => log(Eventnavn.SKJEMA_FULLFORT);