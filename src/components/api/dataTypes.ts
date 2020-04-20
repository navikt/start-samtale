export interface NyDialogMeldingData {
    tekst: string;
    dialogId?: string;
    overskrift?: string;
}

export interface DialogMeldingData {
    tekst: string; // there is more, but we don't care about it for now
}

export interface DialogData {
    id: string;
    overskrift: string;
    henvendelser: DialogMeldingData[];
}

export interface OppfolgingData {
    reservasjonKRR: boolean;
    kanVarsles: boolean;
    manuell: boolean;
    underOppfolging: boolean;
}