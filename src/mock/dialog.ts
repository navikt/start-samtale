import {DialogData, NyDialogMeldingData} from "../components/api/dataTypes";
import {parseDialogId} from "../components/util/parse";

const dialogData = {
    id: parseDialogId() || '123',
    overskrift: 'Overskrift',
    henvendelser: [
        {
            tekst: "First message"
        }
    ],
};

export function opprettDialog(update: NyDialogMeldingData): DialogData {
    if (update.dialogId === dialogData.id) {
        dialogData.henvendelser.push({tekst: update.tekst});
        console.log(dialogData);
        return dialogData;
    } else {
        return {...dialogData, henvendelser: [{tekst: update.tekst}]}
    }

}
