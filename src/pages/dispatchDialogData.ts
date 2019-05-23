import { FetchAction as FetchAction, FetchActionTypes as FetchActionTypes } from './fetchReducer';
import { DialogData, NyDialogMeldingData } from '../components/api/dataTypes';
import { postDialog } from '../components/api/api';

export function dispatchDialogData(dispatch: (value: FetchAction) => void, value: string, dialogId?: string): Promise<DialogData> {
    dispatch({type: FetchActionTypes.LOADING});
    const data: NyDialogMeldingData = {dialogId: dialogId, tekst: value, overskrift: 'Mitt første møte med NAV'};
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