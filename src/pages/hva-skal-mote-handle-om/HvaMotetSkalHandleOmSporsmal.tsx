import React, { useReducer } from 'react'
import HvaMotetSkalHandleOmView, {
  SPORSMAL_TEMA,
  SPORSMAL_TIDSPUNKT,
} from './HvaMotetSkalHandleOmView'
import { fetchReducer, initialFetchState } from '../fetchReducer'
import { dispatchDialogData } from '../dispatchDialogData'
import { useLocation, useNavigate } from 'react-router-dom'
import { PAGE_ID as OPPSUMMERING_PAGE_ID } from '../oppsummering/Oppsummering'
import { getQueryParam } from '../../components/util/querystring-utils'

export const PAGE_ID = 'hva-motet-skal-handle-om'

function HvaMotetSkalHandleOmSporsmal() {
  const [fetchState, fetchDispatch] = useReducer(
    fetchReducer,
    initialFetchState
  )
  const location = useLocation()
  const dialogId = getQueryParam(location.search, 'dialogId')
  const answered = getQueryParam(location.search, 'answered') === 'true'
  const navigate = useNavigate()

  const sendDialogData = (spm: string, svar?: string) => {
    if (!svar) return Promise.resolve({ id: dialogId })
    const dialogInputData = {
      svar,
      spm,
      dialogId: dialogId,
    }
    return dispatchDialogData(dialogInputData, fetchDispatch)
  }

  const onSubmit = async (temaSvar?: string, tidspunktSvar?: string) => {
    await sendDialogData(SPORSMAL_TEMA, temaSvar)
    await sendDialogData(SPORSMAL_TIDSPUNKT, tidspunktSvar)

    navigate(location.pathname + `?dialogId=${dialogId}&answered=true`, {
      replace: true,
    })
    navigate(`/${OPPSUMMERING_PAGE_ID}?dialogId=${dialogId}`)
  }

  return (
    <HvaMotetSkalHandleOmView
      onSubmit={onSubmit}
      loading={fetchState.loading}
      answered={answered}
    />
  )
}

export default HvaMotetSkalHandleOmSporsmal
