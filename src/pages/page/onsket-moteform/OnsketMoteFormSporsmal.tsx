import React, {useReducer} from 'react';
import {PagesProps} from "../../PagesTypes";
import {RouteComponentProps, withRouter} from "react-router-dom";
import OnsketMoteFormView, {MoteForm, moteFormValue, WRITE} from "./OnsketMoteFormView";
import {fetchReducer, initialFetchState} from "../../fetchReducer";
import {frontendLogger} from "../../../components/util/frontendlogger";
import {dispatchDialogData} from "../../dispatchDialogData";
import {PAGE_ID as DIN_SITUASJON_PAGE_ID} from "../din-situasjon/DinSituasjonSporsmal";
import {PAGE_ID as HANDLER_OM_PAGE_ID} from "../hva-skal-mote-handle-om/HvaMotetSkalHandleOmSporsmal";
import {dispatchMotestotte} from "../../dispatchMotestotteData";

export const PAGE_ID = 'onsket-mote-form';

function OnsketMoteFormSporsmal(props: PagesProps & RouteComponentProps) {
    const [fetchDialogState, fetchDialogDispatch] = useReducer(fetchReducer, initialFetchState);
    const [fetchMotestotteState, fetchMotestotteDispatch] = useReducer(fetchReducer, initialFetchState);

    const onSubmit = (value: string) => {
        frontendLogger('forberede-moete.motetype', {}, {type: value});
        if (value === WRITE) {
            dispatchMotestotte(fetchMotestotteDispatch).then(() => props.history.push(`/${DIN_SITUASJON_PAGE_ID}`));

        } else {
            dispatchMotestotte(fetchMotestotteDispatch)
                .then(() =>
                    dispatchDialogData(fetchDialogDispatch, moteFormValue(value as MoteForm))
                        .then((res) => {
                            props.setState({dialogId: res.id});
                            props.history.push(`/${HANDLER_OM_PAGE_ID}`)
                        })
                );
        }
    };

    const href = `aktivitetsplan/dialog`;
    return <OnsketMoteFormView onSubmit={onSubmit}
                               loading={fetchDialogState.loading || fetchMotestotteState.loading}
                               fallbackUrl={href}/>
}

export default withRouter(OnsketMoteFormSporsmal);