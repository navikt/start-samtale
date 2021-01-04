import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import OnsketMoteFormSporsmal from './onsket-moteform/OnsketMoteFormSporsmal';
import HvaMotetSkalHandleOmSporsmal, { PAGE_ID as HVA_PAGE_ID } from './hva-skal-mote-handle-om/HvaMotetSkalHandleOmSporsmal';
import NarPasserMotetSporsmal, { PAGE_ID as NAR_PAGE_ID } from './nar-passer-motet/NarPasserMotetSporsmal';
import DinSituasjonSporsmal, { PAGE_ID as SITUASJON_PAGE_ID } from './din-situasjon/DinSituasjonSporsmal';
import Oppsummering, { PAGE_ID as OPPSUMMERING_PAGE_ID } from './oppsummering/Oppsummering';
import './Sporsmal.less';
import PageChangeListener from '../components/PageChangeListener';
import {getOppfolging} from "../components/api/api";
import {OppfolgingData} from "../components/api/dataTypes";
import {AlertStripeAdvarsel} from "nav-frontend-alertstriper";
import NavFrontendSpinner from "nav-frontend-spinner";

function erProd() {
    //trengs da ingen av brukerne er registrert i krr i testmiljø
    return window.location.hostname === 'www.nav.no' || window.location.hostname === 'app.adeo.no';
}

function invalidOppfolging(oppfolging: OppfolgingData | undefined){
    if (!oppfolging){
        return true;
    }

    return !oppfolging.underOppfolging || (!oppfolging.kanVarsles && erProd()) || oppfolging.manuell || oppfolging.reservasjonKRR;
}

function StatusAdvarsel(){
    return <div className="spm-alert">
        <AlertStripeAdvarsel>Du har ikke tilgang til denne siden.</AlertStripeAdvarsel>
    </div>
}


function Sporsmal() {
    const basename = process.env.PUBLIC_URL;
    const [laster, setLaster] = useState(true);
    const [oppfolging, setOppfolging] = useState<undefined | OppfolgingData>();
    useEffect(() => {
        getOppfolging().then(data => {
                setOppfolging(data);
                setLaster(false);
            }
        )
    }, [setOppfolging, setLaster]);

    if (laster) {
        return <NavFrontendSpinner type="XL"/>
    }

    if (invalidOppfolging(oppfolging)){
        return <StatusAdvarsel/>
    }

    return (
        <>
            <BrowserRouter basename={basename}>
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
                <PageChangeListener/>
            </BrowserRouter>
        </>
    );

}

export default Sporsmal;