import amplitude from "amplitude-js";
import {SkjemaProps} from "./constants";

export const initAmplitude = (): void => {
    amplitude.getInstance().init('default', '', {
        apiEndpoint: 'amplitude.nav.no/collect-auto',
        saveEvents: false,
        includeUtm: true,
        includeReferrer: true,
        platform: window.location.toString(),
    });

    console.log("initierte amplitude");
};

const log = (eventNavn: string): void => {
    setTimeout(() => {
        try {
            amplitude.getInstance().logEvent(eventNavn, SkjemaProps);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error);
        }
    });
}

export const logSkjemaStartet = (): void => log("skjema startet");
export const logSkjemaFullført = (): void => log("skjema fullf\u00F8rt");