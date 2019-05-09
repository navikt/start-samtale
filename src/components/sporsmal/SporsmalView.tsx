import React from 'react';
import OnsketMoteFormSporsmal from "./page/OnsketMoteFormSporsmal";
import HvaMotetSkalHandleOmSporsmal from "./page/HvaMotetSkalHandleOmSporsmal";
import NarPasserMotetSporsmal from "./page/NarPasserMotetSporsmal";
import DinSituasjonSporsmal from "./page/DinSituasjonSporsmal";
import './Sporsmal.less'
import Redirect from "../util/Redirect";
import Oppsummering from "./page/Oppsumering";

export interface SporsmalProps {
    loading: boolean;
    onSubmit: (value: string) => void;
    fallbackUrl: string;
}

function getSporsmal(id: number): undefined | ((props: SporsmalProps) => JSX.Element) {
    switch (id) {
        case 0:
            return OnsketMoteFormSporsmal;
        case 1:
            return HvaMotetSkalHandleOmSporsmal;
        case 2:
            return NarPasserMotetSporsmal;
        case 4:
            return DinSituasjonSporsmal;
        case 5:
            return Oppsummering;
        default:
            return undefined
    }
}

interface SporsmalViewProps {
    step: number
    onSubmit: (value: string) => void
    loading: boolean
    fallbackUrl: string
}

function SporsmalView(props: SporsmalViewProps) {
    const Question = getSporsmal(props.step);
    if (!Question) {
        return <Redirect to={props.fallbackUrl}/>
    }
    return <Question loading={props.loading} onSubmit={props.onSubmit} fallbackUrl={props.fallbackUrl}/>
}

export default SporsmalView;