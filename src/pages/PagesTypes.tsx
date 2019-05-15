export interface PagesState {
    dialogId?: string;
}

export interface PagesProps {
    setState: SetStateFunc;
    state: PagesState;
}

export type SetStateFunc = (state: PagesState) => void;