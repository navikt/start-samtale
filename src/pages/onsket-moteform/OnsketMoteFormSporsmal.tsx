import React, { useReducer } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { WRITE } from './moteFormUtil'
import { fetchReducer, initialFetchState } from '../fetchReducer'
import { PAGE_ID as DIN_SITUASJON_PAGE_ID } from '../din-situasjon/DinSituasjonSporsmal'
import { PAGE_ID as HANDLER_OM_PAGE_ID } from '../hva-skal-mote-handle-om/HvaMotetSkalHandleOmSporsmal'
import { dispatchMotestotte } from '../dispatchMotestotteData'
import { getQueryParam } from '../../components/util/querystring-utils'
import { logSkjemastegFullfoert } from '../../components/util/amplitude-utils'
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
    logSkjemastegFullfoert(1)

    dispatchMotestotte(fetchMotestotteDispatch).then(() => {
      if (value === WRITE) {
        navigate(`/${DIN_SITUASJON_PAGE_ID}`, {
          state: {
            kanal: value,
            answered: true,
          },
        })
      } else {
        navigate(`/${HANDLER_OM_PAGE_ID}?kanal=${value}&answered=true`, {
          state: {
            kanal: value,
            answered: true,
          },
        })
      }
    })
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
