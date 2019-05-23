import React, { useReducer } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import OnsketMoteFormView, { MoteForm, moteFormValue, WRITE } from './OnsketMoteFormView';
import { fetchReducer, initialFetchState } from '../../fetchReducer';
import { frontendLogger } from '../../../components/util/frontendlogger';
import { dispatchDialogData } from '../../dispatchDialogData';
import { PAGE_ID as DIN_SITUASJON_PAGE_ID } from '../din-situasjon/DinSituasjonSporsmal';
import { PAGE_ID as HANDLER_OM_PAGE_ID } from '../hva-skal-mote-handle-om/HvaMotetSkalHandleOmSporsmal';
import { dispatchMotestotte } from '../../dispatchMotestotteData';
import { getQueryParam } from '../../../components/util/querystring-utils';

export const PAGE_ID = 'onsket-mote-form';

function OnsketMoteFormSporsmal(props: RouteComponentProps) {
    const [fetchDialogState, fetchDialogDispatch] = useReducer(fetchReducer, initialFetchState);
    const [fetchMotestotteState, fetchMotestotteDispatch] = useReducer(fetchReducer, initialFetchState);

    const dialogId = getQueryParam(props.location.search, 'dialogId');
    const answered = getQueryParam(props.location.search, 'answered') === 'true';

    const onSubmit = (value: string) => {
        frontendLogger('forberede-moete.motetype', {}, {type: value});
        if (value === WRITE) {
            dispatchMotestotte(fetchMotestotteDispatch).then(() => {
                props.history.replace(props.location.pathname + `?answered=true`);
                props.history.push(`/${DIN_SITUASJON_PAGE_ID}`);
            });

        } else {
            dispatchMotestotte(fetchMotestotteDispatch)
                .then(() =>
                    dispatchDialogData(fetchDialogDispatch, moteFormValue(value as MoteForm), dialogId)
                        .then((res) => {
                            props.history.replace(props.location.pathname + `?dialogId=${res.id}&answered=true`);
                            props.history.push(`/${HANDLER_OM_PAGE_ID}?dialogId=${res.id}`);
                        })
                );
        }
    };

    const dialogIdLink = dialogId ? `/${dialogId}` : '';
    const href = `aktivitetsplan/dialog${dialogIdLink}`;
    return (
        <OnsketMoteFormView
            onSubmit={onSubmit}
            loading={fetchDialogState.loading || fetchMotestotteState.loading}
            fallbackUrl={href}
            answered={answered}
        />
    );
}

export default withRouter(OnsketMoteFormSporsmal);