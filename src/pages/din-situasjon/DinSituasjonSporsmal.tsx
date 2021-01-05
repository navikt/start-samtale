import React, { useReducer } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import DinSituasjonView, { SPORSMAL } from './DinSituasjonView';
import { fetchReducer, initialFetchState } from '../fetchReducer';
import { dispatchDialogData } from '../dispatchDialogData';
import { PAGE_ID as OPPSUMMERING_PAGE_ID } from '../oppsummering/Oppsummering';
import { getQueryParam } from '../../components/util/querystring-utils';

export const PAGE_ID = 'din-situasjon';

function DinSituasjonSporsmal(props: RouteComponentProps) {
    const [fetchState, fetchDispatch] = useReducer(fetchReducer, initialFetchState);
    const dialogId = getQueryParam(props.location.search, 'dialogId');
    const answered = getQueryParam(props.location.search, 'answered') === 'true';

    const onSubmit = (value: string) => {
        if (value.length !== 0) {
            const dialogInputData = {svar: value, spm: SPORSMAL, dialogId: dialogId};
            dispatchDialogData(dialogInputData, fetchDispatch)
                .then((res) => {
                    props.history.replace(props.location.pathname + `?dialogId=${res.id}&answered=true`);
                    props.history.push(`/${OPPSUMMERING_PAGE_ID}`);
                });
        } else {
            const queryParam = dialogId ? `?dialogId=${dialogId}` : '';
            props.history.push(`/${OPPSUMMERING_PAGE_ID}${queryParam}`);
        }
    };

    return (
        <DinSituasjonView
            onSubmit={onSubmit}
            loading={fetchState.loading}
            answered={answered}
        />
    );
}

export default withRouter(DinSituasjonSporsmal);