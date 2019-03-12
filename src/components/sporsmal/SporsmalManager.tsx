import React, {useReducer} from 'react';
import OnsketMoteFormSporsmal from "./OnsketMoteFormSporsmal";
import Stegindikator from "nav-frontend-stegindikator/lib/stegindikator";
import HvaMotetSkalHandleOmSporsmal from "./HvaMotetSkalHandleOmSporsmal";
import NarPasserMotetSporsmal from "./NarPasserMotetSporsmal";
import './Sporsmal.less'

export interface SporsmalProps {
    onSubmit: () => void;
}

function getSporsmal(id: number): (props: SporsmalProps) => JSX.Element {
    switch (id) {
        case 0:
            return OnsketMoteFormSporsmal;
        case 1:
            return HvaMotetSkalHandleOmSporsmal;
        case 2:
            return NarPasserMotetSporsmal;
        default:
            throw new Error('Unexpected question');
    }
}

const initialState = 0;
const reducer = (state: number, action: string) => {
    switch (action) {
        case 'next':
            return state + 1;
        case 'reset':
            return 0;
        default:
            throw new Error('Unexpected action');
    }
};

function SporsmalManager() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const Question = getSporsmal(state);
    return (
        <>
            <Stegindikator
                steg={[
                    {label: "Dette steget først", index: 0},
                    {label: "Og så dette steget", index: 1},
                    {label: "Deretter må du gjøre dette", index: 2},
                ]}
                kompakt
                aktivtSteg={state}
            />

            <Question onSubmit={() => dispatch('next')}/>
        </>
    );
}

export default SporsmalManager;