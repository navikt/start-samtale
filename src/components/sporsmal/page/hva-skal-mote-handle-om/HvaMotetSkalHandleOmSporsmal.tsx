import React, {useReducer} from 'react';
import {PagesProps} from "../../PagesTypes";
import HvaMotetSkalHandleOmView from "./HvaMotetSkalHandleOmView";
import {fetchReducer, initialFetchState} from "../../fetchReducer";
import {dispatchDialogData} from "../../dispatchDialogData";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {PAGE_ID as NAR_PAGE_ID} from "../nar-passer-motet/NarPasserMotetSporsmal";

export const PAGE_ID = 'hva-motet-skal-handle-om';

function HvaMotetSkalHandleOmSporsmal(props: PagesProps & RouteComponentProps) {
    const [fetchState, fetchDispatch] = useReducer(fetchReducer, initialFetchState);

    const onSubmit = (value: string) => {
        if (value.length !== 0) {
            dispatchDialogData(fetchDispatch, value, props.state.dialogId)
                .then(() => {
                    props.history.push(`/${NAR_PAGE_ID}`)
                })
        } else {
            props.history.push(`/${NAR_PAGE_ID}`)
        }
    };


    const dialogIdLink = props.state.dialogId ? `/${props.state.dialogId}` : '';
    const href = `aktivitetsplan/dialog${dialogIdLink}`;

    return <HvaMotetSkalHandleOmView onSubmit={onSubmit} loading={fetchState.loading} fallbackUrl={href}/>
}

export default withRouter(HvaMotetSkalHandleOmSporsmal);