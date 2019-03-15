import {parse} from "query-string";

export function parseDialogId(): string | undefined {
    const dialogId = parse(location.search).dialogId;

    if (Array.isArray(dialogId)) {
        return dialogId[0];
    } else {
        return dialogId || undefined;
    }
}