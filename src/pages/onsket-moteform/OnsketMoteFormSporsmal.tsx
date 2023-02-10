import React, { useReducer } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { MoteForm, moteFormValue, SPORSMAL, WRITE } from './moteFormUtil'
import { fetchReducer, initialFetchState } from '../fetchReducer'
import { frontendLogger } from '../../components/util/frontendlogger'
import { dispatchDialogData } from '../dispatchDialogData'
import { PAGE_ID as DIN_SITUASJON_PAGE_ID } from '../din-situasjon/DinSituasjonSporsmal'
import { PAGE_ID as HANDLER_OM_PAGE_ID } from '../hva-skal-mote-handle-om/HvaMotetSkalHandleOmSporsmal'
import { dispatchMotestotte } from '../dispatchMotestotteData'
import { getQueryParam } from '../../components/util/querystring-utils'
import { logSkjemastegFullført } from '../../components/util/amplitude-utils'
import OnsketMoteFormView from './OnsketMoteFormView'

export const PAGE_ID = 'onsket-mote-form'

function OnsketMoteFormSporsmal() {
  const [fetchDialogState, fetchDialogDispatch] = useReducer(
    fetchReducer,
    initialFetchState
  )
  const [fetchMotestotteState, fetchMotestotteDispatch] = useReducer(
    fetchReducer,
    initialFetchState
  )

  const location = useLocation()
  const dialogId = getQueryParam(location.search, 'dialogId')
  const answered = getQueryParam(location.search, 'answered') === 'true'
  const navigate = useNavigate()

  const onSubmit = (value: string) => {
    logSkjemastegFullført(1)
    const dialogInputData = {
      svar: moteFormValue(value as MoteForm),
      spm: SPORSMAL,
      dialogId: dialogId,
    }

    frontendLogger('forberede-moete.motetype', {}, { type: value })
    dispatchMotestotte(fetchMotestotteDispatch).then(() =>
      dispatchDialogData(dialogInputData, fetchDialogDispatch).then((res) => {
        navigate(location.pathname + `?dialogId=${res.id}&answered=true`, {
          replace: true,
        })
        if (value === WRITE) {
          navigate(`/${DIN_SITUASJON_PAGE_ID}?dialogId=${res.id}`)
        } else {
          navigate(`/${HANDLER_OM_PAGE_ID}?dialogId=${res.id}`)
        }
      })
    )
  }

  return (
    <OnsketMoteFormView
      onSubmit={onSubmit}
      loading={fetchDialogState.loading || fetchMotestotteState.loading}
      answered={answered}
    />
  )
}

export default OnsketMoteFormSporsmal
