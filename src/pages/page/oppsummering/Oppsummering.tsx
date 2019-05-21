import React from 'react';
import {Normaltekst, Undertittel} from 'nav-frontend-typografi';
import { AlertStripeSuksess } from 'nav-frontend-alertstriper';
import {PagesProps} from "../../PagesTypes";

export const PAGE_ID = 'oppsumering';

function Oppsummering(props: PagesProps) {
    const dialogIdLink = props.state.dialogId ? `/${props.state.dialogId}` : '';
    const href = `aktivitetsplan/dialog${dialogIdLink}`;

    return (
        <>
            <div className="spm">
                <Undertittel className="spm-row">
                    Takk for tilbakemelding
                </Undertittel>
                <div className="spm-row">
                    <AlertStripeSuksess>
                        <Normaltekst>
                            Svarene er&nbsp;
                            <a href={`${href}`}>delt med veilederen din.</a>&nbsp;
                        </Normaltekst>
                        <Normaltekst>
                            Veilederen vil kontakte deg i løpet av noen dager.
                        </Normaltekst>

                    </AlertStripeSuksess>
                </div>
                <a href="/veientilarbeid">
                    Ferdig
                </a>
            </div>
        </>
    );
}

export default Oppsummering;
