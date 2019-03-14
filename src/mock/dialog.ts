interface OpprettDialogType {
    overskrift: string;
    tekst: string;
}

export function opprettDialog(update: OpprettDialogType) {
    const dialogId = 1;
    return {
        dialogId: dialogId,
        overskrift: update.overskrift,
        tekst: update.tekst,
        sendt: new Date(),
    };
}
