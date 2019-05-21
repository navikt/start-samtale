import React from 'react';
import {Normaltekst, Undertittel} from 'nav-frontend-typografi';
import { AlertStripeSuksess } from 'nav-frontend-alertstriper';
import {RouteComponentProps, withRouter} from "react-router-dom";
import queryString from 'query-string';

export const PAGE_ID = 'oppsumering';

function Oppsummering(props: RouteComponentProps) {
    const parsed = queryString.parse(props.location.search);

    const dialogIdLink = parsed['dialogId'] ? `/${parsed['dialogId']}` : '';
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

export default withRouter(Oppsummering);
