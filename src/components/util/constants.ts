const SKJEMANAVN = 'start-samtale-skjema';
const SKJEMAID = '31415926';

export const SkjemaProps = {
    skjemanavn: SKJEMANAVN,
    skjemaId: SKJEMAID,
};

export type LovligEvent = "skjema startet" | "skjema fullf\u00F8rt";

export const Eventnavn:{[key: string]: LovligEvent } = {
    SKJEMA_STARTET: "skjema startet",
    SKJEMA_FULLFORT: "skjema fullf\u00F8rt"
}