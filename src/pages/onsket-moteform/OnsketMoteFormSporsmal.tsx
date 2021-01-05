import React, { useReducer } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import OnsketMoteFormView, { MoteForm, moteFormValue, SPORSMAL, WRITE } from './OnsketMoteFormView';
import { fetchReducer, initialFetchState } from '../fetchReducer';
import { frontendLogger } from '../../components/util/frontendlogger';
import { dispatchDialogData } from '../dispatchDialogData';
import { PAGE_ID as DIN_SITUASJON_PAGE_ID } from '../din-situasjon/DinSituasjonSporsmal';
import { PAGE_ID as HANDLER_OM_PAGE_ID } from '../hva-skal-mote-handle-om/HvaMotetSkalHandleOmSporsmal';
import { dispatchMotestotte } from '../dispatchMotestotteData';
import { getQueryParam } from '../../components/util/querystring-utils';

export const PAGE_ID = 'onsket-mote-form';

function OnsketMoteFormSporsmal(props: RouteComponentProps) {
    const [fetchDialogState, fetchDialogDispatch] = useReducer(fetchReducer, initialFetchState);
    const [fetchMotestotteState, fetchMotestotteDispatch] = useReducer(fetchReducer, initialFetchState);

    const dialogId = getQueryParam(props.location.search, 'dialogId');
    const answered = getQueryParam(props.location.search, 'answered') === 'true';

    const onSubmit = (value: string) => {
        const dialogInputData = {svar: moteFormValue(value as MoteForm), spm: SPORSMAL, dialogId: dialogId};

        frontendLogger('forberede-moete.motetype', {}, {type: value});
        dispatchMotestotte(fetchMotestotteDispatch)
            .then(() =>
                dispatchDialogData(dialogInputData, fetchDialogDispatch)
                    .then((res) => {
                        props.history.replace(props.location.pathname + `?dialogId=${res.id}&answered=true`);
                        if (value === WRITE) {
                            props.history.push(`/${DIN_SITUASJON_PAGE_ID}?dialogId=${res.id}`);
                        } else {
                            props.history.push(`/${HANDLER_OM_PAGE_ID}?dialogId=${res.id}`);
                        }
                    })
            );
    };

    return (
        <OnsketMoteFormView
            onSubmit={onSubmit}
            loading={fetchDialogState.loading || fetchMotestotteState.loading}
            answered={answered}
        />
    );
}

export default withRouter(OnsketMoteFormSporsmal);