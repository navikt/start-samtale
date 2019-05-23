import React, { useReducer } from 'react';
import NarPasserMotetView from './NarPasserMotetView';
import { fetchReducer, initialFetchState } from '../../fetchReducer';
import { dispatchDialogData } from '../../dispatchDialogData';
import { PAGE_ID as OPPSUMMERING_PAGE_ID } from '../oppsummering/Oppsummering';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { getQueryParam } from '../../../components/util/querystring-utils';

export const PAGE_ID = 'nar-passer-motet';

function NarPasserMotetSporsmal(props: RouteComponentProps) {
    const [fetchState, fetchDispatch] = useReducer(fetchReducer, initialFetchState);
    const dialogId = getQueryParam(props.location.search, 'dialogId');
    const answered = getQueryParam(props.location.search, 'answered') === 'true';

    const onSubmit = (value: string) => {
        if (value.length !== 0) {
            dispatchDialogData(fetchDispatch, value, dialogId)
                .then((res) => {
                    props.history.replace(props.location.pathname + `?dialogId=${res.id}&answered=true`);
                    props.history.push(`/${OPPSUMMERING_PAGE_ID}?dialogId=${res.id}`);
                });
        } else {
            const queryParam = dialogId ? `?dialogId=${dialogId}` : '';
            props.history.push(`/${OPPSUMMERING_PAGE_ID}${queryParam}`);
        }
    };

    const dialogIdLink = dialogId ? `/${dialogId}` : '';
    const href = `aktivitetsplan/dialog${dialogIdLink}`;

    return (
        <NarPasserMotetView
            onSubmit={onSubmit}
            loading={fetchState.loading}
            answered={answered}
            fallbackUrl={href}
        />
    );
}

export default withRouter(NarPasserMotetSporsmal);