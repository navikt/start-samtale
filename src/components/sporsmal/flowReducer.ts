export enum ActionTypes {
    NEXT,
    SET
}

interface State {
    step: number;
}

interface Action {
    type: ActionTypes,
    value?: number
}

export const initialState = {
    step: 0,
};

export const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case ActionTypes.NEXT :
            return {...state, step: state.step + 1};
        case ActionTypes.SET:
            return {...state, step: action.value || 0};
    }
};