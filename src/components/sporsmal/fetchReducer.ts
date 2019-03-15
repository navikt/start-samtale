export enum ActionTypes {
    LOADING,
    FAILURE,
    OK
}

interface State {
    loading: boolean;
    failure: boolean
    dialogId?: string;
}

export interface Action {
    type: ActionTypes,
    value?: string
}

export const initialState = {
    loading: false,
    failure: false,
    dialogId: undefined
};

export const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case ActionTypes.LOADING:
            return {...state, loading: true};
        case ActionTypes.OK:
            return {...state, loading: false, dialogId: action.value};
        case ActionTypes.FAILURE:
            return {...state, loading: false, failure: true};
    }
};