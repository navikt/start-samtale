import React, { useReducer } from 'react'
import HvaMotetSkalHandleOmView, {
  SPORSMAL_TEMA,
  SPORSMAL_TIDSPUNKT,
} from './HvaMotetSkalHandleOmView'
import { fetchReducer, initialFetchState } from '../fetchReducer'
import { dispatchDialogData } from '../dispatchDialogData'
import { useLocation, useNavigate } from 'react-router-dom'
import { PAGE_ID as OPPSUMMERING_PAGE_ID } from '../oppsummering/Oppsummering'
import { lagDialogTekst } from '../../components/util/dialogTekstUtil'
import { moteFormValue, SPORSMAL_KANAL } from '../onsket-moteform/moteFormUtil'

export const PAGE_ID = 'hva-motet-skal-handle-om'

function HvaMotetSkalHandleOmSporsmal() {
  const [fetchState, fetchDispatch] = useReducer(
    fetchReducer,
    initialFetchState
  )
  const location = useLocation()
  const navigate = useNavigate()

  const onSubmit = async (temaSvar?: string, tidspunktSvar?: string) => {
    const dialogInputData = [
      { spm: SPORSMAL_KANAL, svar: moteFormValue(location.state.kanal) },
      { spm: SPORSMAL_TEMA, svar: temaSvar },
      { spm: SPORSMAL_TIDSPUNKT, svar: tidspunktSvar },
    ]
    dispatchDialogData(lagDialogTekst(dialogInputData), fetchDispatch).then(
      (res) => {
        navigate(`/${OPPSUMMERING_PAGE_ID}`, {
          state: {
            ...location.state,
            dialogId: res.id,
          },
        })
      }
    )
  }

  return (
    <HvaMotetSkalHandleOmView
      onSubmit={onSubmit}
      loading={fetchState.loading}
    />
  )
}

export default HvaMotetSkalHandleOmSporsmal
