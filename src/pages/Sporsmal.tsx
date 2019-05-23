import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import OnsketMoteFormSporsmal from './page/onsket-moteform/OnsketMoteFormSporsmal';
import HvaMotetSkalHandleOmSporsmal, { PAGE_ID as HVA_PAGE_ID } from './page/hva-skal-mote-handle-om/HvaMotetSkalHandleOmSporsmal';
import NarPasserMotetSporsmal, { PAGE_ID as NAR_PAGE_ID } from './page/nar-passer-motet/NarPasserMotetSporsmal';
import DinSituasjonSporsmal, { PAGE_ID as SITUASJON_PAGE_ID } from './page/din-situasjon/DinSituasjonSporsmal';
import Oppsummering, { PAGE_ID as OPPSUMMERING_PAGE_ID } from './page/oppsummering/Oppsummering';
import './Sporsmal.less';

function Sporsmal() {
    return (
        <>
            <BrowserRouter>
                <Route
                    path="/"
                    exact={true}
                    component={OnsketMoteFormSporsmal}
                />
                <Route
                    path={`/${HVA_PAGE_ID}`}
                    component={HvaMotetSkalHandleOmSporsmal}
                />
                <Route
                    path={`/${NAR_PAGE_ID}`}
                    component={NarPasserMotetSporsmal}
                />
                <Route
                    path={`/${SITUASJON_PAGE_ID}`}
                    component={DinSituasjonSporsmal}
                />
                <Route
                    path={`/${OPPSUMMERING_PAGE_ID}`}
                    component={Oppsummering}
                />
            </BrowserRouter>
        </>
    );

}

export default Sporsmal;