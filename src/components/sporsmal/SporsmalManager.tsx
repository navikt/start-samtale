import React, {useReducer} from 'react';
import {MoteForm, moteFormValue, WRITE} from "./page/OnsketMoteFormSporsmal";
import {NyDialogMeldingData} from "../api/dataTypes";
import {postDialog} from "../api/api";
import {
    initialState as initialFlowState,
    reducer as flowReducer,
    ActionTypes as FlowActionTypes
} from './flowReducer';
import {
    initialState as initialFetchState,
    reducer as fetchReducer,
    ActionTypes as FetchActionTypes,
    Action as FetchAction
} from './fetchReducer';
import SporsmalView from "./SporsmalView";
import {frontendLogger} from "../util/frontendlogger";


function dataFetcher(dispatch: (value: FetchAction) => void, value: string, dialogId?: string) {
    dispatch({type: FetchActionTypes.LOADING});
    const data: NyDialogMeldingData = {dialogId: dialogId, tekst: value, overskrift: 'Mitt første møte med NAV'};
    return postDialog(data)
        .then(res => dispatch({type: FetchActionTypes.OK, value: res.id}))
        .catch((reason) => {
            dispatch({type: FetchActionTypes.FAILURE});
            return Promise.reject(reason)
        })
}

function SporsmalManager() {

    const [flowState, flowDispatch] = useReducer(flowReducer, initialFlowState);
    const [fetchState, fetchDispatch] = useReducer(fetchReducer, initialFetchState);

    const onSubmit = (value: string) => {
        if (flowState.step === 0) {
            frontendLogger('forberede-moete.motetype', {},{type: value});
            if(value === WRITE){
                flowDispatch({type: FlowActionTypes.SET, value: 4})
            } else {
                dataFetcher(fetchDispatch, moteFormValue(value as MoteForm))
                    .then(() => flowDispatch({type: FlowActionTypes.NEXT}))
            }
        }
        else if (value.length === 0) {
            flowDispatch({type: FlowActionTypes.NEXT});
        }
        else {
            dataFetcher(fetchDispatch, value, fetchState.dialogId)
                .then(() => flowDispatch({type: FlowActionTypes.NEXT}))
        }
    };


    const dialogIdLink = fetchState.dialogId ? `/${fetchState.dialogId}` : '';
    const href = `aktivitetsplan/dialog${dialogIdLink}`;

    return <>
        <SporsmalView
            fallbackUrl={href}
            step={flowState.step}
            onSubmit={onSubmit}
            loading={fetchState.loading}/>
    </>


}

export default SporsmalManager;