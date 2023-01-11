const APP_NAME = 'start-samtale';
const TEAM_NAME = 'team-dab';
const SKJEMANAVN = 'start-samtale-skjema';
const SKJEMAID = '31415926';

export const SkjemaProps = {
    app: APP_NAME,
    team: TEAM_NAME,
    skjemanavn: SKJEMANAVN,
    skjemaId: SKJEMAID,
};

export type LovligEvent = "skjema startet" | "skjema fullf\u00F8rt";

export const Eventnavn:{[key: string]: LovligEvent } = {
    STARTET: "skjema startet",
    FULLFORT: "skjema fullf\u00F8rt"
}