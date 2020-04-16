import React from 'react';
import { Normaltekst, Undertittel } from 'nav-frontend-typografi';
import {AlertStripeInfo, AlertStripeSuksess} from 'nav-frontend-alertstriper';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import queryString from 'query-string';

export const PAGE_ID = 'oppsummering';

function Oppsummering(props: RouteComponentProps) {
    const parsed = queryString.parse(props.location.search);

    const dialogIdLink = parsed.dialogId ? `/${parsed.dialogId}` : '';
    const href = `${process.env.PUBLIC_URL}/arbeidsrettet-dialog${dialogIdLink}`;

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
                    <div style={{marginTop: '1rem'}}>
                        <AlertStripeInfo>
                            <Normaltekst>Svartiden kan bli lenger enn vanlig på grunn av situasjonen rundt korona.</Normaltekst>
                        </AlertStripeInfo>
                    </div>
                </div>
                <a className="knapp knapp--flat ferdig-knapp" href={`${process.env.PUBLIC_URL}/ditt-nav`}>
                    Ferdig
                </a>
            </div>
        </>
    );
}

export default withRouter(Oppsummering);
