import React from 'react';
import { Route } from 'react-router-dom';
import OnsketMoteFormSporsmal from "./page/OnsketMoteFormSporsmal";
import HvaMotetSkalHandleOmSporsmal from "./page/HvaMotetSkalHandleOmSporsmal";
import NarPasserMotetSporsmal from "./page/NarPasserMotetSporsmal";
import DinSituasjonSporsmal from "./page/DinSituasjonSporsmal";
import './Sporsmal.less'
import Oppsummering from "./page/Oppsummering";

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

    return (
        <Route
            path="/"
            exact={true}
            component={() => <OnsketMoteFormSporsmal state={value} setState={setValue}/>}
        />
    )
    // return <Question loading={props.loading} onSubmit={props.onSubmit} fallbackUrl={props.fallbackUrl}/>
}

export default SporsmalView;