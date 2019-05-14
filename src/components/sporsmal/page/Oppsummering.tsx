import React from 'react';
import {Normaltekst, Undertittel} from 'nav-frontend-typografi';
import { AlertStripeSuksess } from 'nav-frontend-alertstriper';
import {SporsmalProps} from "../SporsmalView";


function Oppsummering(props: SporsmalProps) {
    return (
        <>
            <div className="spm">
                <Undertittel className="spm-row">
                    Takk for tilbakemelding
                </Undertittel>
                <div className="spm-row">
                    <AlertStripeSuksess>
                        <Normaltekst>
                            Svarene dine er er&nbsp;
                            <a href={`${props.fallbackUrl}`}>delt med veilederen din</a>&nbsp;
                            som nå vil kontakte deg i løpet av noen dager
                        </Normaltekst>
                    </AlertStripeSuksess>
                </div>
            </div>
        </>
    );
}

export default Oppsummering;
