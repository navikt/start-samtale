import React, {useReducer} from 'react';
import {PagesProps} from "../../PagesTypes";
import NarPasserMotetView from "./NarPasserMotetView";
import {fetchReducer, initialFetchState} from "../../fetchReducer";
import {dispatchDialogData} from "../../dispatchDialogData";
import {PAGE_ID as OPPSUMMERING_PAGE_ID} from "../oppsummering/Oppsummering";
import {RouteComponentProps, withRouter} from "react-router-dom";

export const PAGE_ID = 'nar-passer-motet';

function NarPasserMotetSporsmal(props: PagesProps & RouteComponentProps) {
    const [fetchState, fetchDispatch] = useReducer(fetchReducer, initialFetchState);

    const onSubmit = (value: string) => {
        if (value.length !== 0) {
            dispatchDialogData(fetchDispatch, value, props.state.dialogId)
                .then(() => {
                    props.history.push(`/${OPPSUMMERING_PAGE_ID}`)
                })
        } else {
            props.history.push(`/${OPPSUMMERING_PAGE_ID}`)
        }
    };

    const dialogIdLink = props.state.dialogId ? `/${props.state.dialogId}` : '';
    const href = `aktivitetsplan/dialog${dialogIdLink}`;

    return <NarPasserMotetView onSubmit={onSubmit} loading={fetchState.loading} fallbackUrl={href}/>
}

export default withRouter(NarPasserMotetSporsmal);