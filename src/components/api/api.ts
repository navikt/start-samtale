import {fetchData} from "./fetchData";
import {DialogData, NyDialogMeldingData} from "./dataTypes";

export const API_VEILARBDIALOG = '/veilarbdialog/api/dialog';


function getCookie(name: string) {
    const re = new RegExp(`${name}=([^;]+)`);
    const match = re.exec(document.cookie);
    return match !== null ? match[1] : '';
}

function getHeaders() {
    return new Headers({
        'Content-Type': 'application/json',
        'NAV_CSRF_PROTECTION': getCookie('NAV_CSRF_PROTECTION'),
    });
}

const CONFIG = {
    credentials: ('same-origin' as RequestCredentials),
    headers: getHeaders(),
};

export function postDialog(data: NyDialogMeldingData): Promise<DialogData> {
    return fetchData<DialogData>(API_VEILARBDIALOG, {method: 'post', body: JSON.stringify(data), ...CONFIG});
}