import React, {useState} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {PagesState} from "./PagesTypes";
import OnsketMoteFormSporsmal from "./page/onsket-moteform/OnsketMoteFormSporsmal";
import HvaMotetSkalHandleOmSporsmal, {PAGE_ID as HVA_PAGE_ID} from "./page/hva-skal-mote-handle-om/HvaMotetSkalHandleOmSporsmal";
import NarPasserMotetSporsmal, {PAGE_ID as NAR_PAGE_ID} from "./page/nar-passer-motet/NarPasserMotetSporsmal";
import DinSituasjonSporsmal, {PAGE_ID as SITUASJON_PAGE_ID} from "./page/din-situasjon/DinSituasjonSporsmal";
import Oppsummering, {PAGE_ID as OPPSUMMERING_PAGE_ID} from "./page/oppsummering/Oppsummering";
import './Sporsmal.less'

const initalState: PagesState = {};

function SporsmalManager() {
    const [value, setValue] = useState(initalState);

    return <>
        <BrowserRouter>
            <Route
                path="/"
                exact={true}
                component={() => <OnsketMoteFormSporsmal state={value} setState={setValue}/>}
            />
            <Route
                path={`/${HVA_PAGE_ID}`}
                component={() => <HvaMotetSkalHandleOmSporsmal state={value} setState={setValue}/>}
            />
            <Route
                path={`/${NAR_PAGE_ID}`}
                component={() => <NarPasserMotetSporsmal state={value} setState={setValue}/>}
            />
            <Route
                path={`/${SITUASJON_PAGE_ID}`}
                component={() => <DinSituasjonSporsmal state={value} setState={setValue}/>}
            />
            <Route
                path={`/${OPPSUMMERING_PAGE_ID}`}
                component={() => <Oppsummering state={value} setState={setValue}/>}
            />
        </BrowserRouter>
    </>


}

export default SporsmalManager;