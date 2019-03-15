import React, {useReducer} from 'react';
import {WRITING_VALUE} from "./page/OnsketMoteFormSporsmal";
import {NyDialogMeldingData} from "../api/dataTypes";
import {postDialog} from "../api/api";
import {initialState as initialFlowState,
    reducer as flowReducer,
    ActionTypes as FlowActionTypes
} from './flowReducer';
import {initialState as initialFetchState,
    reducer as fetchReducer,
    ActionTypes as FetchActionTypes,
    Action as FetchAction
} from './fetchReducer';
import SporsmalView from "./SporsmalView";

function dataFetcher(dispatch: (value: FetchAction) => void, value: string) {
    dispatch({type: FetchActionTypes.LOADING});
    const data: NyDialogMeldingData = {tekst: value};
    return postDialog(data)
        .then(_ => dispatch({type: FetchActionTypes.OK}))
        .catch(() => dispatch({type: FetchActionTypes.FAILURE}))
}

function SporsmalManager() {
    const [flowState, flowDispatch] = useReducer(flowReducer, initialFlowState);
    const [fetchState, fetchDispatch] = useReducer(fetchReducer, initialFetchState);

    const onSubmit = (value: string) => {
            if (flowState.step === 0 && value === WRITING_VALUE){
                flowDispatch({type: FlowActionTypes.SET, value: 3})
            }
            else if(value.length === 0){
                flowDispatch({type: FlowActionTypes.NEXT});
            }
            else {
                dataFetcher(fetchDispatch, value)
                    .then(() => flowDispatch({type: FlowActionTypes.NEXT}))
            }
        };

    return <SporsmalView step={flowState.step}
                     onSubmit={onSubmit}
                     loading={fetchState.loading}/>;


}

export default SporsmalManager;