import React from 'react';
import OnsketMoteFormSporsmal from "./page/OnsketMoteFormSporsmal";
import Stegindikator from "../stegindikator/Stegindikator";
import HvaMotetSkalHandleOmSporsmal from "./page/HvaMotetSkalHandleOmSporsmal";
import NarPasserMotetSporsmal from "./page/NarPasserMotetSporsmal";
import DinSituasjonSporsmal from "./page/DinSituasjonSporsmal";
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
        default:
            return DinSituasjonSporsmal;
    }
}

interface SporsmalViewProps {
    step: number
    onSubmit: (value:string) => void
    loading: boolean
}

function SporsmalView(props: SporsmalViewProps) {
    const Question = getSporsmal(props.step);
    return (
        <>
            <Stegindikator aktivtSteg={props.step}/>
            <Question loading={props.loading}
                      onSubmit={props.onSubmit}/>
        </>
    );
}

export default SporsmalView;