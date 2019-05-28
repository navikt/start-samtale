import React, { useReducer } from 'react';
import HvaMotetSkalHandleOmView, { SPORSMAL } from './HvaMotetSkalHandleOmView';
import { fetchReducer, initialFetchState } from '../../fetchReducer';
import { dispatchDialogData } from '../../dispatchDialogData';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { PAGE_ID as NAR_PAGE_ID } from '../nar-passer-motet/NarPasserMotetSporsmal';
import { getQueryParam } from '../../../components/util/querystring-utils';

export const PAGE_ID = 'hva-motet-skal-handle-om';

function HvaMotetSkalHandleOmSporsmal(props: RouteComponentProps) {
    const [fetchState, fetchDispatch] = useReducer(fetchReducer, initialFetchState);
    const dialogId = getQueryParam(props.location.search, 'dialogId');
    const answered = getQueryParam(props.location.search, 'answered') === 'true';

    const onSubmit = (value: string) => {
        if (value.length !== 0) {
            const dialogInputData = {svar: value, spm: SPORSMAL, dialogId: dialogId};

            dispatchDialogData(dialogInputData, fetchDispatch)
                .then((res) => {
                    props.history.replace(props.location.pathname + `?dialogId=${res.id}&answered=true`);
                    props.history.push(`/${NAR_PAGE_ID}?dialogId=${res.id}`);
                });
        } else {
            const queryParam = dialogId ? `?dialogId=${dialogId}` : '';
            props.history.push(`/${NAR_PAGE_ID}${queryParam}`);
        }
    };

    return (
        <HvaMotetSkalHandleOmView
            onSubmit={onSubmit}
            loading={fetchState.loading}
            answered={answered}
        />
    );
}

export default withRouter(HvaMotetSkalHandleOmSporsmal);