import {FetchAction, FetchActionTypes} from './fetchReducer';
import {DialogData, NyDialogMeldingData} from '../components/api/dataTypes';
import {postDialog} from '../components/api/api';
import {logSkjemaFullført} from "../components/util/amplitude-utils";

interface InputData {
    spm: string;
    svar: string;
    dialogId?: string;
}

export function dispatchDialogData(inputData: InputData, dispatch: (value: FetchAction) => void): Promise<DialogData> {
    dispatch({type: FetchActionTypes.LOADING});
    const tekst = `Spørsmål fra NAV: ${inputData.spm}\n Svaret mitt: ${inputData.svar}`;
    const data: NyDialogMeldingData = {dialogId: inputData.dialogId, tekst: tekst, overskrift: 'Veiledning'};
    logSkjemaFullført();
    return postDialog(data)
        .then(res => {
            dispatch({type: FetchActionTypes.OK, value: res.id});
            return res;
        })
        .catch((reason) => {
            dispatch({type: FetchActionTypes.FAILURE});
            return Promise.reject(reason);
        });
}