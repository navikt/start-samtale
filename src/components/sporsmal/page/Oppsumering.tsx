import React from 'react';
import {Normaltekst, Undertittel} from 'nav-frontend-typografi';
import BekreftTekst from '../../dialog-lenke/BekreftTekst';
import {SporsmalProps} from "../SporsmalView";


function Oppsummering(props: SporsmalProps) {
    return (
        <>
            <div className="spm">
                <Undertittel className="spm-row">
                    Takk for svar
                </Undertittel>
                <div className="spm-row">
                    <BekreftTekst url={props.fallbackUrl}/>
                </div>
                <div className="spm-row">
                    <Normaltekst >
                        Veilederen din vil kontakte deg i løpet av noen dager for å avtale veien videre
                    </Normaltekst>
                </div>

            </div>
        </>
    );
}

export default Oppsummering;
