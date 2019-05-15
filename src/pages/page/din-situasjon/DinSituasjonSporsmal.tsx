import React, {useReducer} from 'react';
import {RouteComponentProps, withRouter} from "react-router-dom";
import {PagesProps} from "../../PagesTypes";
import DinSituasjonView from "./DinSituasjonView";
import {fetchReducer, initialFetchState} from '../../fetchReducer'
import {dispatchDialogData} from "../../dispatchDialogData";
import {PAGE_ID as OPPSUMMERING_PAGE_ID} from "../oppsummering/Oppsummering";

export const PAGE_ID = 'din-situasjon';

function DinSituasjonSporsmal(props: PagesProps & RouteComponentProps) {
    const [fetchState, fetchDispatch] = useReducer(fetchReducer, initialFetchState);

    const onSubmit = (value: string) => {
        if (value.length !== 0) {
            dispatchDialogData(fetchDispatch, value, props.state.dialogId)
                .then((res) => {
                    props.setState({dialogId: res.id});
                    props.history.push(`/${OPPSUMMERING_PAGE_ID}`)
                })
        }else {
            props.history.push(`/${OPPSUMMERING_PAGE_ID}`)
        }
    };

    const dialogIdLink = props.state.dialogId ? `/${props.state.dialogId}` : '';
    const href = `aktivitetsplan/dialog${dialogIdLink}`;

    return <DinSituasjonView onSubmit={onSubmit}
                             loading={fetchState.loading}
                             fallbackUrl={href}/>;
}

export default withRouter(DinSituasjonSporsmal);