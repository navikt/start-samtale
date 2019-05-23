import { DialogData, NyDialogMeldingData } from '../components/api/dataTypes';

const dialogData: DialogData = {
    id: '1234',
    overskrift: '',
    henvendelser: [],
};

export function opprettDialog(update: NyDialogMeldingData): DialogData {
    if (update.dialogId !== dialogData.id) {
        dialogData.id = `${Math.floor(Math.random() * 100000)}`;
        dialogData.overskrift = update.overskrift!;
        dialogData.henvendelser = [{tekst: update.tekst}];
        return dialogData;
    } else {
        dialogData.henvendelser.push({tekst: update.tekst});
    }

    return dialogData;

}
