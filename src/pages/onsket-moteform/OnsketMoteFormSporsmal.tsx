import React, { useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import { WRITE } from './moteFormUtil'
import { fetchReducer, initialFetchState } from '../fetchReducer'
import { PAGE_ID as DIN_SITUASJON_PAGE_ID } from '../din-situasjon/DinSituasjonSporsmal'
import { PAGE_ID as HANDLER_OM_PAGE_ID } from '../hva-skal-mote-handle-om/HvaMotetSkalHandleOmSporsmal'
import { dispatchMotestotte } from '../dispatchMotestotteData'
import { logSkjemastegFullfoert } from '../../components/util/amplitude-utils'
import OnsketMoteFormView from './OnsketMoteFormView'

export const PAGE_ID = 'onsket-mote-form'

const OnsketMoteFormSporsmal = () => {
  const [fetchMotestotteState, fetchMotestotteDispatch] = useReducer(
    fetchReducer,
    initialFetchState
  )

  const navigate = useNavigate()

  const onSubmit = (value: string) => {
    logSkjemastegFullfoert(1)
    dispatchMotestotte(fetchMotestotteDispatch).then(() => {
      const nextPage =
        value === WRITE ? DIN_SITUASJON_PAGE_ID : HANDLER_OM_PAGE_ID
      navigate(`/${nextPage}`, {
        state: {
          kanal: value,
        },
      })
    })
  }

  return (
    <OnsketMoteFormView
      onSubmit={onSubmit}
      loading={fetchMotestotteState.loading}
    />
  )
}

export default OnsketMoteFormSporsmal
