import React, {useReducer} from 'react';
import OnsketMoteFormSporsmal, {WRITING_VALUE} from "./OnsketMoteFormSporsmal";
import Stegindikator from "nav-frontend-stegindikator/lib/stegindikator";
import HvaMotetSkalHandleOmSporsmal from "./HvaMotetSkalHandleOmSporsmal";
import NarPasserMotetSporsmal from "./NarPasserMotetSporsmal";
import DinSituasjonSporsmal from "./DinSituasjonSporsmal";
import './Sporsmal.less'

export interface SporsmalProps {
    loading: boolean;
    onSubmit: (value: string) => void;
}

function getSporsmal(id: number): (props: SporsmalProps) => JSX.Element {
    switch (id) {
        case 0: return OnsketMoteFormSporsmal;
        case 1: return HvaMotetSkalHandleOmSporsmal;
        case 2: return NarPasserMotetSporsmal;
        case 3: return DinSituasjonSporsmal;
        default:
            throw new Error('Unexpected question');
    }
}

interface State {
    step: number;
    loading: boolean;
    dialogId: number | undefined;
}

interface Action {
    type: string,
    value: string
}

const initialState = {
    step: 0,
    loading: false,
    dialogId: undefined
};
const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'next':
            if (action.value === WRITING_VALUE){
                return {...state, step: 3, loading: false};
            }
            return {...state, step: state.step + 1, loading: false};
        case 'loading':
            return {...state, loading: true};
        default:
            throw new Error('Unexpected action');
    }
};

function SporsmalManager() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const Question = getSporsmal(state.step);
    return (
        <>
            {
                state.step != 3 && <Stegindikator
                    steg={[
                        {label: "Dette steget først", index: 0},
                        {label: "Og så dette steget", index: 1},
                        {label: "Deretter må du gjøre dette", index: 2},
                    ]}
                    kompakt
                    aktivtSteg={state.step}
                />
            }

            <Question loading={state.loading} onSubmit={(value) => {
                dispatch({type: 'loading', value});
                setTimeout(() => {
                    dispatch({type: 'next', value});
                }, 10000)
            }}/>
        </>
    );
}

export default SporsmalManager;