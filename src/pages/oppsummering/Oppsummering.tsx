import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import queryString from 'query-string';
import {logSkjemaFullført} from "../../components/util/amplitude-utils";
import {Alert, BodyLong, Heading} from "@navikt/ds-react";

export const PAGE_ID = 'oppsummering';

function Oppsummering(props: RouteComponentProps) {
    const parsed = queryString.parse(props.location.search);

    const dialogIdLink = parsed.dialogId ? `/${parsed.dialogId}` : '';
    const href = `${import.meta.env.BASE_URL}/arbeidsrettet-dialog${dialogIdLink}`;
    logSkjemaFullført();

    return (
        <>
            <div className="spm">
                <Heading level="2" className="spm-row" size="medium">
                    Takk for tilbakemelding
                </Heading>
                <div className="spm-row">
                    <Alert variant="success">
                        <BodyLong>
                            Svarene er&nbsp;
                            <a href={`${href}`}>delt med veilederen din.</a>&nbsp;
                        </BodyLong>
                        <BodyLong>
                            Veilederen vil kontakte deg i løpet av noen dager.
                        </BodyLong>

                    </Alert>
                </div>
                <a className="knapp knapp--flat ferdig-knapp" href={`${import.meta.env.BASE_URL}/minside`}>
                    Ferdig
                </a>
            </div>
        </>
    );
}

export default withRouter(Oppsummering);
