import {DialogData, NyDialogMeldingData} from "../components/api/dataTypes";

export function opprettDialog(update: NyDialogMeldingData): DialogData {
    const dialogId = '1';
    return {
        id: dialogId,
        overskrift: update.overskrift || '',
        henvendelser: [
            {
                tekst: update.tekst
            }
        ],
    };
}
